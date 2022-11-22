import {createContext} from "react"

const NewsData = createContext<Array<string | number>[] | Object>([])



export default NewsData;