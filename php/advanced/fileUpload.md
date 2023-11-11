# 📔 PHP File Upload

## PHP File Upload (PHP fayl yuklash)

PHP yordamida fayllarni serverga yuklash oson.

Biroq, xavf osonlik bilan keladi, shuning uchun fayllarni yuklashga ruxsat berishda doimo ehtiyot bo'ling!

"php.ini" faylini sozlang
Birinchidan, PHP fayl yuklanishiga ruxsat berish uchun sozlanganligiga ishonch hosil qiling.

"php.ini" faylingizda direktivani qidiring file_uploadsva uni Yoqilgan ga o'rnating:

```php
file_uploads = On
```

HTML formasini yarating
Keyin, foydalanuvchilarga yuklamoqchi bo'lgan rasm faylini tanlash imkonini beruvchi HTML formasini yarating:

```php
<!DOCTYPE html>
<html>
<body>

<form action="upload.php" method="post" enctype="multipart/form-data">
  Select image to upload:
  <input type="file" name="fileToUpload" id="fileToUpload">
  <input type="submit" value="Upload Image" name="submit">
</form>

</body>
</html>
```


Yuqoridagi HTML formasi uchun amal qilish kerak bo'lgan ba'zi qoidalar:

- Shakl method="post" dan foydalanganligiga ishonch hosil qiling
- Shakl shuningdek quyidagi atributga muhtoj: enctype="multipart/form-data". Shaklni yuborishda qaysi kontent turidan foydalanishni belgilaydi

Yuqoridagi talablarsiz faylni yuklash ishlamaydi.

E'tibor berish kerak bo'lgan boshqa narsalar:

- `<input>` tegining type="file" atributi kiritish maydonini fayl tanlash boshqaruvi sifatida ko'rsatadi, kiritish boshqaruvi yonidagi "Browse" tugmasi.
Yuqoridagi forma ma'lumotlarni "upload.php" deb nomlangan faylga yuboradi, biz uni keyingi yaratamiz.

Yuklash faylini PHP skriptini yarating

"upload.php" faylida faylni yuklash uchun kod mavjud:

```php
<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }
}
?>
```

PHP skripti tushuntirildi:

- $target_dir = "uploads/" - fayl joylashtiriladigan katalogni belgilaydi
- $target_file yuklanadigan faylning yo'lini belgilaydi
- $uploadOk=1 hali ishlatilmagan (keyinroq foydalaniladi)
- $imageFileType fayl kengaytmasiga ega (kichik harflarda)
- Keyin rasm fayli haqiqiy tasvir yoki soxta tasvir ekanligini tekshiring

:::warning Eslatma 
Eslatma: “upload.php” fayli joylashgan katalogda “uploads” nomli yangi katalog yaratishingiz kerak bo'ladi. Yuklangan fayllar u yerda saqlanadi.
:::

Fayl allaqachon mavjudligini tekshiring
Endi biz ba'zi cheklovlarni qo'shishimiz mumkin.

Birinchidan, fayl allaqachon "yuklashlar" jildida mavjudligini tekshiramiz. Agar shunday bo'lsa, xato xabari ko'rsatiladi va $uploadOk 0 ga o'rnatiladi:

```php
// Check if file already exists
if (file_exists($target_file)) {
  echo "Sorry, file already exists.";
  $uploadOk = 0;
}
```

Fayl hajmini cheklash

Yuqoridagi HTML formamizdagi fayl kiritish maydoni "fileToUpload" deb nomlanadi.

Endi biz fayl hajmini tekshirmoqchimiz. Agar fayl 500 KB dan katta bo'lsa, xato xabari ko'rsatiladi va $uploadOk 0 ga o'rnatiladi:

```php
// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
  echo "Sorry, your file is too large.";
  $uploadOk = 0;
}
```

Fayl turini cheklash

Quyidagi kod foydalanuvchilarga faqat JPG, JPEG, PNG va GIF fayllarni yuklash imkonini beradi. Boshqa barcha fayl turlari $uploadOk ni 0 ga o‘rnatishdan oldin xato xabari beradi:

```php
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
  echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
  $uploadOk = 0;
}
```

PHP skriptini yuklash faylini tugallang

To'liq "upload.php" fayli endi quyidagicha ko'rinadi:

```php
<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }
}

// Check if file already exists
if (file_exists($target_file)) {
  echo "Sorry, file already exists.";
  $uploadOk = 0;
}

// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
  echo "Sorry, your file is too large.";
  $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
  echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
  } else {
    echo "Sorry, there was an error uploading your file.";
  }
}
?>
```



























