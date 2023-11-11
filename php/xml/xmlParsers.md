# 📔 PHP XML Parsers

## PHP XML Parsers (XML tahlilchilari)

XML nima?

XML tili veb-saytlar bo'ylab almashish uchun ma'lumotlarni tuzish usulidir.

RSS tasmalari va podkastlar kabi bir qancha veb-texnologiyalar XML-da yozilgan.

XML yaratish oson. U HTMLga juda o'xshaydi, faqat siz o'zingizning teglaringizni yaratasiz.

XML parser nima?
XML hujjatini o'qish va yangilash, yaratish va manipulyatsiya qilish uchun sizga XML tahlilchisi kerak bo'ladi.

PHP da XML parserlarining ikkita asosiy turi mavjud:

- Daraxtga asoslangan tahlilchilar
- Voqealarga asoslangan tahlilchilar

Daraxtga asoslangan tahlilchilar

Daraxtga asoslangan tahlilchilar butun hujjatni Xotirada saqlaydi va XML hujjatini Daraxt tuzilishiga aylantiradi. U butun hujjatni tahlil qiladi va daraxt elementlariga (DOM) kirishni ta'minlaydi.

Ushbu turdagi tahlilchi kichikroq XML hujjatlari uchun yaxshiroq tanlovdir, lekin katta XML hujjati uchun emas, chunki u katta ishlash muammolarini keltirib chiqaradi.

Daraxtga asoslangan tahlilchilarga misol:

- SimpleXML
- DOM

Voqealarga asoslangan tahlilchilar

Voqealarga asoslangan tahlilchilar butun hujjatni Xotirada saqlamaydilar, aksincha, ular bir vaqtning o'zida bitta tugunda o'qiydilar va real vaqt rejimida o'zaro ishlashga imkon beradi. Keyingi tugunga o'tganingizdan so'ng, eskisi tashlanadi.

Ushbu turdagi tahlilchi katta XML hujjatlari uchun juda mos keladi. U tezroq tahlil qiladi va xotirani kamroq sarflaydi.

Voqealarga asoslangan tahlilchilarga misol:

- XMLReader
- XML Expat Parser













