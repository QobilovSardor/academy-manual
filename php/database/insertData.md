# 📔 PHP MySQL Insert Data

## PHP MySQL Insert Data (MySQL Ma'lumotlarni kiritish)

MySQLi va PDO yordamida MySQL-ga ma'lumotlarni kiriting
Ma'lumotlar bazasi va jadval yaratilgandan so'ng, biz ularga ma'lumotlarni qo'shishni boshlashimiz mumkin.

Quyidagi sintaksis qoidalariga rioya qilish kerak:

- SQL so'rovi PHPda keltirilishi kerak
- SQL so'rovi ichidagi satr qiymatlari kotirovka qilinishi kerak
- Raqamli qiymatlar keltirilmasligi kerak
- NULL so'zini keltirmaslik kerak

INSERT INTO iborasi MySQL jadvaliga yangi yozuvlar qo'shish uchun ishlatiladi:

```php
INSERT INTO table_name (column1, column2, column3,...)
VALUES (value1, value2, value3,...)
```

Oldingi bobda biz beshta ustundan iborat "Mening mehmonlarim" nomli bo'sh jadval yaratdik: "id", "familiya", "familiya", "elektron pochta" va "reg_date". Keling, jadvalni ma'lumotlar bilan to'ldiramiz.

:::warning Eslatma
Eslatma: Agar ustun AUTO_INCREMENT (“id” ustuni kabi) yoki joriy_timesamp standart yangilangan TIMESTAMP bo‘lsa (“reg_date” ustuni kabi), uni SQL so‘rovida ko‘rsatish shart emas; MySQL avtomatik ravishda qiymatni qo'shadi.
:::

Quyidagi misollar "MyGuests" jadvaliga yangi yozuv qo'shadi:

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

$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
```

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";

if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
```

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
  $sql = "INSERT INTO MyGuests (firstname, lastname, email)
  VALUES ('John', 'Doe', 'john@example.com')";
  // use exec() because no results are returned
  $conn->exec($sql);
  echo "New record created successfully";
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>
```















