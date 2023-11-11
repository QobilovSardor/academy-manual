# 📔 PHP MySQL Use The WHERE Clause

## PHP MySQL Use The WHERE Clause (MySQL WHERE bandidan foydalaning)

MySQL ma'lumotlar bazasidan ma'lumotlarni tanlang va filtrlang

WHERE bandi yozuvlarni filtrlash uchun ishlatiladi.

WHERE bandi faqat belgilangan shartni bajaradigan yozuvlarni chiqarish uchun ishlatiladi.

```php
SELECT column_name(s) FROM table_name WHERE column_name operator value 
```

MySQLi yordamida ma'lumotlarni tanlang va filtrlang

Quyidagi misol MyGuests jadvalidan identifikator, ism va familiya ustunlarini tanlaydi, bu erda familiya "Doe" bo'ladi va uni sahifada ko'rsatadi:

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

$sql = "SELECT id, firstname, lastname FROM MyGuests WHERE lastname='Doe'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>
```

Yuqoridagi misoldan tushuntirish uchun kod satrlari:

Birinchidan, familiyasi "Doe" bo'lgan MyGuests jadvalidan id, ism va familiya ustunlarini tanlaydigan SQL so'rovini o'rnatamiz. Keyingi kod satri so'rovni bajaradi va olingan ma'lumotlarni $result deb nomlangan o'zgaruvchiga qo'yadi.

Keyin, function num_rows()noldan ortiq satrlar mavjudligini tekshiradi.

Agar noldan ortiq satr qaytarilsa, funktsiya fetch_assoc()barcha natijalarni biz aylanib o'tishimiz mumkin bo'lgan assotsiativ massivga joylashtiradi. Loop while()natijalar to'plamidan o'tadi va id, familiya va familiya ustunlaridan ma'lumotlarni chiqaradi.

Quyidagi misol MySQLi protsessual usulida yuqoridagi misol bilan bir xilni ko'rsatadi:

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

$sql = "SELECT id, firstname, lastname FROM MyGuests WHERE lastname='Doe'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
    echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
  }
} else {
  echo "0 results";
}

mysqli_close($conn);
?>
```

Natijani HTML jadvaliga ham qo'yishingiz mumkin:

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

$sql = "SELECT id, firstname, lastname FROM MyGuests WHERE lastname='Doe'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  echo "<table><tr><th>ID</th><th>Name</th></tr>";
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "<tr><td>".$row["id"]."</td><td>".$row["firstname"]." ".$row["lastname"]."</td></tr>";
  }
  echo "</table>";
} else {
  echo "0 results";
}
$conn->close();
?>
```

PDO bilan ma'lumotlarni tanlang (+ Tayyor bayonotlar)

Quyidagi misolda tayyorlangan iboralar qo'llaniladi.

U MyGuests jadvalidan identifikator, familiya va familiya ustunlarini tanlaydi, bu erda familiyasi "Doe" bo'ladi va uni HTML jadvalida ko'rsatadi:

```php
<?php
echo "<table style='border: solid 1px black;'>";
echo "<tr><th>Id</th><th>Firstname</th><th>Lastname</th></tr>";

class TableRows extends RecursiveIteratorIterator {
  function __construct($it) {
    parent::__construct($it, self::LEAVES_ONLY);
  }

  function current() {
    return "<td style='width:150px;border:1px solid black;'>" . parent::current(). "</td>";
  }

  function beginChildren() {
    echo "<tr>";
  }

  function endChildren() {
    echo "</tr>" . "\n";
  }
}

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDBPDO";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT id, firstname, lastname FROM MyGuests WHERE lastname='Doe'");
  $stmt->execute();

  // set the resulting array to associative
  $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
  foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
    echo $v;
  }
}
catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}
$conn = null;
echo "</table>";
?>
```

















