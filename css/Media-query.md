# CSS Media Queries qo'llanmasi

## Kirish

**Media Queries** veb-sahifalarning turli ekran o'lchamlari va qurilmalar uchun moslashuvchanligini ta'minlaydigan CSS funksiyasidir. Bu yordamida turli qurilmalar uchun alohida uslub qo'llash mumkin.

## Asosiy tushunchalar

Media queries yordamida veb-sahifani turli omillarga qarab moslashtirishingiz mumkin, masalan:

- **Ekran kengligi** (`width`)
- **Qurilma turi** (`screen`, `print`)
- **Orientatsiya** (`portrait`, `landscape`)
<!-- - **Ekran balandligi** (`height`) -->

## Sintaksis

Media queries ishlatishda asosiy sintaksis quyidagicha:

```css
@media media_turi and (holat) {
  /* Ushbu sharoit uchun qo'llanadigan uslublar */
}

/* media_type(media-turi) va condition(holat) qismlari ixtiyoriy bo’lishi mumkin. */

@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

Yuqoridagi misol max-width: 600px bo’lgan ekranlarda body fonini och ko’k rangga o’zgartiradi.

### Media Queries turlari

#### Qurilma turi (media_type)

- **screen:** Monitorlar, planshetlar, smartfonlar uchun.
- **print:** Chop etiladigan hujjatlar uchun.(printer)
- **all:** Barcha qurilmalar uchun (default qiymat).

## Responsive Design (Moslashuvchan Dizayn) uchun Media Queries

Media queries yordamida turli xil ekran o’lchamlarida moslashuvchan dizayn yaratish mumkin. Masalan:

```css
/* Telefonlar uchun (0px - 600px) */
@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}

/* Planshetlar uchun (601px - 1024px) */
@media (min-width: 601px) and (max-width: 1024px) {
  body {
    font-size: 16px;
  }
}

/* Kompyuterlar uchun (1025px va undan katta) */
@media (min-width: 1025px) {
  body {
    font-size: 18px;
  }
}
```

# CSS `:nth-child` Selektori bo'yicha qo'llanma

## Kirish

CSS-da `:nth-child` selektori elementlar orasidan ma'lum bir tartib raqamiga ega bo'lgan elementlarni tanlash imkonini beradi. Bu selektorni veb-sahifangizda turli elementlarni oson boshqarish uchun ishlatishingiz mumkin.

## `:nth-child` Sintaksisi

`:nth-child` selektori quyidagi sintaksisga ega:

```css
li:nth-child(2) {
  color: red;
}
```

Bu kod li elementlarining ikkinchi elementiga qizil rang berishni ta’minlaydi.

### Odd va Even

`:nth-child(odd)`

odd qiymati selektorni toq indeksli elementlarga qo’llash uchun ishlatiladi.

```css
li:nth-child(odd) {
  background-color: lightgray;
}
```

Yuqoridagi misol toq tartibdagi barcha li elementlarning fonini och kulrang qiladi.

`:nth-child(even)`

even qiymati selektorni juft indeksli elementlarga qo’llash uchun ishlatiladi.

```css
li:nth-child(even) {
  background-color: lightblue;
}
```

Bu kod juft tartibdagi barcha li elementlarning fonini och ko’k rangga o’zgartiradi.

### Dynamic Nth-child

`:nth-child` selektorida n bilan matematik ifodalarni ishlatish mumkin.

:nth-child(2n)

Bu kod har ikkinchi elementni tanlaydi:

```css
li:nth-child(2n) {
  color: green;
}
```

Yuqoridagi kodda, barcha li elementlarning har ikkinchisi yashil rangga ega bo’ladi.

`:nth-child(3n+1)`

Bu kod har uchinchi elementni va undan keyingi birinchi elementni tanlaydi:

```css
li:nth-child(3n + 1) {
  font-weight: bold;
}
```

Yuqoridagi kodda, birinchi, to’rtinchi, yettinchi va h.k. elementlar qalin shrift bilan yoziladi.

## Specific Elements

### Birinchi Element `(:first-child)`

`:first-child selektori ma’lum bir elementning birinchi bolasini tanlaydi.`

### Oxirgi Element (:last-child)

`:last-child selektori ma’lum bir elementning oxirgi bolasini tanlaydi.`

## Complex Nth-child

### Siz :nth-child selektorlarini bir-biri bilan yoki boshqa selektorlar bilan birlashtirishingiz mumkin.

Negativ Offset

```css
li:nth-child(-n + 3) {
  background-color: yellow;
}
```

Bu kod birinchi uchta li elementlarning fonini sariq rangga o’zgartiradi.

## Xulosa

`CSS :nth-child selektori sahifadagi elementlarning tartibiga asoslangan uslublarni yaratishda kuchli vositadir. U turli xil sharoitlarda kerakli elementlarni osongina boshqarishga yordam beradi va sahifani yanada dinamika va murakkab uslublar bilan ta’minlaydi.`
