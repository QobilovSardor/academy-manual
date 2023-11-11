# 📔 21-dars

## Inkapsulatsiya Constructor va  Inkapsulatsiya Class

Inkapsulyatsiya - ob'ektga yo'naltirilgan dasturlashda (OOP) asosiy tushuncha bo'lib, u ma'lumotlarni va ushbu ma'lumotlarda ishlaydigan usullarni ob'ekt deb ataladigan yagona birlikka birlashtirishni o'z ichiga oladi. Bu meros va polimorfizm bilan bir qatorda OOP ning asosiy tamoyillaridan biridir.

Inkapsulyatsiya ob'ektning ichki holatini to'g'ridan-to'g'ri tashqi kirish va manipulyatsiyadan himoya qilish usulini ta'minlab, ma'lumotlarni yashirish va abstraktsiyaga erishishga qaratilgan. U ob'ekt atrofida aniq chegarani o'rnatadi, qaysi tomonlar ko'rinadigan va dasturning boshqa qismlari uchun ochiqligini belgilaydi.

Inkapsulyatsiyada ob'ektning ichki ma'lumotlari odatda shaxsiy deb e'lon qilinadi, ya'ni unga faqat ob'ektning o'zida belgilangan usullar yoki funktsiyalar orqali kirish va o'zgartirish mumkin. Ko'pincha oluvchi va sozlash usullari yoki yordamchi va mutatorlar deb ataladigan bu usullar ob'ekt ma'lumotlariga boshqariladigan kirishni ta'minlaydi. Ma'lumotlarni qamrab olish orqali siz ob'ekt holatining yaxlitligi va izchilligini ta'minlash uchun cheklovlarni, tekshirish qoidalarini va biznes mantiqini qo'llashingiz mumkin.

Inkapsulyatsiya, shuningdek, ma'lumotni yashirishga yordam beradi, chunki ob'ektning ichki tafsilotlari va amalga oshirilishi u bilan o'zaro ta'sir qiluvchi tashqi koddan yashiringan. Bu ob'ektlarni qora qutilar sifatida ko'rib chiqishga imkon beradi, bu esa ob'ekt interfeysiga tayanadigan dasturning boshqa qismlariga ta'sir qilmasdan ichki amalga oshirishga o'zgartirishlar kiritish imkonini beradi.

Inkapsulyatsiyaning afzalliklari yaxshilangan kodni saqlash, modullik va qayta foydalanishni o'z ichiga oladi. Bu dasturning turli qismlari o'rtasidagi bog'liqlikni kamaytirishga yordam beradi va kodni tashkil qilishni yaxshilaydi. Bundan tashqari, inkapsulyatsiya o'zaro bog'liq xatti-harakatlar bilan inkapsulyatsiyalangan ma'lumotlar tamoyilini qo'llab-quvvatlaydi, bu esa yanada mustahkam va kengaytiriladigan dasturiy ta'minot tizimlarini yaratishga imkon beradi.

Misol:
```js
function createPerson(name, age) {
  // xususiy o'zgaruvchilar
  let _name = name;
  let _age = age;

  // xususiy o'zgaruvchilarga kirishning umumiy usullari
  return {
    getName: function() {
      return _name;
    },
    getAge: function() {
      return _age;
    },
    setName: function(newName) {
      _name = newName;
    },
    setAge: function(newAge) {
      _age = newAge;
    }
  };
}

let person = createPerson("John", 25);
console.log(person.getName()); // Output: John
console.log(person.getAge()); // Output: 25

person.setName("Alice");
person.setAge(30);

console.log(person.getName()); // Output: Alice
console.log(person.getAge()); // Output: 30
```

## Webpack

<img src="https://miro.medium.com/v2/resize:fit:1400/1*SVyedUtyXmpDcJaXuiZNRg.png" />

<img src="https://iamakulov.com/notes2/wp-content/uploads/2017/03/slide_31.png" />

Webpack JavaScript ilovalari uchun mashhur va kuchli modul to'plamidir. U odatda zamonaviy veb-ishlab chiqishda JavaScript fayllari, CSS uslublar jadvallari, tasvirlar va boshqalar kabi loyihaning turli aktivlarini birlashtirish, boshqarish va optimallashtirish uchun ishlatiladi.

