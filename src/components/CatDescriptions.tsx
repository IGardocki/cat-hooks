import { useContext } from "react";
import { catContext } from "../CatContext";

export const CatDescription = () => {
    const {cat} = useContext(catContext)

    return(
        <div style={{border: '10px solid orange'}}>
            {cat === 'Romad' ? <p>An orange boi who lifts weights every day</p> 
            : <p>An angry lass who bites my toes as I sleep</p> }
        </div>
    )
}