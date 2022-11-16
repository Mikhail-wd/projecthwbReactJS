import styles from "./contacts.module.sass"

function contacts() {
    return (
        <div className={styles["main-frame"]}>
            <div className={styles.info}>
                <h1>Контакты</h1>
                <p>Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</p>
                <ul>
                    <li><img src="###" alt="###" /> 220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</li>
                    <li><img src="###" alt="###" /> +375 29 621-48-33 <img src="###" alt="###" /><img src="###" alt="###" /><img src="###" alt="###" /> </li>
                    <li><img src="###" alt="###" />sdaem@sdaem.by</li>
                    <li><img src="###" alt="###" />Режим работы: 08:00-22:00</li>
                </ul>
                <p>ИП Шушкевич Андрей Викторович <br />УНП 192602485 Минским горисполкомом 10.02.2016</p>
                <div>
                    <img src="###" alt="###" /><p>Администрация сайта не владеет информацией о наличии свободных квартир</p>
                </div>
            </div>
            <div className={styles.communication}>
                <form action="submit">
                    <p>Ваше имя</p>
                    <img src="###" alt="###" />
                    <input type="text" placeholder="Имя" />
                    <p>Ваша электронная почта</p>
                    <img src="###" alt="###" />
                    <input type="mail" placeholder="email" />
                    <p>Ваше сообщение</p>
                    <img src="###" alt="###" />
                    <input type="text" placeholder="Сообшение" />
                </form>
                <button className={styles["button-to-send"]}></button>
            </div>
            <div className={styles.media}>
                <img src="###" alt="###" />
                <img src="###" alt="###" />
                <img src="###" alt="###" />
            </div>

        </div>
    )
}

export default contacts;