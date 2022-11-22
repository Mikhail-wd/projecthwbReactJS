import styles from "../news.module.sass"
import banner from "../../images/news/banner.png"
import NewsData from "../../context/context"
import {useContext} from "react"

interface props{
    image:string,
    date:string,
    title:string,
    content:string,
    key:number 
}

function Content({image,date,title,content,key}: props) {
    const dataToProcess = useContext(NewsData)
    return (

        <div className={styles.news}>
            <img src={image} alt="news-banner" />
            <p>{title}</p>
            <p>{content}
            </p>
            <div className={styles.undercutt}></div>
            <div>
                <p>{date}</p>
                <button>Читать</button>
            </div>
        </div>
    )
}

export default Content;