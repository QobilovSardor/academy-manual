# 📔 PHP MySQL Create Table

## PHP MySQL Create Table (MySQL Jadval yaratish)

Ma'lumotlar bazasi jadvali o'ziga xos nomga ega va ustunlar va qatorlardan iborat.

MySQLi va PDO yordamida MySQL jadvalini yarating
MySQL da jadval yaratish uchun CREATE TABLE operatoridan foydalaniladi.

Biz beshta ustundan iborat "Mening mehmonlarim" jadvalini yaratamiz: "id", "familiya", "familiya", "elektron pochta" va "reg_date":

```php
CREATE TABLE MyGuests (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
```

Yuqoridagi jadvaldagi eslatmalar:

Ma'lumotlar turi ustunda qanday turdagi ma'lumotlarni saqlashi mumkinligini belgilaydi. Barcha mavjud maʼlumotlar turlari haqida toʻliq maʼlumot olish uchun “Maʼlumotlar turlari” maʼlumotnomamizga oʻting .

Ma'lumotlar turidan keyin har bir ustun uchun boshqa ixtiyoriy atributlarni belgilashingiz mumkin:

- NO NULL - har bir satrda ushbu ustun uchun qiymat bo'lishi kerak, null qiymatlarga ruxsat berilmaydi
- DEFAULT qiymat - boshqa qiymat o'tkazilmaganda qo'shiladigan standart qiymatni o'rnating
- UNSIGNED - Raqam turlari uchun ishlatiladi, saqlangan ma'lumotlarni musbat raqamlar va nolga cheklaydi
- AVTO OSHIRISH - MySQL har safar yangi yozuv qo'shilganda maydon qiymatini avtomatik ravishda 1 ga oshiradi.
- ASOSIY KEYT - jadvaldagi satrlarni yagona aniqlash uchun ishlatiladi. PRIMARY KEY sozlamali ustun ko‘pincha ID raqami bo‘lib, ko‘pincha AUTO_INCREMENT bilan ishlatiladi

Har bir jadval asosiy kalit ustuniga ega bo'lishi kerak (bu holda: "id" ustuni). Uning qiymati jadvaldagi har bir yozuv uchun yagona bo'lishi kerak.

Quyidagi misollar PHP da jadvalni qanday yaratishni ko'rsatadi:

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

// sql to create table
$sql = "CREATE TABLE MyGuests (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
  echo "Table MyGuests created successfully";
} else {
  echo "Error creating table: " . $conn->error;
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

// sql to create table
$sql = "CREATE TABLE MyGuests (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if (mysqli_query($conn, $sql)) {
  echo "Table MyGuests created successfully";
} else {
  echo "Error creating table: " . mysqli_error($conn);
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

  // sql to create table
  $sql = "CREATE TABLE MyGuests (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(30) NOT NULL,
  lastname VARCHAR(30) NOT NULL,
  email VARCHAR(50),
  reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )";

  // use exec() because no results are returned
  $conn->exec($sql);
  echo "Table MyGuests created successfully";
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>
```













