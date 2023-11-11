# 📔 PHP MySQL Limit Data Selections

## PHP MySQL Limit Data Selections (MySQL chegarasi ma'lumotlarni tanlash)

MySQL ma'lumotlar bazasidan ma'lumotlarni tanlashni cheklash

MySQL qaytariladigan yozuvlar sonini belgilash uchun LIMIT bandini taqdim etadi.

LIMIT bandi SQL yordamida ko'p sahifali natijalarni yoki sahifalarni kodlashni osonlashtiradi va katta jadvallarda juda foydali. Ko'p sonli yozuvlarni qaytarish ishlashga ta'sir qilishi mumkin.

Biz "Buyurtmalar" deb nomlangan jadvaldan 1 dan 30 gacha (shu jumladan) barcha yozuvlarni tanlashni xohlaymiz. Keyin SQL so'rovi quyidagicha ko'rinadi:

```php
$sql = "SELECT * FROM Orders LIMIT 30";
```

Yuqoridagi SQL so'rovi bajarilganda, u dastlabki 30 ta yozuvni qaytaradi.

Agar biz 16 - 25 (shu jumladan) yozuvlarni tanlamoqchi bo'lsak-chi?

Mysql ham buni hal qilish usulini taqdim etadi: OFFSET yordamida.

Quyidagi SQL so'rovida "faqat 10 ta yozuvni qaytaring, 16 ta yozuvdan boshlang (OFFSET 15)":

```php
$sql = "SELECT * FROM Orders LIMIT 10 OFFSET 15";
```

Xuddi shu natijaga erishish uchun qisqaroq sintaksisdan ham foydalanishingiz mumkin:

```php
$sql = "SELECT * FROM Orders LIMIT 15, 10";
```

E'tibor bering, siz verguldan foydalanganda raqamlar teskari bo'ladi.














