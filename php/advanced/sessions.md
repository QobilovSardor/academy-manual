# 📔 PHP Sessions

## PHP Sessions (PHP seanslari)

Seans - bu bir nechta sahifalarda foydalanish uchun ma'lumotni (o'zgaruvchilarda) saqlash usuli.

Cookie-fayllardan farqli o'laroq, ma'lumotlar foydalanuvchi kompyuterida saqlanmaydi.

PHP sessiyasi nima?

Ilova bilan ishlaganingizda, uni ochasiz, ba'zi o'zgarishlar qilasiz va keyin uni yopasiz. Bu sessiyaga o'xshaydi. Kompyuter sizning kimligingizni biladi. Ilovani qachon ishga tushirganingizni va qachon tugatayotganingizni biladi. Ammo internetda bitta muammo bor: veb-server sizning kimligingizni va nima qilayotganingizni bilmaydi, chunki HTTP manzili holatini saqlamaydi.

Seans o'zgaruvchilari bu muammoni bir nechta sahifalarda (masalan, foydalanuvchi nomi, sevimli rang va boshqalar) foydalanish uchun foydalanuvchi ma'lumotlarini saqlash orqali hal qiladi. Odatiy bo'lib, sessiya o'zgaruvchilari foydalanuvchi brauzerni yopguncha davom etadi.

Shunday qilib; Seans o'zgaruvchilari bitta foydalanuvchi haqida ma'lumotga ega va bitta ilovadagi barcha sahifalar uchun mavjud.

:::warning Eslatma
Maslahat: Agar sizga doimiy saqlash kerak bo'lsa, ma'lumotlarni ma'lumotlar bazasida saqlashni xohlashingiz mumkin .
:::

PHP sessiyasini boshlang

Funktsiya bilan sessiya boshlanadi session_start().

Sessiya oʻzgaruvchilari PHP global oʻzgaruvchisi bilan oʻrnatiladi: $_SESSION.

Endi “demo_session1.php” nomli yangi sahifa yaratamiz. Ushbu sahifada biz yangi PHP seansini boshlaymiz va ba'zi seans o'zgaruvchilarini o'rnatamiz:

```php
PHP sessiyasini boshlang
Funktsiya bilan sessiya boshlanadi session_start().

Sessiya oʻzgaruvchilari PHP global oʻzgaruvchisi bilan oʻrnatiladi: $_SESSION.

Endi “demo_session1.php” nomli yangi sahifa yaratamiz. Ushbu sahifada biz yangi PHP seansini boshlaymiz va ba'zi seans o'zgaruvchilarini o'rnatamiz:
```

:::warning Eslatma
Eslatma: Funktsiyasession_start()hujjatingizdagi birinchi narsa bo'lishi kerak. Har qanday HTML teglaridan oldin.
:::

PHP seans o'zgaruvchan qiymatlarini oling

Keyinchalik, "demo_session2.php" deb nomlangan yana bir sahifa yaratamiz. Ushbu sahifadan biz birinchi sahifada o'rnatgan sessiya ma'lumotlariga kiramiz ("demo_session1.php").

E'tibor bering, sessiya o'zgaruvchilari har bir yangi sahifaga alohida o'tkazilmaydi, aksincha ular har bir sahifaning boshida ochiladigan sessiyadan olinadi ( session_start()).

Shuningdek, barcha seans o'zgaruvchilari qiymatlari global $_SESSION o'zgaruvchisida saqlanganligiga e'tibor bering:

```php
<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// Echo session variables that were set on previous page
echo "Favorite color is " . $_SESSION["favcolor"] . ".<br>";
echo "Favorite animal is " . $_SESSION["favanimal"] . ".";
?>

</body>
</html>
```

Foydalanuvchi seansi uchun barcha seans o'zgaruvchilari qiymatlarini ko'rsatishning yana bir usuli quyidagi kodni ishga tushirishdir:

```php
<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
print_r($_SESSION);
?>

</body>
</html>
```

:::warning eslatma
Bu qanday ishlaydi? Bu men ekanligimni qayerdan biladi?

Aksariyat seanslar foydalanuvchining kompyuterida shunday ko'rinishdagi foydalanuvchi kalitini o'rnatadi: 765487cf34ert8dede5a562e4f3a7e12. Keyin, seans boshqa sahifada ochilganda, u kompyuterda foydalanuvchi kalitini qidiradi. Agar mos keladigan bo'lsa, u o'sha seansga kiradi, bo'lmasa, yangi seansni boshlaydi.
:::

PHP seans oʻzgaruvchisini oʻzgartirish

Seans o'zgaruvchisini o'zgartirish uchun uning ustiga yozing:

```php
<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// to change a session variable, just overwrite it
$_SESSION["favcolor"] = "yellow";
print_r($_SESSION);
?>

</body>
</html>
```

PHP sessiyasini yo'q qilish

Barcha global seans o'zgaruvchilarini olib tashlash va sessiyani yo'q qilish uchun session_unset() va dan foydalaning session_destroy():

```php
<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// remove all session variables
session_unset();

// destroy the session
session_destroy();
?>

</body>
</html>
```


























