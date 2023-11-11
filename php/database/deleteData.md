# 📔 PHP MySQL Delete Data

## PHP MySQL Delete Data (MySQL Ma'lumotlarni o'chirish)

MySQLi va PDO yordamida MySQL jadvalidan ma'lumotlarni o'chirish

DELETE bayonoti jadvaldagi yozuvlarni o'chirish uchun ishlatiladi:

```php
DELETE FROM table_name
WHERE some_column = some_value
```

:::warning Eslatma
DELETE sintaksisidagi WHERE bandiga e'tibor bering: WHERE bandi qaysi yozuv yoki yozuvlarni o'chirish kerakligini belgilaydi. Agar siz WHERE bandini o'tkazib yuborsangiz, barcha yozuvlar o'chiriladi!
:::

Keling, "Mening mehmonlarim" jadvalini ko'rib chiqaylik:

<img src="/php/php23.png">

Quyidagi misollar "MyGuests" jadvalidagi id=3 bo'lgan yozuvni o'chiradi:

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

// sql to delete a record
$sql = "DELETE FROM MyGuests WHERE id=3";

if ($conn->query($sql) === TRUE) {
  echo "Record deleted successfully";
} else {
  echo "Error deleting record: " . $conn->error;
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

// sql to delete a record
$sql = "DELETE FROM MyGuests WHERE id=3";

if (mysqli_query($conn, $sql)) {
  echo "Record deleted successfully";
} else {
  echo "Error deleting record: " . mysqli_error($conn);
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

  // sql to delete a record
  $sql = "DELETE FROM MyGuests WHERE id=3";

  // use exec() because no results are returned
  $conn->exec($sql);
  echo "Record deleted successfully";
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>
```

Yozuv o'chirilgandan so'ng, jadval quyidagicha ko'rinadi:

<img src="/php/php24.png">















