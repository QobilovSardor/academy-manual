# 📔 PHP - AJAX and MySQL

## PHP - AJAX and MySQL

AJAX ma'lumotlar bazasi bilan interaktiv aloqa uchun ishlatilishi mumkin.

AJAX ma'lumotlar bazasi misoli

Quyidagi misol veb-sahifa qanday qilib AJAX yordamida ma'lumotlar bazasidan ma'lumot olishi mumkinligini ko'rsatadi:

<a href="https://www.w3schools.com/php/showphp.php?filename=demo_ajax_mysql">Misolni ko'rish uchun bosing</a>

Tushuntirilgan misol - MySQL ma'lumotlar bazasi
Yuqoridagi misolda biz foydalanadigan ma'lumotlar bazasi jadvali quyidagicha ko'rinadi:

<img src="/php/php27.png">


Misol tushuntirildi
Yuqoridagi misolda, foydalanuvchi yuqoridagi ochiladigan ro'yxatda shaxsni tanlaganida, "showUser()" deb nomlangan funksiya bajariladi.

Funktsiya onchange hodisasi tomonidan ishga tushiriladi.

Mana HTML kodi:

```php
<html>
<head>
<script>
function showUser(str) {
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","getuser.php?q="+str,true);
    xmlhttp.send();
  }
}
</script>
</head>
<body>

<form>
<select name="users" onchange="showUser(this.value)">
  <option value="">Select a person:</option>
  <option value="1">Peter Griffin</option>
  <option value="2">Lois Griffin</option>
  <option value="3">Joseph Swanson</option>
  <option value="4">Glenn Quagmire</option>
  </select>
</form>
<br>
<div id="txtHint"><b>Person info will be listed here...</b></div>

</body>
</html>
```

Kod tushuntirish:

Birinchidan, odam tanlanganligini tekshiring. Hech kim tanlanmagan bo'lsa (str == ""), txtHint tarkibini tozalang va funksiyadan chiqing. Agar biror kishi tanlangan bo'lsa, quyidagilarni bajaring:

- XMLHttpRequest obyektini yarating
- Server javobi tayyor bo'lganda bajariladigan funksiyani yarating
- So'rovni serverdagi faylga yuboring
- URL manziliga parametr (q) qo'shilganiga e'tibor bering (ochiladigan ro'yxat mazmuni bilan)

PHP fayli

Yuqoridagi JavaScript tomonidan chaqirilgan serverdagi sahifa "getuser.php" deb nomlangan PHP faylidir.

"Getuser.php" dagi manba kodi MySQL ma'lumotlar bazasiga qarshi so'rovni bajaradi va natijani HTML jadvaliga qaytaradi:

```php
<!DOCTYPE html>
<html>
<head>
<style>
table {
  width: 100%;
  border-collapse: collapse;
}

table, td, th {
  border: 1px solid black;
  padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
$q = intval($_GET['q']);

$con = mysqli_connect('localhost','peter','abc123');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$sql="SELECT * FROM user WHERE id = '".$q."'";
$result = mysqli_query($con,$sql);

echo "<table>
<tr>
<th>Firstname</th>
<th>Lastname</th>
<th>Age</th>
<th>Hometown</th>
<th>Job</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['FirstName'] . "</td>";
  echo "<td>" . $row['LastName'] . "</td>";
  echo "<td>" . $row['Age'] . "</td>";
  echo "<td>" . $row['Hometown'] . "</td>";
  echo "<td>" . $row['Job'] . "</td>";
  echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html>
```

Izoh: So'rov JavaScript-dan PHP fayliga yuborilganda quyidagilar sodir bo'ladi:

1. PHP MySQL serveriga ulanishni ochadi
2. To'g'ri odam topildi
3. HTML jadvali yaratiladi, ma'lumotlar bilan to'ldiriladi va "txtHint" to'ldiruvchisiga qaytariladi



















