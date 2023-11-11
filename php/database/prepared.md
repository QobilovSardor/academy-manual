# 📔 MySQL Prepared Statements

## MySQL Prepared Statements (MySQL tomonidan tayyorlangan bayonotlar)

Tayyorlangan bayonotlar SQL in'ektsiyalariga qarshi juda foydali.

Tayyorlangan bayonotlar va bog'langan parametrlar

Tayyorlangan bayonot bir xil (yoki shunga o'xshash) SQL ko'rsatmalarini yuqori samaradorlik bilan qayta-qayta bajarish uchun ishlatiladigan xususiyatdir.

Tayyorlangan bayonotlar asosan shunday ishlaydi:

1. Tayyorlang: SQL bayonoti shabloni yaratiladi va ma'lumotlar bazasiga yuboriladi. Muayyan qiymatlar parametrlar deb ataladigan ("?" etiketli) belgilanmagan holda qoldiriladi. Misol: MyGuests VALUES INSERT INTO (?, ?, ?)
2. Ma'lumotlar bazasi SQL bayonoti shablonida so'rovlarni optimallashtirishni tahlil qiladi, kompilyatsiya qiladi va amalga oshiradi va natijani bajarmasdan saqlaydi.
3. Amalga oshirish: Keyinchalik, dastur qiymatlarni parametrlarga bog'laydi va ma'lumotlar bazasi bayonotni bajaradi. Ilova bayonotni xohlagancha turli qiymatlar bilan bajarishi mumkin

To'g'ridan-to'g'ri SQL bayonotlarini bajarish bilan solishtirganda, tayyorlangan bayonotlar uchta asosiy afzalliklarga ega:

- Tayyorlangan bayonotlar tahlil qilish vaqtini qisqartiradi, chunki so'rovga tayyorgarlik faqat bir marta amalga oshiriladi (bayonot bir necha marta bajarilgan bo'lsa ham)
- Bog'langan parametrlar serverga o'tkazish qobiliyatini kamaytiradi, chunki siz har safar butun so'rovni emas, balki faqat parametrlarni yuborishingiz kerak.
- Tayyorlangan bayonotlar SQL in'ektsiyalariga qarshi juda foydali, chunki keyinchalik boshqa protokol yordamida uzatiladigan parametr qiymatlaridan to'g'ri qochish kerak emas. Agar dastlabki bayonot shablonlari tashqi ma'lumotlardan olinmagan bo'lsa, SQL in'ektsiyasi amalga oshirilmaydi.

MySQLi-da tayyorlangan bayonotlar

Quyidagi misol MySQLi-da tayyorlangan bayonotlar va bog'langan parametrlardan foydalanadi:

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// prepare and bind
$stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $firstname, $lastname, $email);

// set parameters and execute
$firstname = "John";
$lastname = "Doe";
$email = "john@example.com";
$stmt->execute();

$firstname = "Mary";
$lastname = "Moe";
$email = "mary@example.com";
$stmt->execute();

$firstname = "Julie";
$lastname = "Dooley";
$email = "julie@example.com";
$stmt->execute();

echo "New records created successfully";

$stmt->close();
$conn->close();
?>
```

Yuqoridagi misoldan tushuntirish uchun kod satrlari:

```php
"INSERT INTO MyGuests (firstname, lastname, email) VALUES (?, ?, ?)"
```

SQL-da biz butun son, satr, double yoki blob qiymatini almashtirmoqchi bo'lgan savol belgisini (?) qo'yamiz.

Keyin bind_param() funktsiyasini ko'rib chiqing:

```php
$stmt->bind_param("sss", $firstname, $lastname, $email);
```

Ushbu funktsiya parametrlarni SQL so'roviga bog'laydi va ma'lumotlar bazasiga parametrlar nima ekanligini aytadi. "sss" argumenti parametrlar bo'lgan ma'lumotlar turlarini ko'rsatadi. s belgisi MySQL-ga parametrning satr ekanligini bildiradi.

Argument to'rt turdan biri bo'lishi mumkin:

- i - butun son
- d - ikki barobar
- s - qator
- b - BLOB

Har bir parametr uchun bizda ulardan bittasi bo'lishi kerak.

MySQL-ga qanday turdagi ma'lumotlarni kutish kerakligini aytib, biz SQL in'ektsiyalari xavfini minimallashtiramiz.

:::warning Eslatma
Eslatma: Agar biz tashqi manbalardan biron-bir ma'lumotni (masalan, foydalanuvchi kiritishi) kiritmoqchi bo'lsak, ma'lumotlarning tozalanganligi va tasdiqlanganligi juda muhimdir.
:::

PDO da tayyorlangan bayonotlar
Quyidagi misolda PDO-da tayyorlangan bayonotlar va bog'langan parametrlar qo'llaniladi:

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDBPDO";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // prepare sql and bind parameters
  $stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname, email)
  VALUES (:firstname, :lastname, :email)");
  $stmt->bindParam(':firstname', $firstname);
  $stmt->bindParam(':lastname', $lastname);
  $stmt->bindParam(':email', $email);

  // insert a row
  $firstname = "John";
  $lastname = "Doe";
  $email = "john@example.com";
  $stmt->execute();

  // insert another row
  $firstname = "Mary";
  $lastname = "Moe";
  $email = "mary@example.com";
  $stmt->execute();

  // insert another row
  $firstname = "Julie";
  $lastname = "Dooley";
  $email = "julie@example.com";
  $stmt->execute();

  echo "New records created successfully";
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}
$conn = null;
?>
```















