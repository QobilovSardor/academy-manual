# 📔 PHP - AJAX Live Search

## PHP - AJAX Live Search

AJAX foydalanuvchilarga qulayroq va interaktiv qidiruvlarni yaratish uchun ishlatilishi mumkin.

AJAX jonli qidiruv
Quyidagi misol jonli qidiruvni ko'rsatadi, u erda siz yozish paytida qidiruv natijalarini olasiz.

Jonli qidiruv an'anaviy qidiruvga nisbatan juda ko'p afzalliklarga ega:

Natijalar siz yozganingizda ko'rsatiladi
Yozishni davom ettirsangiz, natijalar torayadi
Agar natijalar juda tor bo'lsa, kengroq natijani ko'rish uchun belgilarni olib tashlang

Misol tushuntirilgan - HTML sahifasi

Agar foydalanuvchi yuqoridagi kiritish maydoniga belgi yozsa, "showResult()" funksiyasi bajariladi. Funktsiya "onkeyup" hodisasi tomonidan ishga tushiriladi:

```php
<html>
<head>
<script>
function showResult(str) {
  if (str.length==0) {
    document.getElementById("livesearch").innerHTML="";
    document.getElementById("livesearch").style.border="0px";
    return;
  }
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("livesearch").innerHTML=this.responseText;
      document.getElementById("livesearch").style.border="1px solid #A5ACB2";
    }
  }
  xmlhttp.open("GET","livesearch.php?q="+str,true);
  xmlhttp.send();
}
</script>
</head>
<body>

<form>
<input type="text" size="30" onkeyup="showResult(this.value)">
<div id="livesearch"></div>
</form>

</body>
</html>
```

Manba kodi tushuntirishi:

Agar kiritish maydoni bo'sh bo'lsa (str.length==0), funksiya jonli qidiruv to'ldiruvchisi mazmunini tozalaydi va funksiyadan chiqadi.

Agar kiritish maydoni bo'sh bo'lmasa, showResult() funktsiyasi quyidagilarni bajaradi:

- XMLHttpRequest obyektini yarating
- Server javobi tayyor bo'lganda bajariladigan funksiyani yarating
- So'rovni serverdagi faylga yuboring
- URL manziliga parametr (q) qo'shilganiga e'tibor bering (kirish maydonining mazmuni bilan)

PHP fayli
Yuqoridagi JavaScript tomonidan chaqirilgan serverdagi sahifa "livesearch.php" deb nomlangan PHP faylidir.

"Livesearch.php" dagi manba kodi XML faylida qidiruv satriga mos keladigan sarlavhalarni qidiradi va natijani qaytaradi:

```php
<?php
$xmlDoc=new DOMDocument();
$xmlDoc->load("links.xml");

$x=$xmlDoc->getElementsByTagName('link');

//get the q parameter from URL
$q=$_GET["q"];

//lookup all links from the xml file if length of q>0
if (strlen($q)>0) {
  $hint="";
  for($i=0; $i<($x->length); $i++) {
    $y=$x->item($i)->getElementsByTagName('title');
    $z=$x->item($i)->getElementsByTagName('url');
    if ($y->item(0)->nodeType==1) {
      //find a link matching the search text
      if (stristr($y->item(0)->childNodes->item(0)->nodeValue,$q)) {
        if ($hint=="") {
          $hint="<a href='" .
          $z->item(0)->childNodes->item(0)->nodeValue .
          "' target='_blank'>" .
          $y->item(0)->childNodes->item(0)->nodeValue . "</a>";
        } else {
          $hint=$hint . "<br /><a href='" .
          $z->item(0)->childNodes->item(0)->nodeValue .
          "' target='_blank'>" .
          $y->item(0)->childNodes->item(0)->nodeValue . "</a>";
        }
      }
    }
  }
}

// Set output to "no suggestion" if no hint was found
// or to the correct values
if ($hint=="") {
  $response="no suggestion";
} else {
  $response=$hint;
}

//output the response
echo $response;
?>
```

Agar JavaScript-dan yuborilgan matn bo'lsa (strlen($q) > 0), quyidagilar sodir bo'ladi:

- XML faylni yangi XML DOM obyektiga yuklang
- JavaScript-dan yuborilgan matndan mos keladiganlarni topish uchun barcha `<title> `elementlarini aylantiring
- "$response" o'zgaruvchisida to'g'ri url va sarlavhani o'rnatadi. Agar bir nechta moslik topilsa, barcha mosliklar o'zgaruvchiga qo'shiladi
- Hech qanday moslik topilmasa, $response oʻzgaruvchisi “taklif yoʻq” ga oʻrnatiladi.
















