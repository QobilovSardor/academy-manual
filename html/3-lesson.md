## HTML lists
1. Tartibsiz ro'yxat:
`<ul>` tegini ichida `<li>` tegi bilan ro'yxatlar ishlatiladi
```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```
<img src="/images/list1.jpg">

2. Tartibli ro'yxat:
`<ol>` tegini ichida `<li>` tegi bilan ro'yxatlar ishlatiladi
```html
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```
<img src="/images/list2.jpg">

3. HTML tavsif ro'yxatini qo'llab quvatlaydi
```html
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```
<img src="/images/list3.jpg">

## HTML block va inline elementlari
`Block` darajadagi elementlar:
1. Har doim yangi satrdan boshlanadi
2. Har doim mavjud bo'lgan to'liq kenglikni egallaydi
3. Eng ko'p ishlatiladigan `block` elementlar `<p>` `<h1><h6>` `<div>`

::: tip HTML block darajadagi elementlar:
```html
<address>
<article> 
<aside> 
<blockquote>
<canvas>
<dd>
<div>
<dl>
<dt>
<fieldset>
<figcaption>
<figure>
<footer>
<form>
<h1>-<h6>
<header>
<hr>
<li>
<main>
<nav>
<noscript>
<ol>
<p>
<pre>
<section>
<table>
<tfoot>
<ul>
<video>
```
:::
`Inline` darajadagi elementlar:
1. Har doim yangi satrdan boshlanmaydi
2. O'ziga kerak bo'lgan kenglikni oladi
3. Eng ko'p ishlatiladigan `span`
::: tip HTML inline darajadagi elementlar:
```html
<a>
<abbr>
<acronym>
<b>
<bdo>
<big>
<br>
<button>
<cite>
<code>
<dfn>
<em>
<i>
<img>
<input>
<kbd>
<label>
<map>
<object>
<output>
<q>
<samp>
<script>
<select>
<small>
<span>
<strong>
<sub>
<sup>
<textare>
<time>
<tt>
<var>
```
:::

## HTML `class` atributi
Bir nechta HTML elementlari bir xil bo'lgan vaqtda ularga qo'shimcha nom berish uchun kerak bo'ladi
```html
<div class="city">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>

<div class="city">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p>
</div>

<div class="city">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
</div>
```

## HTML `id` atributi
id atributi HTML uchun noyob bo'lgan identifikatorni belgilash uchun ishlatiladi. Siz HTML hujjatida bir xil identifikatorga ega bir nechta elementga ega bo'lishinggiz  mumkin emas.
```html 
<body>
    <h1 id="myHeader">My Header</h1>
</body>
```

## HTML iframe
HTML iframe tegi inline ramkani belgilaydi.
iframe:
1. url manzil orqali linklarini chiqarib beradi
2. pdf tartibidagi fayllarni chiqarib beradi
3. web havolalarni ham chiqarib beradi
```html
<iframe src="url" title="description"></iframe>
```
```css
iframe{
    border:none;
}
```
iframe tegi borderi bor uni `border:none;` orqali olib tashlaysiz