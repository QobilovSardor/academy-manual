## CSS Position
`position` elementlar joylashishini belgilash uchun va turini belgilash uchun ishlatiladi ishlatiladi
::: tip Position turlari:
1. static 
2. relative 
3. absolute 
4. fixed
5. sticky
:::

`position` qiymatini kiritmasa uni joylashuvini aniqlash uchun ishlatiladigan (`top`, `right`, `bottom`, `left`) bular ishlamaydi

`position: static;` bo'lgan vaqtda (`top`, `right`, `bottom`, `left`) bu qiymatlar ishlamaydi 
```css
div.static {
  position: static;
}
```

`position: relative;` bu qiymat orqali siz elementni joylashuvini o'zgartirasiz va uni `default` joyi saqlanib qoladi

```css
div.relative {
  position: relative;
}
```

`position: fixed;` bu xususiyat orqali joylashtirilgan element sahifa aylantirilsa ham u doim bir joyda qoladi.

```css
div.fixed {
  position: fixed;
}
```

`position: absolute;` eng yaqin joylashgan ajdodga nisbatan joylashtiriladi va boshqa elementlar turgan tekislikdan olib tashlanadi va ulardan teparoqqa joylashtiriladi

```css
div.relative {
  position: relative;
}

div.absolute {
  position: absolute;
}
```

`position: sticky` foydalanuvchining aylantirish pozitsiyasiga qarab joylashadi. kerakli joyga kelib qotuvchi element

```css
/* bu elementimiz markazda turadi aylantirsak sahifani bu tepaga kelib joylashadi */
div.sticky {
  position: sticky;
  top: 0;
}
```
```html
<!DOCTYPE html>
<html>
<head>
<style>
	div.sticky {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		padding: 5px;
		background-color: #cae8ca;
		border: 2px solid #4CAF50;
	}
	div.content {
		padding-bottom: 2000px;
	}
</style>
</head>
<body>

	<p>Try to <b>scroll</b> inside this frame to understand how sticky positioning works.</p>

	<div class="sticky">I am sticky!</div>

	<div class="content">
		<p>In this example, the sticky element sticks to the top of the page (top: 0), when you reach its scroll position.</p>
		<p>Scroll back up to remove the stickyness.</p>
		<p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
		<p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
	</div>

</body>
</html>
```

## CSS Z-index

`z-index` elementlar joylashtirilganda, ular boshqa elementlarning ustiga chiqishi mumkin. Bu elementlarning oldiga yoki orqasiga joylashishi kerakligini aniqlaydi.

```css
img {
  position: absolute;
  z-index: -1;
}
```

## CSS Overflow

`overflow` xususiyati hududga sig'maydigan darajada katta bo'lgan tarkibni joylashtirishda qulayliklar qilib beradi

:::tip `overflow` quyidagi qiymatlarga ega:
1. `visible` - Standart. Kontent element qutisidan tashqariga chiqib ketsa ko'rsatiladi
2. `hidden` - Sig'masdan chiqib ketgani kelsiladi va ko'rsatilmaydi
3. `scroll` - To'ldirilishi kesiladi va tarkibning qolgan qismini ko'rish uchun aylantirish paneli qo'shiladi
4. `auto` - `scroll`ga o'xshaydi faqat kerak bo'lgandagina aylantirish paneli qo'shiladi
:::
## CSS Float
`float` elementni qanday joylashish kerakligini belgilab beradi shu bilan birgalikda `clear` xususiyatidan ham foydalanish kerak

:::tip `float` quyidagi qiymatlardan biriga ega bo'lishi mumkin:
`left`- Element o'z konteynerining chap tomonida joylashadi
`right`- Element o'z konteynerining o'ng tomonida joylashadi
`none`- Element suzmaydi (matnda kelgan joyda ko'rsatiladi). Bu standart
`inherit`- Element o'z ota-onasining `float` qiymatini meros qilib oladi
:::
<!-- floatga hali qo'shimcha ma'lumot beriladi -->