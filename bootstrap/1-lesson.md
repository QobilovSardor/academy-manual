# 1-lesson

## Bootstrap va uning versiyalari

::: tip Bootstrap nima? 
Bootstrap - HTML, CSS va JavaScript yordamida yozilgan qulay, qayta ishlatish uchun mo'ljallangan kodlarning ulkan to'plami. Frontend dasturchilar uchun responsive veb sahifalarni tezda va osonlik bilan yaratish uchun mo'ljallangan CSS freymvorki
:::

## Bootstrapning afzaliklari

::: tip Bootstrapning afzaliklari
1. Vaqtni tejaydi 
2. Foydalanishga oson
3. Grid System: Bootstrap grid system yordamida sahifa maydonini bo'lish va qatorlar, ustunlar, yozuvlar, rasmlar, va boshqa elementlarni joylashtirish osonlashadi.
4. CSS Klasslari: Bootstrap tarkibiga kirgan klasslar bilan ko'p ishlatiladigan elementlarni yaratish oson. Masalan, knopkalarni, formalarini, kalendarlarni, va boshqa interfeys elementlarini shakllantirish uchun klasslar mavjud.
5. JavaScript ilovalari: Bootstrap JavaScript komponentlari yordamida menyu, karusel, modallar, o'tkazmalar, tablar, va boshqa interaktiv funktsiyalar qo'shish oson.
6. Responsive dizayn: Bootstrap o'z ichiga responsive yani monitor, planshet, yoki telefon qurilmalarida ishlaydigan dizaynlarni kengaytirishni osonlashtiradi. Shuningdek, ko'pgina mobil qurilmalarga moslavchi dizaynlarni o'z ichiga oladi
7. Qo'llanma va dokumentatsiya: Bootstrap komponentlarining qo'llanma va dokumentatsiyasi katta va foydali. Bu, dasturchilar va dizaynerlar uchun yordamchi resurslar ko'rsatadi.
:::

### Bootstrap yordamida yaratilgan veb sahifalar

<a href="https://themes.getbootstrap.com/" target="_blank">Bootstrap yordamida yaratilgan veb sahifalar(Shu yerga bosing)</a>

### Bootstrapning versiyalari
<a href="https://getbootstrap.com/docs/versions/" target="_blank">Bootstrapning versiyalari(Shu yerga bosing)</a>

## Bootstrapni o'rnatish
::: tip Bootstrapni o'rnatish
1. CDN orqali ulash
2. Lokal versiyasini ulash
:::

## Breakpoints va Containers

::: tip Breakpoint
`Breakpoints` - qurilmamizning kengligiga qarab veb sahifamiz o'z kontenti o'zgartiruvchi nuqtalar. Bu nuqtalarda, veb sahifamiz odatda boshqa ko'rinishga o'tib, qurilmaga moslashadi. Bootstrap o'zining breakpoint qiymatlariga ega.

`Bootstrap` freymvorki `Mobile-first` yondashuv asosida qurilgan bo'lib, uning yordamida birinchi kichik o'lchamga ega bo'lgan qurilmalarga veb sahifa yaratib olinib, keyin esa kattaroq o'lchamga ega bo'lgan qurilmalar uchun moslanadi.
:::

#### Breakpoints

| Breakpoint            | Class infix    |  O'lchami     |
| --------------------- |:--------------:| -------------:|
| X-small     | Mavjud emas      |< 576px     |
| Small       | sm               | ≥ 576px    |
| Medium      | md               | ≥ 768px    |
| Large       | lg               | ≥ 992px    |
| Extra large | xl               | ≥ 1200px   |
| Extra extra large | xxl        | ≥ 1400px   |

### Media queries
1. min-width yordamida (mobile-first)
```css
/* `xs` uchun media soʻrovi yoʻq, chunki bu Bootstrap’da standart hisoblanadi */
/* Small devices(Kichik qurilmalar) (landshaft telefonlar, 576px va undan yuqori)  */
@media (min-width: 576px) { ... }
/* Medium devices(Oʻrtacha qurilmalar) (planshetlar, 768px va undan yuqori) */
@media (min-width: 768px) { ... }
/* Large devices(Katta qurilmalar) (desktop, 992px va undan yuqori)  */
@media (min-width: 992px) { ... }
/* X-Large qurilmalari (large desktops, 1200px va undan yuqori) */
@media (min-width: 1200px) { ... }
/*XX-Large qurilmalar (larger desktops, 1400px va undan yuqori) */
@media (min-width: 1400px) { ... }
```
2. max-width yordamida
```css
/* X-Small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { ... }

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) { ... }

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) { ... }

/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) { ... }

/* X-Large devices (large desktops, less than 1400px) */
@media (max-width: 1399.98px) { ... }

/* XX-Large devices (larger desktops) */
/* No media query since the xxl breakpoint has no upper bound on its width */
```

## Container 

Container - Bootstrapning asosiy qismlaridan biri bo'lib, u elementlarni o'zida saqlash, surish va markazga joylashtirish uchun ishlatiladi. Bootstrapning Grid tizimini ishlatish uchun "container"dan foydalanish majburiy hisoblaniladi

::: tip 3 xil turi mavjud:
1. 
:::