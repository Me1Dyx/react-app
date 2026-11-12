
export default function MainComponent(params) {
    return (
        <>
            <div className="MainText">
                <h1>Переваги продажів на Brum</h1>
                <p>Brum — один з найбільших маркетплейсів України, на якому регулярно роблять замовлення близько 6 млн інтернет-покупців</p>
            </div>
            <div className="MainContainer">
                <div className="MainList1">
                    <br />
                    <br />
                    <ul>
                        <li>Три канали продажів</li>
                        <hr />
                        <br />
                        <li>Масовий імпорт</li>
                        <hr />
                        <br />
                        <li>Зручне управління</li>
                        <hr />
                        <br />
                        <li>Нарахування бонусів у разі незабраних посилок</li>
                        <hr />
                        <br />
                    </ul>
                </div>
                <img src="https://prom.ua/cloud-cgi/static/catalog-ui/js/build/portal-portable/benefits-light-42500649.png" height="550" alt="Prom" />
                <div className="MainList2">
                    <br />
                    <br />
                    <ul>
                        <li>Рейтинг покупців</li>
                        <hr />
                        <br />
                        <li>Готові інтеграції</li>
                        <hr />
                        <br />
                        <li>Економ-режим у ProSale</li>
                        <hr />
                        <br />
                        <li>Свій сайт</li>
                        <hr />
                        <br />
                    </ul>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="MainText">
                <h1>Тарифи Brum</h1>
            </div>
            <br />
            <div className="MainContainer2">
                <div className="MainTarify">
                    <br />
                    <h2>Яка комісія за замовлення в каталозі Brum</h2>
                    <br />
                    <h3>Єдина комісія становить від 4.2% від вартості замовленого товару на маркетплейсі Brum. Розмір комісії залежить від категорії.
                    Новачки та топ-продавці можуть увімкнути інші режими</h3>
                    <ul>
                        <li>«Економ» — комісія вдвічі нижча за єдину, (від 2.1% залежно від категорії)</li>
                        <br />
                        <li>«Більше продажів» або «Турбо» — вища комісія, але з просуванням у видачі.</li>
                    </ul>
                    <h3>Тарифний план (комісію) для вашої категорії ви можете дізнатися в таблиці. Комісія стягується лише за виконані замовлення</h3>
                </div>
                <img src="https://prom.ua/cloud-cgi/static/catalog-ui/js/build/portal-portable/tariff-light-f1c8811f.png" height="520" alt="Prom" />
            </div>
        </>
    )
}