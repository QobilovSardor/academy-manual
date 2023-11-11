## CSS ishlatish usullari
1. Satirli CSS (inline css)
2. Ichki CSS (internal)
3. Tashqi CSS (External CSS)

Inline CSS:<br>
Inline uslubi bitta element uchun noyob uslubni qo'llash uchun ishlatilishi mumkin.
Inline uslublardan foydalanish uchun tegishli elementga uslub atributini qo'shing. Style atributi har qanday CSS xususiyatini o'z ichiga olishi mumkin.
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>css</title>
    </head>
    <body>
        <h1 style="color:red;">Salom</h1>
    </body>
</html>
```

Ichki CSS:<br>
Agar bitta HTML sahifasi o'ziga xos uslubga ega bo'lsa, ichki uslublar jadvalidan foydalanish mumkin.
Ichki uslub `<style>` elementi ichida, bosh qismi ichida aniqlanadi.
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>css</title>
        <style>
            h1{
                color: red;
            }
        </style>
    </head>
    <body>
        <h1>Salom</h1>
    </body>
</html>
```

Tashqi CSS:<br>
Tashqi uslublar jadvali yordamida siz faqat bitta faylni o'zgartirish orqali butun veb-sayt ko'rinishini o'zgartirishingiz mumkin!
Har bir HTML sahifasi bosh qismidagi `<link>` elementi ichidagi tashqi uslublar jadvali fayliga havolani o'z ichiga olishi kerak.
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>css</title>
        <link rel="stylesheet" href="css file yo'li">
    </head>
    <body>
        <h1>Salom</h1>
    </body>
</html>
```