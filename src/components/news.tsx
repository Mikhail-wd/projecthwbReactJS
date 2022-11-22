import styles from "./news.module.sass"
import home from "../images/icons/news/Grouphome.svg"
import loopa from "../images/icons/news/Vectorloopa.svg"
import banner from "../images/news/banner.png"
import NewsData from "../context/context"
import Content from "../components/news_components/content"


function News() {
    let data = [
        {   
            id: 1,
            image: "https://random.imagecdn.app/500/150",
            title: "Линия Сталина: суровый отдых в усадьбах на сутки",
            content: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода,       хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...",
            date: "14 Января 2008"
        },
        {
            id: 2,
            image: "https://random.imagecdn.app/500/150",
            title: "Линия Сталина: суровый отдых в усадьбах на сутки",
            content: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода,       хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...",
            date: "14 Января 2008"
        },
        {
            id: 3,
            image: "https://random.imagecdn.app/500/150",
            title: "Линия Сталина: суровый отдых в усадьбах на сутки",
            content: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода,       хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...",
            date: "14 Января 2008"
        },
        {
            id: 4,
            image: "https://random.imagecdn.app/500/150",
            title: "Линия Сталина: суровый отдых в усадьбах на сутки",
            content: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода,       хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...",
            date: "14 Января 2008"
        }]

    return (
        <div className={styles["main-frame"]}>
            <div className={styles["route-and-search"]}>
                <img src={home} alt="home-page" />
                <div className={styles.dota}></div>
                <p>Новости</p>
                <h1>Новости</h1>
                <div className={styles.search}>
                    <input type="text" placeholder="Поиск по статьям" />
                    <div>
                        <img src={loopa} alt="loopa" />
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                {data.map(index=><Content key={index.id} date={index.date} image={index.image} title={index.title} content={index.content}/>)}
                <div className={styles.poggy}>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>...</p>
                    <p>11</p>
                </div>
            </div>
            <div className={styles.navigation}></div>
        </div >
    )
}

export default News;