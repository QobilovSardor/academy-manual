## CSS Selektorlar
Biz HTML elementlariga CSS orqali turli xil stillar berishimiz uchun biz HTML elementlariga turli xil nomlar bilan murojaat qilishimiz mumkin.<br>
1. `class`
2. `id`
3. `element nomi`

`class` - berishimizdan asosiy sabab biz bir xil teglar ishlatilgan vaqtda bir tegga bergan stillarimiz boshqasiga o'tishini olidini olish<br>

::: tip class berishni qoidasi:
1. Katta harfda class yozmang
2. Raqamlarda yozmang class
3. 2ta so'zdan foydalansanggiz orasiga _ - bunday chiziqchalar qo'ying
4. Contentdan kelib chiqib class berish harakat qiling
:::

```html
<h1 class="hello">Salom</h1>
```
```css
.hello{
    color: red;
}
```

`id` - Bitta noyob selectorni tanlash uchun ishlatiladi<br>

::: tip id berishni qoidasi:
1. Katta harfda class yozmang
2. Raqamlarda yozmang class
3. 2ta so'zdan foydalansanggiz orasiga _ - bunday chiziqchalar qo'ying
4. Contentdan kelib chiqib class berish harakat qiling
5. Id nomi raqam bilan boshlanmaydi
:::

```html
<h1 id="hello">Salom</h1>
```
```css
#hello{
    color: red;
}
```

## CSS Borders
::: tip CSSda chegara ko'rinishlari:
`border-style: qiymat kiritiladi;` shu ko'rinishda yoziladi
Quyidagi qiymatlarga ruxsat beriladi:

1. `dotted`- Nuqtali chegarani belgilaydi
2. `dashed`- Chiziqli chegarani belgilaydi
3. `solid`- Qattiq chegarani belgilaydi
4. `double`- Ikki tomonlama chegarani belgilaydi
5. `groove`- 3D yivli chegarani belgilaydi. Effekt chegara rangi qiymatiga bog'liq
6. `ridge`- 3D chiziqli chegarani belgilaydi. Effekt chegara rangi qiymatiga bog'liq
7. `inset`- 3D ichki chegarani belgilaydi. Effekt chegara rangi qiymatiga bog'liq
8. `outset`- 3D boshlang'ich chegarasini belgilaydi. Effekt chegara rangi qiymatiga bog'liq
9. `none`- Chegarani belgilamaydi
10. `hidden`- Yashirin chegarani belgilaydi<br>
`border-style` birdan toʻrtgacha qiymatga ega boʻlishi mumkin (yuqori chegara, oʻng chegara, pastki chegara va chap chegara uchun).
:::

```css
p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}
```
<img src="/images/border.jpg">

Chegara kengligi<br>
`border-width` bilan ma'lum bir o'lcham asosida yoziladi
```css
p.one {
  border-style: solid;
  border-width: 5px;
}
```
Chegara rangi<br>
1. nom - "qizil" kabi rang nomini belgilang
2. HEX - "#ff0000" kabi HEX qiymatini belgilang
3. RGB - RGB qiymatini belgilang, masalan, "rgb (255,0,0)"
4. Rang yozilmagan bo'lsa u rangni meros qilib oladi

Chegara tomonlari<br>
```css
p {
  border-top-style: dotted;
  border-right-style: solid;
  border-bottom-style: dotted;
  border-left-style: solid;
}
```
Chegarani qisqartma usulda yozsa ham bo'ladi:
```css
p{
    border: 1px solid red;
}
```
Elementlarga yumaloq chegaralar qo'shish uchun biz `border-radius`dan foydalanamiz
```css
p{
    border-radius: 20px;
}
```

## CSS Colors
Ranglar oldindan belgilangan rang nomlari yoki RGB, HEX, HSL, RGBA, HSLA qiymatlari yordamida aniqlanadi.
HTML/CSS 140 ta standart rang nomlarini qo'llab-quvvatlaydi.

CSSda biror bir `textga` rang bermoqchi bo'lsanggiz
```css
h1{
    color: red;
}
```
CSSda biror bir blockga rang bermoqchi bo'lsanggiz yoki biror narsani orqa tomoniga rang bermoqchi bo'lsanggiz
```css
h1{
    background-color: red;
}
```
CSSda chegaralarga rang berishinggiz mumkin
```css
h1{
    border-color: red;
}
```
## CSS Margins
`Margin` har qanday belgilangan chegaradan tashqarida elementlat atrofida bo'sh joy yaratish uchun ishlatiladi
Margin - yordamida siz elementlaring har bir tomoni(yuqori,o'ng,past va chap) uchun bo'sh joy o'rnatish uchun mumkin.

Margin - individual tomonlari
Margin elementining har bir tomoni uchun chegarani belgilash uchun xususiyatlarga ega:
1. `margin-top`
2. `margin-right`
3. `margin-bottom`
4. `margin-left`

:::tip Barcha `margin` xususiyatlari quyidagi qiymatlarga ega bo'lishi mumkin:

1. avtomatik - brauzer chegarani hisoblab chiqadi
2. uzunlik - px, pt, sm va hokazolarda chegarani belgilaydi.
3. % - o'z ichiga olgan element kengligining % da chetini belgilaydi
4. inherit - chekka asosiy elementdan meros bo'lishi kerakligini bildiradi
:::

```css
/* bu 4 ta tomoniga ham 10pxdan joy ajratadi */
h1{
    margin: 10px;
}
/* bu birinchi qiymat tepa bilan pastga tegishli
 keyingi 20px qiymat ikki yonga tegishli */
h1{
    margin: 10px 20px;
}
/* bu esa 4ta tomonga qiymatlarni berishi uchun ketma etligi
 tepadan boshlanadi va soat harakati bo'yicha harakatlanadi */
h1{
    margin: 10px 20px 30px 40px;
}
/* ikkala tomondagi joyni contentni ikki tomoniga teng taqsimlab
 berib bir xil masofa ochib beradi */
h1{
    margin: auto;
}
```
## CSS Padding
Padding - Har qanday bo'sh chegaralar ichida bo'sh joy yaratish uchun ishlatiladi
Elementning har bir tomoni (yuqori, o'ng, pastki va chap) uchun padding o'rnatish uchun xususiyatlar mavjud.

CSS elementning har bir tomoni uchun to'ldirishni belgilash uchun xususiyatlarga ega:
1. `padding-top`
2. `padding-right`
3. `padding-bottom`
4. `padding-left`

`padding: 25px 50px 75px 100px;`
1. margin-top: 25px;
2. margin-right: 50px;
3. margin-bottom: 75px;
4. margin-left: 100px;

## CSS Height, Width and Max-width
CSS `height` va `width` xususiyatlar elementning balandligi va kengligini o'rnatish uchun ishlatiladi.
CSS `max-width` xususiyati elementning maksimal kengligini belgilash uchun ishlatiladi.

CSS balandligi va kengligi qiymatlari
height va xususiyatlari width quyidagi qiymatlarga ega bo'lishi mumkin:
1. `auto`- Bu standart. Brauzer balandlik va kenglikni hisoblab chiqadi
2. `length`- px, sm va hokazolarda balandlik/kenglikni belgilaydi.
3. `%`- O'z ichiga olgan blokning foizida balandlik/kenglikni belgilaydi
4. `initial`- Balandlik/kenglikni standart qiymatiga o'rnatadi
5. `inherit`- Balandlik/kenglik uning asosiy qiymatidan meros qilib olinadi

`max-width` brauzerning kichik oynalar bilan ishlashini yaxshilaydi

