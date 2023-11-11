# 📔 PHP MySQL Update Data

## PHP MySQL Update Data (MySQL yangilanish ma'lumotlari)

MySQLi va PDO yordamida MySQL jadvalidagi ma'lumotlarni yangilang
UPDATE bayonoti jadvaldagi mavjud yozuvlarni yangilash uchun ishlatiladi:

```php
UPDATE table_name
SET column1=value, column2=value2,...
WHERE some_column=some_value 
```

:::warning Eslatma
UPDATE sintaksisidagi WHERE bandiga e'tibor bering: WHERE bandi qaysi yozuv yoki yozuvlarni yangilanishi kerakligini belgilaydi. Agar siz WHERE bandini o'tkazib yuborsangiz, barcha yozuvlar yangilanadi!
:::

Keling, "Mening mehmonlarim" jadvalini ko'rib chiqaylik:

<img src="/php/php25.png">

Quyidagi misollar "Mening mehmonlarim" jadvalidagi id = 2 yozuvini yangilaydi:

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

$sql = "UPDATE MyGuests SET lastname='Doe' WHERE id=2";

if ($conn->query($sql) === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
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

$sql = "UPDATE MyGuests SET lastname='Doe' WHERE id=2";

if (mysqli_query($conn, $sql)) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . mysqli_error($conn);
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

  $sql = "UPDATE MyGuests SET lastname='Doe' WHERE id=2";

  // Prepare statement
  $stmt = $conn->prepare($sql);

  // execute the query
  $stmt->execute();

  // echo a message to say the UPDATE succeeded
  echo $stmt->rowCount() . " records UPDATED successfully";
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>
```

Yozuv yangilangandan so'ng, jadval quyidagicha ko'rinadi:

<img src="/php/php26.png">














