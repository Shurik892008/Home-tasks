function sortByAge(arr) {
  arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}

let picture1 = { name: "Леонардо Да Винчи, «Тайная вечеря»", age: 1495 };
let picture2 = { name: "Сандро Боттичелли, «Рождение Венеры»", age: 1482 };
let picture3 = { name: "Микеланджело Буонарроти, «Сотворение Адама»", age: 1511 };
let picture4 = { name: "Рембрандт Харменс ван Рейн, «Ночной дозор»", age: 1642 };
let picture5 = { name: "Рафаэль Санти, «Сикстинская мадонна»", age: 1565 };
let picture6 = { name: "Диего Веласкес, «Менины»", age: 1656 };
let arr = [picture1, picture2, picture3];

sortByAge(arr);

alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);
