# 📔 PHP Forms - Validate E-mail and URL

## PHP Forms - Validate E-mail and URL (PHP shakllari - E-mail va URL manzilini tasdiqlang)

Ushbu bobda ismlar, elektron pochta va URL manzillarni qanday tekshirish mumkinligi ko'rsatilgan.

PHP - Ismni tasdiqlash

Quyidagi kod nom maydonida faqat harflar, chiziqlar, apostroflar va bo'shliqlar mavjudligini tekshirishning oddiy usulini ko'rsatadi. Agar nom maydonining qiymati noto'g'ri bo'lsa, xato xabarini saqlang:

```php
$name = test_input($_POST["name"]);
if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
  $nameErr = "Only letters and white space allowed";
}
```

Preg_match () funktsiyasi naqsh uchun satrni qidiradi, agar naqsh mavjud bo'lsa, rost, aks holda false qiymatini qaytaradi.

PHP - Elektron pochtani tekshirish
Elektron pochta manzili to'g'ri tuzilganligini tekshirishning eng oson va xavfsiz usuli bu PHP filtri_var() funksiyasidan foydalanishdir.

Quyidagi kodda, agar elektron pochta manzili yaxshi shakllanmagan bo'lsa, xato xabarini saqlang:

```php
$email = test_input($_POST["email"]);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $emailErr = "Invalid email format";
}
```

PHP - URL manzilini tekshirish

Quyidagi kod URL manzili sintaksisi to'g'ri yoki yo'qligini tekshirish usulini ko'rsatadi (bu oddiy ifoda URLda tire qo'yishga ham ruxsat beradi). Agar URL manzili sintaksisi noto'g'ri bo'lsa, xato xabarini saqlang:

```php
$website = test_input($_POST["website"]);
if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
  $websiteErr = "Invalid URL";
}
```

PHP - Ism, elektron pochta va URL manzilini tasdiqlang
Endi skript quyidagicha ko'rinadi:

```php
<?php
// define variables and set to empty values
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed";
    }
  }

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
    }
  }

  if (empty($_POST["website"])) {
    $website = "";
  } else {
    $website = test_input($_POST["website"]);
    // check if URL address syntax is valid (this regular expression also allows dashes in the URL)
    if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
      $websiteErr = "Invalid URL";
    }
  }

  if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
  }

  if (empty($_POST["gender"])) {
    $genderErr = "Gender is required";
  } else {
    $gender = test_input($_POST["gender"]);
  }
}
?>
```

Keyingi qadam, foydalanuvchi shaklni yuborganida, shakl barcha kiritish maydonlarini bo'shatishning oldini olishni ko'rsatishdir.













