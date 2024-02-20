
# 📔 9-dars

## Amalyot

## Masalalar

```js
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2022 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2022 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2022 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2022 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2022 10:00 AM',
        isLoggedIn: false
    }
];
```
1. Userlar ro'yhatidan userning id si orqali topib beruvchi funksiya yarating 
2. Userlar ro'yhatidan userning email orqali topib beruvchi funksiya yarating 
3. Userlar ro'yhatidan userning isLoggedIn kalit so'zi true qiymatlilarini topib beruvchi funksiya yarating.
4. userlar ro'yhatidan userning username va paroli berilsa o'sha usernamedagi foydalanuvchini paroli to'g'riligini tekshirib beruvchi funksiya yarating.
5. userlar ro'yhatidan userning username berilsa o'sh usernamedagi foydalanuvchi qachon ro'yhatdan o'tganligini chiqaruvchi funksiya yyarating.

### Masala
1. Foydalanuvchidan nechta kino ko'rdingiz degan savol bering
2. Foydalanuvchi nechta kino ko'rganini kiritgandan keyin o'shancha marta 1-ko'rgan kinongizni nomi? 2-ko'rgan kinongizni nomi? 3-ko'rgan kinongizni nomi? va hokozo shaklida so'ralsin. Va console.logga 1-ko'rgan kinongizni shu 2-ko'rgan kinogiz shu deb chiqarsin
3. kinoning nomlarini bitta massivga qo'shing


```js
4.
function checkUser(username, password) {
  const filtredUser = users.filter(
    user => user.username === username && user.password === password
  );
  return filtredUser.length > 0;
}
console.log(checkUser('Alex', '123123'));
5.
function checkUser(username) {
  const user = users.filter(user => user.username === username)[0];
  if(user) {
    return user.createdAt
  } else {
    return 'Foydalanuvchi topilmadi'
  }
}

console.log(checkUser('Alex'));
```