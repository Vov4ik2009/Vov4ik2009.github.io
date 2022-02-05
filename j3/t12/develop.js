const products = [
    {
        id: 0,
        name: "Google Pixel 4 XL 64GB Black",
        url: "https://content1.rozetka.com.ua/goods/images/big/24330840.jpg",
        display: "6.3",
        camera: "8 Мп",
        acc: "3700",
        price: "14 290"
    },
    {
        id: 1,
        name: "Мобильный телефон Apple iPhone 13 Pro 1TB Sierra Blue",
        url: "https://content.rozetka.com.ua/goods/images/big/221208611.jpg",
        display: "6.1",
        camera: "36 Мп",
        acc: "2799",
        price: "55 999₴"
    },
    {
        id: 2,
        name: "Мобильный телефон Samsung Galaxy Z Fold3 12/512GB Phantom Black",
        url: "https://content2.rozetka.com.ua/goods/images/big/201628829.jpghttps://content.rozetka.com.ua/goods/images/big/221208611.jpg",
        display: "6.2+7,2",
        camera: "36 Мп",
        acc: "4400",
        price: "49 999₴"
    },
    {
        id: 3,
        name: "Мобильный телефон Samsung Galaxy S21 FE 6/128GB Olive",
        url: "https://content2.rozetka.com.ua/goods/images/big/245951012.jpg",
        display: "6.4",
        camera: "28 Мп",
        acc: "4500",
        price: "21 999₴"
    },
    {
        id: 4,
        name: "Смартфон Huawei P20 Lite Nova 3e 128gb Black Seller Refurbished",
        url: "https://content.rozetka.com.ua/goods/images/big/160991508.jpg",
        display: "5.8",
        camera: "28 Мп",
        acc: "3000",
        price: "5 608₴"
    },
    {
        id: 5,
        name: "Мобильный телефон Xiaomi 11T 8/128GB Meteorite Gray",
        url: "https://content.rozetka.com.ua/goods/images/big/220277489.jpg",
        display: "6.6",
        camera: "108 Мп",
        acc: "5000",
        price: "12 499"
    },
    {
        id: 6,
        name: "Мобильный телефон OnePlus Nord 12/256GB Gray Onyx (5011101200)",
        url: "https://content.rozetka.com.ua/goods/images/big/194860140.jpg",
        display: "6.4",
        camera: "48 Мп",
        acc: "4100",
        price: "12 999"
    },
    {
        id: 7,
        name: "(5011101200)Мобильный телефон ZTE RedMagic 6R 8/128GB Cosmos",
        url: "https://content1.rozetka.com.ua/goods/images/big/238782224.jpg",
        display: "6.4",
        camera: "48 Мп",
        acc: "4100",
        price: "12 999"
    }


]
function addProductsToDB(products){
    products.forEach(element =>{
        db.collection('products')
        .add(element)
        .then(res => console.log('sucess'))
    })
}
addProductsToDB(products);