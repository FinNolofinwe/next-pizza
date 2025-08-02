export const categories = [
    { name: 'Пиццы' },
    { name: 'Комбо' },
    { name: 'Закуски' },
    { name: 'Коктейли' },
    { name: 'Кофе' },
    { name: 'Напитки' },
    { name: 'Десерты' },
]

export const ingredients = [{
    name: 'Сырный бортик',
    price: 179,
    imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
},
{
    name: 'Сливочная моцарелла',
    price: 79,
    imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
},
{
    name: 'Сыры чеддер и пармезан',
    price: 79,
    imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
},
{
    name: 'Острый перец халапеньо',
    price: 59,
    imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
},
{
    name: 'Нежный цыпленок',
    price: 79,
    imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
},
{
    name: 'Шампиньоны',
    price: 59,
    imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
},
{
    name: 'Бекон',
    price: 79,
    imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
},
{
    name: 'Ветчина',
    price: 79,
    imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
},
{
    name: 'Пикантная пепперони',
    price: 79,
    imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
},
{
    name: 'Острая чоризо',
    price: 79,
    imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
},
{
    name: 'Маринованные огурчики',
    price: 59,
    imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
},
{
    name: 'Свежие томаты',
    price: 59,
    imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
},
{
    name: 'Красный лук',
    price: 59,
    imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
},
{
    name: 'Сочные ананасы',
    price: 59,
    imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
},
{
    name: 'Итальянские травы',
    price: 39,
    imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
},
{
    name: 'Сладкий перец',
    price: 59,
    imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
},
{
    name: 'Кубики брынзы',
    price: 79,
    imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
},
{
    name: 'Митболы',
    price: 79,
    imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
}].map((item, index) => ({ ...item, id: index + 1 }))


export const products = [{
    name: "Чикен ролл",
    categoryId: 3,
    imageUrl: "https://media.dodostatic.net/image/r:292x292/019595f503e27410ab6e179c05347231.jpg"

}, {
    name: "Картофель по-деревенски",
    categoryId: 3,
    imageUrl: "https://media.dodostatic.net/image/r:292x292/0195ca37425e71ed97460ec0746ce302.jpg"
}, {
    name: "Паста Креветка и песто",
    categoryId: 3,
    imageUrl: "https://media.dodostatic.net/image/r:292x292/019591e99f2e77e79cd59ac531ef5522.jpg"
}, {
    name: "Додстер Чилл Грилл",
    categoryId: 3,
    imageUrl: "https://media.dodostatic.net/image/r:292x292/019591cc0d0971eaa6f4f81bde8983fb.jpg"
}, {
    name: "Омлет с томатами в пите",
    categoryId: 3,
    imageUrl: "https://media.dodostatic.net/image/r:292x292/019635f4c8b873ed867cf7919f6185c7.jpg"
},
{
    name: "Коктейль Персиковый",
    categoryId: 4,
    imageUrl: "https://media.dodostatic.net/image/r:292x292/019592027af8724f9a3edd8073dbe29d.jpg"
},
{
    name: "Молочный коктейль Фисташка",
    categoryId: 4,
    imageUrl: "https://media.dodostatic.net/image/r:292x292/019635f4c8b873ed867cf7919f6185c7.jpg"
}, {
    name: "Капучино Яблочный пирог",
    categoryId: 5,
    imageUrl: "https://media.dodostatic.net/image/r:292x292/0195a3dd5c3173e2a83bba8bee8be7e8.jpg"
},
{
    name: "Кофе Карамельный капучино",
    categoryId: 5,
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d61aed6b6d4bfdad4e58d76cf56.jpg"
}]