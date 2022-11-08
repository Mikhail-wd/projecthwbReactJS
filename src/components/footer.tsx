function footer() {
    return (
        <div className="footer">
            <div className="information">
                <img src="" alt="information-logo" />
                <p>СДАЁМ БАЙ</p>
                <p className="ingormation-text">ИП Шушкевич Андрей Викторович УНП 192602485 Минским горисполкомом 10.02.2016 220068,
                    РБ, г. Минск, ул. Осипенко, 21, кв.23 +375 29 621 48 33, sdaem@sdaem.by Режим работы: 08:00-22:00 </p>
            </div>
            <div className="types-of-area">
                <ul>
                    <li>Коттеджи и усадьбы</li>
                    <li>Бани и сауны</li>
                    <li>Авто на прокат</li>
                </ul>
            </div>
            <div>
                <p>Квартиры</p>
                <ul className="apartments">
                    <li>Квартиры в Минск</li>
                    <li>Квартиры в Гомеле</li>
                    <li>Квартиры в Бресте</li>
                    <li>Квартиры в Витебске</li>
                    <li>Квартиры в Гродно</li>
                    <li>Квартиры в Могилеве</li>
                </ul>
            </div>
            <div className="social-and-paymant-img">
                <p>Мы в соц сетях</p>
                <div className="social-and-paymant-img_social"><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /></div>
                <div className="social-and-paymant-img_paymant"><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /></div>
            </div>
        </div>
    )
}

export default footer;