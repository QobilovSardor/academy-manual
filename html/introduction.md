## HTML haqida

::: tip 💡HTML nima?
1. HTML "Hyper Text Markup Language" degan ma'noni anglatadi
2. HTMLni o'rganish o'zganish juda oson
3. HTML yordamida siz o'z web sahifanggizni yaratishinggiz mumkin.
4. HTML veb-sahifalarni yaratish uchun standart belgilash tilidir
5. HTML Web-sahifaning tuzilishini tavsiflaydi
6. HTML bir qator elementlardan iborat
7. HTML elementlari brauzerga kontentni qanday ko'rsatishni aytadi
8. HTML elementlari "bu sarlavha", "bu paragraf", "bu havola" va boshqalar kabi kontent qismlarini belgilaydi.
:::

## HTML kodi
``` html
<!DOCTYPE html>
<html>
    <head>
        <title>Sarlavha</title>
    </head>
    <body>
        <h1>Sarlavha</h1>
        <p>Matn</p>
    </body>
</html>
```
::: warning HTML kodi haqida
1. `<!DOCTYPE html>` ushbu hujjat HTML5 hujjati ekanligini belgilaydi
2. `<html>` HTML sahifasining ildiz elementidir
3. `<head>` HTML sahifasi haqidagi meta-ma'lumotni o'z ichiga oladi
4. `<title>` HTML sahifasi uchun sarlavhani belgilaydi (bu brauzerning sarlavha satrida yoki sahifa yorlig'ida ko'rsatilgan)
5. `<body>` hujjatning tanasini belgilaydi va sarlavhalar, paragraflar, rasmlar, giperhavolalar, jadvallar, ro'yxatlar va boshqalar kabi barcha ko'rinadigan tarkiblar uchun konteynerdir.
6. `<h1>` katta sarlavhani belgilaydi
7. `<p>` paragrafni belgilaydi
:::

## HTML elementi nima?
HTML elementi boshlang'ich teg content va tugash tegi bilan belgilanadi<br>
``< tagname > Content shu yerda... < /tagname >``
::: details Teglarni turlari

<img src="/images/htmltegg.jpg" />
:::

::: warning Eslatma
Ba'zi HTML elementlarining tugash elementi(yopuvchi tegi) yo'q masalan (<br> elementi)
:::

## Web brauzer
::: details Web brauzerning maqsadi HTML hujjatlarini o'qish va ularni to'g'ri ko'rsatishdir.
Brauzer HTML teglarini ko'rsatmaydi, lekin hujjatni qanday ko'rsatishni aniqlash uchun ulardan foydalanadi

<img src="/images/browsers.jpg" />
:::

## HTML sahifa tuzilishi

``` html
<html>
    <head>
        <title>Sahifa sarlavhasi</head>
    </head>
    <body>
        <h1>Bu sarlavha</h1>
        <p>Bu paragraf</p>
    </body>
</html>
```
::: warning Eslatma:
`<body>` bo'limi ichidagi kontent brauzerda ko'rsatiladi. `<title>` elementi ichidagi tarkib brauzerning sarlavha satrida yoki sahifa yorlig'ida ko'rsatiladi.
:::


