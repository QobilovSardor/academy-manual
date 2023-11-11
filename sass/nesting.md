# Sass Nesting
## Sass ichki qoidalari
Sass sizga HTML kabi CSS selektorlarini joylashtirish imkonini beradi.
Sayt navigatsiyasi uchun ba'zi Sass kodlari misolini ko'rib chiqing:
```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
  }
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```
E'tibor bering, Sassda `ul`, `li` va `a` selektorlari selektor ichiga joylashtirilgan `nav`.

CSS-da qoidalar birma-bir aniqlanadi (ichiga kiritilmagan):
```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```
Sass-da xususiyatlarni joylashtirishingiz mumkinligi sababli, u standart CSS-ga qaraganda tozaroq va o'qish osonroq.