# 📔 PHP OOP - Access Modifiers

## PHP OOP - Access Modifiers (OOP - Kirish modifikatorlari)

PHP - Kirish modifikatorlari

Xususiyatlar va usullarda kirish o'zgartirish moslamalari bo'lishi mumkin, ular qayerdan foydalanish mumkinligini nazorat qiladi.

Uchta kirish modifikatori mavjud:

- public- mulk yoki usulga hamma joydan kirish mumkin. Bu standart
- protected- xususiyat yoki usulga sinf ichida va shu sinfdan olingan sinflar orqali kirish mumkin
- private- xususiyat yoki usulga FAQAT sinf ichida kirish mumkin

Quyidagi misolda biz uchta xususiyatga (nom, rang va vazn) uchta turli kirish modifikatorlarini qo'shdik. Bu yerda, agar siz nom xususiyatini o'rnatishga harakat qilsangiz, u yaxshi ishlaydi (chunki name xususiyati ommaviydir va unga hamma joydan kirish mumkin). Biroq, agar siz rang yoki vazn xususiyatini o'rnatishga harakat qilsangiz, bu halokatli xatolikka olib keladi (chunki rang va vazn xususiyati himoyalangan va maxfiydir):

```php
<?php
class Fruit {
  public $name;
  protected $color;
  private $weight;
}

$mango = new Fruit();
$mango->name = 'Mango'; // OK
$mango->color = 'Yellow'; // ERROR
$mango->weight = '300'; // ERROR
?>
```

Keyingi misolda biz ikkita funktsiyaga kirish modifikatorlarini qo'shdik. Bu yerda, agar siz set_color() yoki set_weight() funksiyalarini chaqirmoqchi bo'lsangiz, bu xatoga olib keladi (chunki ikkita funksiya himoyalangan va shaxsiy deb hisoblanadi), hatto barcha xususiyatlar ochiq bo'lsa ham:


```php
<?php
class Fruit {
  public $name;
  public $color;
  public $weight;

  function set_name($n) {  // a public function (default)
    $this->name = $n;
  }
  protected function set_color($n) { // a protected function
    $this->color = $n;
  }
  private function set_weight($n) { // a private function
    $this->weight = $n;
  }
}

$mango = new Fruit();
$mango->set_name('Mango'); // OK
$mango->set_color('Yellow'); // ERROR
$mango->set_weight('300'); // ERROR
?>
```










