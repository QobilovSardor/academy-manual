# 📔 PHP - AJAX and PHP

## PHP - AJAX and PHP 

AJAX ko'proq interaktiv ilovalar yaratish uchun ishlatiladi.

AJAX PHP misoli
Quyidagi misolda foydalanuvchi kiritish maydoniga belgilar kiritayotganda veb-sahifa veb-server bilan qanday bog‘lanishi mumkinligini ko‘rsatad

<a href="https://www.w3schools.com/php/showphp.php?filename=demo_ajax_php">Misolni ko'rish uchun bosing</a>

Misol tushuntirildi

Yuqoridagi misolda foydalanuvchi kiritish maydoniga belgi yozganda, “showHint()” funksiyasi bajariladi.

Funktsiya onkeyup hodisasi tomonidan ishga tushiriladi.

Mana HTML kodi:

```php
<html>
<head>
<script>
function showHint(str) {
  if (str.length == 0) {
    document.getElementById("txtHint").innerHTML = "";
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET", "gethint.php?q=" + str, true);
    xmlhttp.send();
  }
}
</script>
</head>
<body>

<p><b>Start typing a name in the input field below:</b></p>
<form action="">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" onkeyup="showHint(this.value)">
</form>
<p>Suggestions: <span id="txtHint"></span></p>
</body>
</html>
```

Kod tushuntirish:

Birinchidan, kiritish maydoni bo'sh yoki yo'qligini tekshiring (str.length == 0). Agar shunday bo'lsa, txtHint to'ldiruvchisi tarkibini tozalang va funksiyadan chiqing.

Biroq, kiritish maydoni bo'sh bo'lmasa, quyidagilarni bajaring:

- XMLHttpRequest obyektini yarating
- Server javobi tayyor bo'lganda bajariladigan funksiyani yarating
- So'rovni serverdagi PHP fayliga (gethint.php) yuboring
- E'tibor bering, q parametri URL manziliga qo'shilgan (gethint.php?q="+str)
- Va str o'zgaruvchisi kirish maydonining mazmunini ushlab turadi

PHP fayli - "gethint.php"
PHP fayli bir qator nomlarni tekshiradi va brauzerga tegishli nom(lar)ni qaytaradi: 

```php
<?php
// Array with names
$a[] = "Anna";
$a[] = "Brittany";
$a[] = "Cinderella";
$a[] = "Diana";
$a[] = "Eva";
$a[] = "Fiona";
$a[] = "Gunda";
$a[] = "Hege";
$a[] = "Inga";
$a[] = "Johanna";
$a[] = "Kitty";
$a[] = "Linda";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cindy";
$a[] = "Doris";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Sunniva";
$a[] = "Tove";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Liza";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Wenche";
$a[] = "Vicky";

// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from ""
if ($q !== "") {
  $q = strtolower($q);
  $len=strlen($q);
  foreach($a as $name) {
    if (stristr($q, substr($name, 0, $len))) {
      if ($hint === "") {
        $hint = $name;
      } else {
        $hint .= ", $name";
      }
    }
  }
}

// Output "no suggestion" if no hint was found or output correct values
echo $hint === "" ? "no suggestion" : $hint;
?>
```












