# 📔 PHP Example - AJAX and XML

## PHP Example - AJAX and XML

AJAX XML fayli bilan interaktiv aloqa uchun ishlatilishi mumkin.

AJAX XML misoli

Quyidagi misol veb-sahifa qanday qilib AJAX yordamida XML faylidan ma'lumot olishi mumkinligini ko'rsatadi:

<img src="/php/php28.png">

Misol tushuntirilgan - HTML sahifasi
Agar foydalanuvchi yuqoridagi ochiladigan ro'yxatda CD ni tanlasa, "showCD()" funksiyasi bajariladi. Funktsiya "onchange" hodisasi tomonidan ishga tushiriladi:

```php
<html>
<head>
<script>
function showCD(str) {
  if (str=="") {
    document.getElementById("txtHint").innerHTML="";
    return;
  }
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("txtHint").innerHTML=this.responseText;
    }
  }
  xmlhttp.open("GET","getcd.php?q="+str,true);
  xmlhttp.send();
}
</script>
</head>
<body>

<form>
Select a CD:
<select name="cds" onchange="showCD(this.value)">
  <option value="">Select a CD:</option>
  <option value="Bob Dylan">Bob Dylan</option>
  <option value="Bee Gees">Bee Gees</option>
  <option value="Cat Stevens">Cat Stevens</option>
</select>
</form>
<div id="txtHint"><b>CD info will be listed here...</b></div>

</body>
</html>
```

showCD() funksiyasi quyidagilarni bajaradi:

- CD tanlangan yoki yo'qligini tekshiring
- XMLHttpRequest obyektini yarating
- Server javobi tayyor bo'lganda bajariladigan funksiyani yarating
- So'rovni serverdagi faylga yuboring
- URL manziliga parametr (q) qo'shilganiga e'tibor bering (ochiladigan ro'yxat mazmuni bilan)

PHP fayli
Yuqoridagi JavaScript tomonidan chaqirilgan serverdagi sahifa "getcd.php" deb nomlangan PHP faylidir.

PHP skripti " cd_catalog.xml " XML hujjatini yuklaydi , XML fayliga nisbatan so‘rovni ishga tushiradi va natijani HTML sifatida qaytaradi:

```php
<?php
$q=$_GET["q"];

$xmlDoc = new DOMDocument();
$xmlDoc->load("cd_catalog.xml");

$x=$xmlDoc->getElementsByTagName('ARTIST');

for ($i=0; $i<=$x->length-1; $i++) {
  //Process only element nodes
  if ($x->item($i)->nodeType==1) {
    if ($x->item($i)->childNodes->item(0)->nodeValue == $q) {
      $y=($x->item($i)->parentNode);
    }
  }
}

$cd=($y->childNodes);

for ($i=0;$i<$cd->length;$i++) {
  //Process only element nodes
  if ($cd->item($i)->nodeType==1) {
    echo("<b>" . $cd->item($i)->nodeName . ":</b> ");
    echo($cd->item($i)->childNodes->item(0)->nodeValue);
    echo("<br>");
  }
}
?>
```

CD so'rovi JavaScript-dan PHP sahifasiga yuborilganda, quyidagilar sodir bo'ladi:

1. PHP XML DOM obyektini yaratadi
2. JavaScript-dan yuborilgan nomga mos keladigan barcha `<artist>` elementlarini toping
3. Albom ma'lumotlarini chiqaring ("txtHint" to'ldiruvchisiga yuboring)














