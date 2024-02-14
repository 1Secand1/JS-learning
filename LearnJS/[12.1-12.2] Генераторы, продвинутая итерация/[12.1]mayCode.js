if (0) {


    const items = [
        { "id": 1, "item": "Автомобиль" },
        { "id": 2, "item": "Велосипед" },
        { "id": 3, "item": "Дом" },
        { "id": 4, "item": "Дрон" },
        { "id": 5, "item": "Лифт" },
        { "id": 6, "item": "Вентилятор" },
        { "id": 7, "item": "Гитара" },
        { "id": 8, "item": "Вертолет" },
        { "id": 9, "item": "Утюг" },
        { "id": 10, "item": "Самолет" },
        { "id": 11, "item": "Воздушный змей" },
        { "id": 12, "item": "Лампа" },
        { "id": 13, "item": "Микроволновая печь" },
        { "id": 14, "item": "Ноутбук" },
        { "id": 15, "item": "Печь" },
        { "id": 16, "item": "Пианино" },
        { "id": 17, "item": "Холодильник" },
        { "id": 18, "item": "Самокат" },
        { "id": 19, "item": "Телевизор" },
        { "id": 20, "item": "Зонт" },
        { "id": 21, "item": "Пылесос" },
        { "id": 22, "item": "Стиральная машина" },
        { "id": 23, "item": "Ксилофон" },
        { "id": 24, "item": "Яхта" },
        { "id": 25, "item": "Замбони" },
        { "id": 26, "item": "Лодка" },
        { "id": 27, "item": "Посудомоечная машина" },
        { "id": 28, "item": "Погрузчик" },
        { "id": 29, "item": "Мотоцикл" },
        { "id": 30, "item": "Проектор" },
        { "id": 31, "item": "Скейтборд" },
        { "id": 32, "item": "Грузовик" },
        { "id": 33, "item": "Скрипка" },
        { "id": 34, "item": "Стул" },
        { "id": 35, "item": "Стол" },
        { "id": 36, "item": "Окно" },
        { "id": 37, "item": "Зеркало" },
        { "id": 38, "item": "Кровать" },
        { "id": 39, "item": "Часы" },
        { "id": 40, "item": "Ноутбук" },
        { "id": 41, "item": "Письменный стол" },
        { "id": 42, "item": "Принтер" },
        { "id": 43, "item": "Маршрутизатор" },
        { "id": 44, "item": "Очки" },
        { "id": 45, "item": "Микрофон" },
        { "id": 46, "item": "Колонки" },
        { "id": 47, "item": "Наушники" },
        { "id": 48, "item": "Клавиатура" },
        { "id": 49, "item": "Мышь" },
        { "id": 50, "item": "Монитор" }
    ];

    function* sequentialIssuanceOfItemsConstructor(itemsArr, dispensingRate) {
        for (let index = 0; index <= itemsArr.length; index += dispensingRate) {
            if (index + dispensingRate > itemsArr.length) {
                throw new Error("В спике меньше элементов чем вы запрашиваете");
            }

            yield itemsArr.slice(index, index + dispensingRate);
        }

    }

    const sequentialIssuanceOfItems = sequentialIssuanceOfItemsConstructor(items, 10);

    console.log(sequentialIssuanceOfItems.next().value);
    console.log(sequentialIssuanceOfItems.next().value);
    console.log(sequentialIssuanceOfItems.next().value);
    console.log(sequentialIssuanceOfItems.next().value);
    console.log(sequentialIssuanceOfItems.next().value);
}


function asyncToGenerator(generatorFunc) {
    return function () {
        const iterator = generatorFunc.apply(this, arguments);

        function handle(result) {
            if (result.done) {
                return result.value;
            }
            const nextValue = result.value;
            return nextValue.then(
                (res) => handle(iterator.next(res)),
                (err) => iterator.throw(err)
            );
        }

        return handle(iterator.next());
    };
}

// Пример использования
const testAsync = asyncToGenerator(function* () {
    try {
        const result = yield Promise.resolve(1);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
});

testAsync();