# 📔 PHP - AJAX Poll

## PHP - AJAX Poll (AJAX so'rovi)

AJAX so'rovi
Quyidagi misolda natija qayta yuklanmasdan ko'rsatiladigan so'rovnoma ko'rsatiladi.

<form>
    <h4>Sizga hozirgacha PHP va AJAX yoqadimi?</h4>
    <input type="radio" name="poll"> Xa<br>
    <input type="radio" name="poll"> Yo'q
</form>

So'rovnomani tanlasangiz umumiy javoblar statistikasini ko'rsatadi

<hr>

Misol tushuntirilgan - HTML sahifasi

Agar foydalanuvchi yuqoridagi variantni tanlasa, “getVote()” funksiyasi bajariladi. Funktsiya "onclick" hodisasi tomonidan ishga tushiriladi:

```php
<html>
<head>
<script>
function getVote(int) {
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("poll").innerHTML=this.responseText;
    }
  }
  xmlhttp.open("GET","poll_vote.php?vote="+int,true);
  xmlhttp.send();
}
</script>
</head>
<body>

<div id="poll">
<h3>Do you like PHP and AJAX so far?</h3>
<form>
Yes: <input type="radio" name="vote" value="0" onclick="getVote(this.value)"><br>
No: <input type="radio" name="vote" value="1" onclick="getVote(this.value)">
</form>
</div>

</body>
</html>
```

getVote() funksiyasi quyidagilarni bajaradi:

- XMLHttpRequest obyektini yarating
- Server javobi tayyor bo'lganda bajariladigan funksiyani yarating
- So'rovni serverdagi faylga yuboring
- Eʼtibor bering, URL manziliga parametr (ovoz) qoʻshilgan (ha yoki yoʻq varianti qiymati bilan)

PHP fayli
Yuqoridagi JavaScript tomonidan chaqirilgan serverdagi sahifa "poll_vote.php" deb nomlangan PHP faylidir:

```php
<?php
$vote = $_REQUEST['vote'];

//get content of textfile
$filename = "poll_result.txt";
$content = file($filename);

//put content in array
$array = explode("||", $content[0]);
$yes = $array[0];
$no = $array[1];

if ($vote == 0) {
  $yes = $yes + 1;
}
if ($vote == 1) {
  $no = $no + 1;
}

//insert votes to txt file
$insertvote = $yes."||".$no;
$fp = fopen($filename,"w");
fputs($fp,$insertvote);
fclose($fp);
?>

<h2>Result:</h2>
<table>
<tr>
<td>Yes:</td>
<td><img src="poll.gif"
width='<?php echo(100*round($yes/($no+$yes),2)); ?>'
height='20'>
<?php echo(100*round($yes/($no+$yes),2)); ?>%
</td>
</tr>
<tr>
<td>No:</td>
<td><img src="poll.gif"
width='<?php echo(100*round($no/($no+$yes),2)); ?>'
height='20'>
<?php echo(100*round($no/($no+$yes),2)); ?>%
</td>
</tr>
</table>
```

Qiymat JavaScript-dan yuboriladi va quyidagilar sodir bo'ladi:

1. "poll_result.txt" faylining mazmunini oling
2. Fayl tarkibini o'zgaruvchilarga qo'ying va tanlangan o'zgaruvchiga bittasini qo'shing
3. Natijani "poll_result.txt" fayliga yozing
4. So'rov natijalarining grafik tasvirini chiqaring

Matn fayli
Matn fayli (poll_result.txt) biz so'rovdan olingan ma'lumotlarni saqlaydigan joy.

U shunday saqlanadi:

```php
0||0
```

Birinchi raqam "Ha" ovozini, ikkinchi raqam "Yo'q" ovozini bildiradi.

Eslatma: Veb-serveringizga matnli faylni tahrirlashga ruxsat berishni unutmang. Hammaga ruxsat bermang , faqat veb-server (PHP).
















