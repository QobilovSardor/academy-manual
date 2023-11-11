# 📔 19-dars

## Server
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Client-server-model.svg/1200px-Client-server-model.svg.png" />

Server - bu tarmoq orqali mijozlar deb ataladigan boshqa kompyuterlarga xizmatlar yoki resurslarni taqdim etadigan kompyuter yoki tizim. U ma'lumotlarni saqlash, qayta ishlash va tarmoq aloqasi kabi har xil turdagi so'rovlarni boshqarish va boshqarish uchun mo'ljallangan.

Serverlar - bu aniq vazifalarni samarali bajarishga imkon beruvchi yuqori unumdor apparat va maxsus dasturiy ta'minotga ega kuchli kompyuterlar. Ular odatda uzluksiz va ishonchli ishlash uchun tuzilgan bo'lib, bir nechta mijozlarga ular taqdim etgan resurslarga ulanish va ulardan foydalanish imkonini beradi.

Serverlar taklif qilayotgan xizmatlarga qarab turli maqsadlarga xizmat qilishi mumkin. Ba'zi keng tarqalgan server turlariga quyidagilar kiradi:

Veb-serverlar: Bu serverlar veb-saytlarni joylashtiradi va HTTP kabi protokollar yordamida internet orqali mijozlarga veb-sahifalarni yetkazib beradi.

Fayl serverlari: Ular fayllarni saqlaydi va boshqaradi, bu esa mijozlarga tarmoq ichidagi ma'lumotlarga kirish va almashish imkonini beradi.

Ma'lumotlar bazasi serverlari: Bu serverlar ma'lumotlar bazalarini boshqaradi va tuzilgan so'rovlar tillari (SQL) yoki boshqa ma'lumotlar bazasini boshqarish tizimlari orqali saqlangan ma'lumotlarga kirishni ta'minlaydi.

Ilova serverlari: Ular ilovalarni bajaradi va boshqaradi, ilovalar mantig'i, ma'lumotlarni qayta ishlash va foydalanuvchi autentifikatsiyasi kabi vazifalarni bajaradi.

Pochta serverlari: Ushbu serverlar elektron pochta xabarlarini jo'natish, qabul qilish va saqlash bilan shug'ullanadi.

DNS serverlari: Ular domen nomlarini IP manzillarga tarjima qiladi, bu esa mijozlarga domen nomlari bo'yicha veb-saytlarga kirish imkonini beradi.

Bular server turlarining bir nechta misollari va muayyan ehtiyojlar va funksiyalarga qarab boshqa ko'plab maxsus serverlar mavjud. Serverlar mijozlarga resurslar va xizmatlarni taqdim etishda, turli tarmoq muhitlarida aloqa va ma'lumotlar almashinuvini osonlashtirishda hal qiluvchi rol o'ynaydi.

## NPM
NPM (Node Package Manager) Node.js ekosistemida foydalanuvchilarga JavaScript paketlarini boshqarish uchun ishlatiladigan bir paket ma'naviyati va boshqaruv tizimidir. NPM, Node.js-ni o'rnatgan bo'lib keladi va proyektlar uchun tarkibiy paketlarni o'rnatish, yangilashish, o'chirish va boshqarish imkonini beradi.

NPM, paketlarni boshqarish va ulardan foydalanish uchun komandalar jamlanmasini taqdim etadi. Bu komandalar orqali paketlar o'rnatiladi, versiyalari belgilanadi, proyektga bog'langan qo'shimcha qo'llanmalar yaratiladi va boshqa boshqaruv amallarini bajarish mumkin bo'ladi.

NPM orqali ma'lum bir paketni o'rnatish uchun, terminalda npm install paket-nomi komandasini ishlatish mumkin. Bu komanda paketni o'rnatadi va uni proyektga qo'shadi. Shuningdek, package.json nomli faylda proyektga bog'langan barcha paketlarni va ularning versiyalarini saqlaydi.

NPM, milyonlarlab paketlarni o'z ichiga oladi, masalan, veb loyihalarda ishlatiladigan frameworklar, kitobxonalar, stil qo'llanmalari, testlar, sintaksis to'g'rilash qo'llanmalari kabi ko'plab funksiyonalarni o'z ichiga oladi. Foydalanuvchilar shu paketlardan foydalanib, o'z loyihalari uchun tayyor modullarni qisqarish va osonlashadi.

NPM, toplumda keng qo'llaniladigan, yuqori sifatli paketlarni o'z ichiga oladi va bu orqali dasturchilarga modullarni boshqarish, ulardan foydalanish va ulardagi bog'lanishlarni osonlashtirish imkonini beradi. NPM, Node.js ning o'rnatilgan qismi hisoblanadi va dasturchilar uchun qulay va yaxshi tajribani ta'minlayadi.


## AJAX

AJAX - bu inglizchadan "Asynchronous JavaScript and XML" so'zlarining qisqartmasi bo'lib, veb dasturlashda sahifani yangilamasdan turub, asinxron ravishda serverga so'rovlarni yuborish va server qaytargan javobni fon rejimida qabul qilish imkonini beruvchi JavaScript, hamda XML bilan amallarni bajarish texnologiyasidir. Shunda AJAX "Asinxron JavaScript va XML" deb tarjima qilinadi.
AJAX haqida batafsil maqola: <a href="https://uz.delachieve.com/ajax-bu-nima-asynchronous-javascript-va-xml-afzalliklari-va-kamchiliklari/" target="_blank">Batafsil ma'lumot</a>

## XML
new XMLHttpRequest() yordamida yaratilgan obyekt, brauzer tomonidan o'rtacha HTTP(S) so'rovlarni jo'natish uchun ishlatiladigan asinxron so'rov obyektidir. XMLHttpRequest (XHR) JavaScriptda darhol so'rov yuborish va ma'lumotlarni olish uchun qo'llaniladi.

XHR obyekti yaratildiktan so'ng, uni ishlatib, brauzer tomonidan serverga HTTP(S) so'rovlar yuborilishi, ma'lumotlarni qabul qilishi va javobni olishi mumkin. Ushbu obyekt orqali asinxron so'rovlar yuborish va javobni kutish, asosiy veb ilovalarda ma'lumot almashish va dinamik ma'lumotlarni yuklash uchun foydalaniladi.

Quyidagi kodda new XMLHttpRequest() obyekti yaratilgan va uni xhr o'zgaruvchisiga tayinlash uchun foydalanilgan misol ko'rsatilgan:

Amaliyot: AJAX yordamida Valyuta kursi:
