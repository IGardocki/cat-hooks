import { useContext } from "react"
import { catContext } from "../CatContext"
import mimi from '../assets/mimi.jpg'
import romad from '../assets/romad.jpg'

export const CatPicture: React.FC = () => {
    const {cat} = useContext(catContext)

    return(
        <div style={{border: '10px solid orange'}}>
            {cat === 'Mimi' ? <img src={mimi} height={'300vh'} width={'300vw'}/> 
            : <img src={romad} height={'300vh'} width={'300vw'}/> }
        </div>
    )
}