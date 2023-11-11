# 📔 PHP Complete Form Example

## PHP Complete Form Example (PHP to'liq shakl namunasi)

Ushbu bob foydalanuvchi yuborish tugmasini bosganida kiritish maydonlarida qiymatlarni qanday saqlash kerakligini ko'rsatadi.

PHP - qiymatlarni shaklda saqlang

Foydalanuvchi yuborish tugmasini bosgandan so'ng kiritish maydonlarida qiymatlarni ko'rsatish uchun biz quyidagi kiritish maydonlarining qiymat atributiga kichik PHP skriptini qo'shamiz: nom, elektron pochta va veb-sayt. Sharh matn maydonida biz skriptni `<textarea> va </textarea> `teglari orasiga joylashtiramiz. Kichik skript $name, $email, $website va $comment oʻzgaruvchilari qiymatini chiqaradi. 

Keyin, qaysi radio tugmasi tekshirilganligini ham ko'rsatishimiz kerak. Buning uchun biz tekshirilgan atributni boshqarishimiz kerak (radio tugmalar uchun qiymat atributi emas):

```php
Name: <input type="text" name="name" value="<?php echo $name;?>">

E-mail: <input type="text" name="email" value="<?php echo $email;?>">

Website: <input type="text" name="website" value="<?php echo $website;?>">

Comment: <textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>

Gender:
<input type="radio" name="gender"
<?php if (isset($gender) && $gender=="female") echo "checked";?>
value="female">Female
<input type="radio" name="gender"
<?php if (isset($gender) && $gender=="male") echo "checked";?>
value="male">Male
<input type="radio" name="gender"
<?php if (isset($gender) && $gender=="other") echo "checked";?>
value="other">Other
```

PHP - To'liq shakl namunasi

Mana PHP formasini tekshirish misoli uchun toʻliq kod:

<img src='/image_js/php17.png'>










