# 📔 PHP Create a MySQL Database

## Create a MySQL Database (MySQL ma'lumotlar bazasini yarating)

Ma'lumotlar bazasi bir yoki bir nechta jadvallardan iborat.

MySQL ma'lumotlar bazasini yaratish yoki o'chirish uchun sizga maxsus CREATE imtiyozlari kerak bo'ladi.

MySQLi va PDO yordamida MySQL ma'lumotlar bazasini yarating
CREATE DATABASE operatori MySQL-da ma'lumotlar bazasini yaratish uchun ishlatiladi.

Quyidagi misollar "myDB" nomli ma'lumotlar bazasini yaratadi:

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE myDB";
if ($conn->query($sql) === TRUE) {
  echo "Database created successfully";
} else {
  echo "Error creating database: " . $conn->error;
}

$conn->close();
?>
```

:::warning Eslatma
Eslatma: Yangi ma'lumotlar bazasini yaratishda siz mysqli ob'ektiga faqat dastlabki uchta argumentni ko'rsatishingiz kerak (server nomi, foydalanuvchi nomi va parol).

Maslahat: Agar ma'lum bir portdan foydalanish kerak bo'lsa, ma'lumotlar bazasi nomi argumenti uchun bo'sh qator qo'shing, masalan: new mysqli("localhost", "username", "parol", "", port)
:::

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";

// Create connection
$conn = mysqli_connect($servername, $username, $password);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Create database
$sql = "CREATE DATABASE myDB";
if (mysqli_query($conn, $sql)) {
  echo "Database created successfully";
} else {
  echo "Error creating database: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
```

Eslatma: Quyidagi PDO misolida "myDBPDO" nomli ma'lumotlar bazasi yaratiladi:

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";

try {
  $conn = new PDO("mysql:host=$servername", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $sql = "CREATE DATABASE myDBPDO";
  // use exec() because no results are returned
  $conn->exec($sql);
  echo "Database created successfully<br>";
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>
```

Maslahat: PDO ning katta afzalligi shundaki, u bizning ma'lumotlar bazasi so'rovlarida yuzaga kelishi mumkin bo'lgan har qanday muammolarni hal qilish uchun istisno sinfiga ega. Agar try{ } blokida istisno o'rnatilgan bo'lsa, skript ishlashni to'xtatadi va to'g'ridan-to'g'ri birinchi catch(){ } blokiga o'tadi. Yuqoridagi catch blokida biz SQL bayonoti va yaratilgan xato xabarini aks ettiramiz.













