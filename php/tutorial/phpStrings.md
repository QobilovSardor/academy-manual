# 📔 PHP satrlari

## PHP string funktsiyalari

Ushbu bobda biz satrlarni manipulyatsiya qilish uchun ba'zi tez-tez ishlatiladigan funktsiyalarni ko'rib chiqamiz.

### strlen() - satr uzunligini qaytarish

PHP strlen()funksiyasi satr uzunligini qaytaradi.

```php
<?php
echo strlen("Hello world!"); // outputs 12
?>
```

### str_word_count() - Satrdagi so'zlarni sanash

PHP str_word_count()funktsiyasi satrdagi so'zlar sonini hisoblaydi.

```php
<?php
echo str_word_count("Hello world!"); // outputs 2
?>
```

### strrev() - satrni teskari aylantirish

PHP strrev()funksiyasi satrni teskari aylantiradi.

```php
<?php
echo strrev("Hello world!"); // outputs !dlrow olleH
?>
```

### strpos() - String ichidan matnni qidirish

PHP strpos()funktsiyasi satr ichida ma'lum bir matnni qidiradi. Agar moslik topilsa, funktsiya birinchi mos keladigan belgilar o'rnini qaytaradi. Agar moslik topilmasa, u FALSE qiymatini qaytaradi.

```php
<?php
echo strpos("Hello world!", "world"); // outputs 6
?>
```

### str_replace() - satr ichidagi matnni almashtirish

PHP str_replace()funktsiyasi qatordagi ba'zi belgilarni boshqa belgilar bilan almashtiradi.

```php
<?php
echo str_replace("world", "Dolly", "Hello world!"); // outputs Hello Dolly!
?>
```




