# Sass @mixin va @include

`@mixin` butun veb-saytda qayta ishlatilishi kerak bo'lgan CSS kodini yaratishga imkon beradi.
`@include` sizga mixindan foydalanishga ruxsat berish uchun yaratilgan.
```scss
@mixin important-text {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
}
```
yuqorida yaratilgan mixinni biz include yordamida mana shunday chaqirib olamiz
```scss
.danger {
  @include important-text;
  background-color: green;
}
```
Yuqorida chaqirilgan mixinni cssdagi natijasiga to'xtaladigan bo'lsak:
```css
.danger {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
  background-color: green;
}
```

Bundan tashqari, aralash o'zgaruvchilar uchun standart qiymatlarni aniqlash mumkin:
```scss
@mixin bordered($color: blue, $width: 1px) {
  border: $width solid $color;
}
```