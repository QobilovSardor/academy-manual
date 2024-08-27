## 📚 8-dars

# CSS Flexbox va Animatsiyalar

## Flexbox

### 1. Flex Container va Flex Items

- **Flex Container**: Flexbox dizaynini qo'llash uchun konteyner elementiga `display: flex;` beriladi.
- **Flex Items**: Flex container ichidagi barcha bolalar elementlari flex items bo'ladi.

### 2. Flex Direction

- **`flex-direction`**: Flex items qanday yo'nalishda joylashishini belgilaydi:
  - `row` (default): Elementlar gorizontal ravishda joylashadi.
  - `column`: Elementlar vertikal ravishda joylashadi.
  - `row-reverse`: Elementlar gorizontal ravishda, teskari tartibda joylashadi.
  - `column-reverse`: Elementlar vertikal ravishda, teskari tartibda joylashadi.

### 3. Flex Wrap

- **`flex-wrap`**: Flex items'ni bir qatorga sig'masa, yangi qatorga o'tkazish uchun ishlatiladi:
  - `nowrap` (default): Barcha elementlar bitta qatorga joylashtiriladi.
  - `wrap`: Elementlar o'z o'lchamlariga ko'ra yangi qatorda davom etadi.
  - `wrap-reverse`: Elementlar yangi qatorda, teskari tartibda davom etadi.

### 4. Justify Content

- **`justify-content`**: Flex container ichidagi elementlarni gorizontal yo'nalishda hizalaydi:
  - `flex-start`: Chapga hizalanadi.
  - `flex-end`: O'ngga hizalanadi.
  - `center`: Markazda hizalanadi.
  - `space-between`: Elementlar orasida teng bo'shliq qoldiriladi.
  - `space-around`: Elementlar orasida va chetlarda teng bo'shliq qoldiriladi.
  - `space-evenly`: Elementlar orasida teng bo'shliq qoldiriladi, jumladan chetlarda.

### 5. Align Items

- **`align-items`**: Flex container ichidagi elementlarni vertikal yo'nalishda hizalaydi:
  - `flex-start`: Yuqoriga hizalanadi.
  - `flex-end`: Pastga hizalanadi.
  - `center`: Markazda hizalanadi.
  - `stretch`: Elementlar containerning balandligiga cho'ziladi.
  - `baseline`: Elementlar matnning asosi bo'yicha hizalanadi.

### 6. Flex Grow, Shrink, va Basis

- **`flex-grow`**: Elementning o'sish koeffitsienti. Agar boshqa elementlarda ham `flex-grow` bo'lsa, ular joyni ulashadi.

  - Misol: Agar bir elementga `flex-grow: 2;` berilgan bo'lsa, u boshqa `flex-grow: 1;` bo'lgan elementdan ikki barobar ko'p joy egallaydi.

- **`flex-shrink`**: Elementning kichrayish koeffitsienti. Joy yetishmay qolganda element qanchalik kichrayishi mumkinligini belgilaydi.

  - Misol: Agar bir elementga `flex-shrink: 0;` berilgan bo'lsa, u hech qachon kichraymaydi, boshqalari kichrayadi.

- **`flex-basis`**: Elementning asosiy o'lchami (width yoki height) belgilaydi. Bu, ayniqsa, flex-grow va flex-shrink bilan birgalikda ishlatiladi.
  - Misol: `flex-basis: 200px;` elementni boshlang'ich o'lchami 200px bo'ladi.

## CSS Animations

### 1. CSS Animations Kirish

- Animatsiyalarni yaratish uchun `@keyframes` qo'llaniladi.
  - Misol:
    ```css
    @keyframes example {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    ```

### 2. Animation Properties

- **`animation-name`**: Animatsiya nomini belgilaydi (masalan, `example`).
- **`animation-duration`**: Animatsiya davomiyligini belgilaydi (masalan, `2s`).
- **`animation-timing-function`**: Animatsiya vaqtini boshqaradi (masalan, `ease`, `linear`, `ease-in`, `ease-out`).

### 3. Animation Iteration & Delay

- **`animation-iteration-count`**: Animatsiya necha marta takrorlanishini belgilaydi (masalan, `infinite`).
- **`animation-delay`**: Animatsiya boshlanishidan oldin qancha vaqt kutish kerakligini belgilaydi (masalan, `2s`).

### 4. To'liq hususiyatlari

- **`animation-name:`** keyframes bilan belgilangan animatsiya nomi

- **`animation-duration:`** 0% dan 100% gacha bo'lgan bir animatsiya tsikli uchun qancha vaqt ketadi shuni belgilaydi sekund va millisekundlarda qiymat qabul qiladi (1s yoki 1000ms)

- **`animation-timing-function:`** Animatsiya vaqtini boshqaradi (masalan, ease, linear, ease-in, ease-out).

- **`animation-delay:`** sahifa yuklangandan so'ng animatsiya qancha vaqt kutib keyin ishga tushishini sekund yoki millisekundlarda belgilash mumkin

- **`animation-direction:`** animatsiya yo'nalishini belgilaydi. Odatiy holda, animatsiya 0% dan 100% gacha boradi. Ushbu xususiyatdan foydalanib, siz animatsiyani teskari yo'nalishda 100% dan 0% gacha o'tkazishingiz yoki har safar yo'nalishni o'zgartirishingiz mumkin.

- **`animation-iteration-`**count: Animatsiya siklining takrorlanishlar soni. Siz uni raqamlarda ko'rsatishingiz yoki animatsiyani cheksiz takrorlash uchun infinite ni belgilashingiz mumkin.

- **`animation-fill-`**mode: Animatsiya tugashidan oldin yoki keyin biriktiriladigan qiymatni o'rnatadi. Misol uchun, barcha animatsiya tsikllari tugagandan so'ng, elementning foni yashil bo'lishini belgilashingiz mumkin.

- **`animation-play-`**state: animatsiyani play/pause qilish

-Elementlarga hover qilganda animatsiya qo'llash mumkin.

- Misol:
  ```css
  .button:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
  ```

## CSS Transitions

### 1. Transition Kirish

- **CSS Transitions**: CSS xususiyatlarining qiymatlari o'zgarishi vaqtida elementlar o'zgarishini silliq o'tkazishga imkon beradi.
- **Ko'pincha ishlatiladigan xususiyatlar:**
  - `transition-property`: Qaysi xususiyat(lar) o'tishiga ruxsat berilishini belgilaydi (masalan, `width`, `height`, `background-color`).
  - `transition-duration`: O'tish qancha vaqt davom etishini belgilaydi (masalan, `0.5s`, `1s`).
  - `transition-timing-function`: O'tish vaqtining qanday amalga oshirilishini boshqaradi (masalan, `ease`, `linear`, `ease-in-out`).
  - `transition-delay`: O'tish boshlanishidan oldin qancha vaqt kutish kerakligini belgilaydi.

### 2. Transition Misollar

- **Oddiy Transition Misol:**

  ```css
  .box {
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: width 2s, height 2s;
  }

  .box:hover {
    width: 200px;
    height: 200px;
  }
  ```

### 3. Transition Timing Functions

- **`ease`**: O'tish sekin boshlanib, tezlanib, sekin tugaydi.
- **`linear`**: O'tish bir tekis tezlikda amalga oshiriladi.
- **`ease-in`**: O'tish sekin boshlanadi va tezlanadi.
- **`ease-out`**: O'tish tez boshlangan va sekin tugaydi.
- **`ease-in-out`**: O'tish sekin boshlanib, tezlanib, sekin tugaydi.
