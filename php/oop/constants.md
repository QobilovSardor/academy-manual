# 📔 PHP OOP - Class Constants

## PHP OOP - Class Constants (OOP - Sinf doimiylari)

E'lon qilingandan keyin doimiylarni o'zgartirib bo'lmaydi.

Agar siz sinf ichida ba'zi doimiy ma'lumotlarni belgilashingiz kerak bo'lsa, sinf konstantalari foydali bo'lishi mumkin.

Sinf konstantasi kalit so'z bilan sinf ichida e'lon qilinadi const .

Sinf konstantalari katta-kichik harflarga sezgir. Shu bilan birga, doimiylarni barcha katta harflar bilan nomlash tavsiya etiladi.

::Biz sinf nomidan so'ng doirani aniqlash operatori ( ) va undan keyin doimiy nomdan foydalanib, sinfdan tashqaridagi konstantaga kirishimiz mumkin , masalan:

```php
<?php
class Goodbye {
  const LEAVING_MESSAGE = "Thank you for visiting W3Schools.com!";
}

echo Goodbye::LEAVING_MESSAGE;
?>
```

Yoki biz sinf ichidan konstantaga kalit selfso‘zdan so‘ng miqyosni aniqlash operatori ( ::) so‘ng doimiy nomidan foydalanishimiz mumkin, masalan:

```php
<?php
class Goodbye {
  const LEAVING_MESSAGE = "Thank you for visiting W3Schools.com!";
  public function byebye() {
    echo self::LEAVING_MESSAGE;
  }
}

$goodbye = new Goodbye();
$goodbye->byebye();
?>
```












