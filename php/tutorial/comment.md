# 📔 PHP sharhlari

## PHP da sharhlar

PHP kodidagi izoh dasturning bir qismi sifatida bajarilmaydigan qatordir. Uning yagona maqsadi kodni ko'rib chiqayotgan odam tomonidan o'qilishidir.

Sharhlar quyidagilar uchun ishlatilishi mumkin:

- Boshqalarga kodingizni tushunishiga imkon bering
- O'zingizga nima qilganingizni eslating - Ko'pchilik dasturchilar bir yoki ikki yildan keyin o'z ishlariga qaytishni va nima qilganlarini qayta aniqlashga majbur bo'lishdi. Sharhlar sizga kodni yozganingizda nimani o'ylaganingizni eslatishi mumkin

PHP sharhlashning bir necha usullarini qo'llab-quvvatlaydi:

```php
<!DOCTYPE html>
<html>
<body>

<?php
// This is a single-line comment

# This is also a single-line comment
?>

</body>
</html>
```

Ko'p qatorli sharhlar sintaksisi:

```php
<!DOCTYPE html>
<html>
<body>

<?php
/*
This is a multiple-lines comment block
that spans over multiple
lines
*/
?>

</body>
</html>
```

Kod qismlarini qoldirish uchun sharhlardan foydalanish:

```php
<!DOCTYPE html>
<html>
<body>

<?php
// You can also use comments to leave out parts of a code line
$x = 5 /* + 15 */ + 5;
echo $x;
?>

</body>
</html>
```

