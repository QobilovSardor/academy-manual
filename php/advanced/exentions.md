# 📔 PHP Exceptions

## PHP Exceptions (PHP istisnolari)

Istisno nima?

Istisno - bu PHP skriptining xatosi yoki kutilmagan xatti-harakatlarini tavsiflovchi ob'ekt.

Istisnolar ko'plab PHP funktsiyalari va sinflari tomonidan chiqariladi.

Foydalanuvchi tomonidan belgilangan funksiyalar va sinflar ham istisnolarni keltirib chiqarishi mumkin.

Istisnolar funksiyadan foydalana olmaydigan ma'lumotlarga duch kelganda uni to'xtatishning yaxshi usuli hisoblanadi.

Istisnoni tashlash

Bayonot throwfoydalanuvchi tomonidan belgilangan funktsiya yoki usulga istisno qilish imkonini beradi. Istisno chiqarilganda, undan keyingi kod bajarilmaydi.

Agar istisno qo'lga olinmasa, "Uchqalanmagan istisno" xabari bilan halokatli xatolik yuz beradi.

Keling, uni ushlab turmasdan istisno qilishga harakat qilaylik:

```php
<?php
function divide($dividend, $divisor) {
  if($divisor == 0) {
    throw new Exception("Division by zero");
  }
  return $dividend / $divisor;
}

echo divide(5, 0);
?>
```

```php
Fatal error: Uncaught Exception: Division by zero in C:\webfolder\test.php:4
Stack trace: #0 C:\webfolder\test.php(9):
divide(5, 0) #1 {main} thrown in C:\webfolder\test.php on line 4

```

try...catch bayonoti

Yuqoridagi misoldagi xatolikka yo'l qo'ymaslik uchun biz try...catchistisnolarni ushlash va jarayonni davom ettirish uchun bayonotdan foydalanishimiz mumkin.

Sintaksis

```php
try {
  code that can throw exceptions
} catch(Exception $e) {
  code that runs when an exception is caught
}
```

```php
<?php
function divide($dividend, $divisor) {
  if($divisor == 0) {
    throw new Exception("Division by zero");
  }
  return $dividend / $divisor;
}

try {
  echo divide(5, 0);
} catch(Exception $e) {
  echo "Unable to divide.";
}
?>
```

Catch bloki qanday istisno turini ushlab turish kerakligini va istisnoga kirish uchun ishlatilishi mumkin bo'lgan o'zgaruvchining nomini ko'rsatadi. Yuqoridagi misolda istisno turi, Exceptiono'zgaruvchining nomi esa $e.


The try...catch...nihoyat Bayonot

Bayonot try...catch...finallyistisnolarni qo'lga olish uchun ishlatilishi mumkin. Blokdagi kod finallyhar doim istisno ushlangan-qilmaganligidan qat'iy nazar ishlaydi. Agar finallymavjud bo'lsa, catchblok ixtiyoriy.

Sintaksis

```php
try {
  code that can throw exceptions
} catch(Exception $e) {
  code that runs when an exception is caught
} finally {
  code that always runs regardless of whether an exception was caught
}
```

```php
<?php
function divide($dividend, $divisor) {
  if($divisor == 0) {
    throw new Exception("Division by zero");
  }
  return $dividend / $divisor;
}

try {
  echo divide(5, 0);
} catch(Exception $e) {
  echo "Unable to divide. ";
} finally {
  echo "Process complete.";
}
?>
```

Misol
Istisno ushlanmagan bo'lsa ham, qatorni chiqaring:

```php
<?php
function divide($dividend, $divisor) {
  if($divisor == 0) {
    throw new Exception("Division by zero");
  }
  return $dividend / $divisor;
}

try {
  echo divide(5, 0);
} finally {
  echo "Process complete.";
}
?>
```

Istisno obyekti
Istisno ob'ekti funksiya duch kelgan xato yoki kutilmagan xatti-harakatlar haqida ma'lumotni o'z ichiga oladi.

Sintaksis

```php
new Exception(message, code, previous)
```

Parametr qiymatlari
<img src='/image_js/php19.png'>

Usullari
Istisnoni qo'lga kiritishda quyidagi jadvalda istisno haqida ma'lumot olish uchun ishlatilishi mumkin bo'lgan ba'zi usullar ko'rsatilgan:
<img src='/image_js/php20.png'>

```php
<?php
function divide($dividend, $divisor) {
  if($divisor == 0) {
    throw new Exception("Division by zero", 1);
  }
  return $dividend / $divisor;
}

try {
  echo divide(5, 0);
} catch(Exception $ex) {
  $code = $ex->getCode();
  $message = $ex->getMessage();
  $file = $ex->getFile();
  $line = $ex->getLine();
  echo "Exception thrown in $file on line $line: [Code $code]
  $message";
}
?>
```
























