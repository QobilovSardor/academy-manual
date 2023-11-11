# Variables
## Sass o'zgaruvchilari
O'zgaruvchilar keyinchalik qayta ishlatishingiz mumkin bo'lgan ma'lumotlarni saqlash usulidir.

Sass yordamida siz ma'lumotlarni o'zgaruvchilarda saqlashingiz mumkin, masalan:
- strings
- numbers
- colors
- booleans
- lists
- nulls
Sass o'zgaruvchilarni e'lon qilish uchun $ belgisidan keyin nomdan foydalanadi:
```css
$variablename: value;
```
Quyidagi misol myFont, myColor, myFontSize va myWidth nomli 4 ta o‘zgaruvchini e’lon qiladi. O'zgaruvchilar e'lon qilingandan so'ng, o'zgaruvchilardan xohlagan joyda foydalanishingiz mumkin:
```css

$myFont: Helvetica, sans-serif;
$myColor: red;
$myFontSize: 18px;
$myWidth: 680px;

body {
  font-family: $myFont;
  font-size: $myFontSize;
  color: $myColor;
}

#container {
  width: $myWidth;
}
```