Asosan, veb-paket bog'liqliklari bo'lgan bir nechta modullarni oladi va odatda "to'plam" deb ataladigan bitta to'plamli fayl yoki fayllar to'plamini yaratadi. Bu jarayon ishlab chiquvchilarga kodlar bazasini tartibga solish va modullashtirish, uni brauzer tomonidan samarali yuklanishi mumkin bo'lgan kichikroq boshqariladigan modullarga bo'lish imkonini beradi.

Webpack bir nechta asosiy xususiyatlarni taklif qiladi:

Modullarni birlashtirish: Webpack modullar orasidagi bog'liqlikni tahlil qiladi va ularni bitta chiqish fayliga to'playdi. Bu veb-ilova tomonidan amalga oshirilgan HTTP so'rovlari sonini kamaytirishga yordam beradi va ishlashni yaxshilaydi.

Yuklagichlar: Webpack fayllarni paketga kiritishdan oldin ularni qayta ishlash va o'zgartirish uchun yuklagichlardan foydalanadi. Yuklagichlar JavaScript, CSS, HTML va boshqalar kabi turli xil fayl turlarini boshqarishi mumkin. Ular sizga ES6+ kodini ES5 ga o‘tkazish, Sassni CSS ga kompilyatsiya qilish yoki tasvirlarni optimallashtirish kabi o‘zgarishlarni qo‘llash imkonini beradi.

Plaginlar: Webpack o'z imkoniyatlarini kengaytiruvchi plagin tizimini taklif etadi. Plaginlar keng ko'lamli vazifalarni bajarishi mumkin, jumladan kodni minimallashtirish, paketlarni optimallashtirish, atrof-muhitga xos konfiguratsiyalar va boshqalar. Ommabop plaginlar qatoriga kichraytirish uchun UglifyJS plagini, HTML fayllarni yaratish uchun HtmlWebpackPlugin va ishlab chiqish jarayonida jonli qayta yuklash uchun Hot Module Replacement (HMR) plaginlari kiradi.

Rivojlanish serveri: Webpack oʻrnatilgan ishlab chiqish serverini oʻz ichiga oladi, bu sizga dasturni ishlab chiqish vaqtida mahalliy sifatida tezkor xizmat koʻrsatish imkonini beradi. Dastlabki kodga o'zgartirishlar kiritilganda u avtomatik ravishda brauzerni yangilaydi va ishlab chiqish jarayonini yanada samarali qiladi.

Kodni bo'lish: Webpack kodni ajratishni qo'llab-quvvatlaydi, bu sizga kodingizni bir nechta to'plamlarga bo'lish imkonini beradi. Bu, ayniqsa, butun kod bazasini oldindan yuklash samarasiz bo'ladigan katta ilovalar uchun foydalidir. Kodni bo'lish dangasa yuklashni ta'minlaydi, bu erda modullar foydalanuvchi dastur bo'ylab harakatlanayotganda talab bo'yicha yuklanadi.

Webpack zamonaviy JavaScript-ni ishlab chiqishda, ayniqsa React, Angular yoki Vue.js kabi ramkalardan foydalanadigan loyihalarda markaziy vositaga aylandi. U aktivlarni boshqarish, ish faoliyatini optimallashtirish va ishlab chiquvchilar unumdorligini oshirish uchun kuchli xususiyatlarni taklif etadi, bu esa uni murakkab veb-ilovalarni yaratish uchun mashhur tanlovga aylantiradi.

```js

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'); // nodejsap
	// mode
	mode: 'development', // production
	// entry
	entry: {
		app: path.resolve(__dirname, './src/app.js'),
		about: path.resolve(__dirname, './src/about.js'),
	},
	// output
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].js'
	},
	// plugins
	plugins: [
		new HtmlWebpackPlugin({
			// title,
			title: 'Webpack 5',
			// fileName,
			filename: 'index.html',
			// template
			template: './src/temp.html',
			// chunks
			chunks: ['app'],
		}),
		new HtmlWebpackPlugin({
			title: 'About html',
			filename: 'about.html',
			template: './src/aboutTem.html',
			chunks: ['about']
		})
	],
	// loaders
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},

		],
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'public')
		},
		port: 9000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true
	}
}
```