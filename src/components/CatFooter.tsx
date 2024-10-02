import { useContext } from "react";
import { catContext } from "../CatContext";

export const CatFooter = () => {
    const {cat} = useContext(catContext)

    return(
        <div style={{border: '10px solid orange'}}>
            {cat === 'Romad' ? <p>A little dude I adopted while living in Kansas!</p> 
            : <p>A smol gurl I adopted when her previous owner had to leave the US</p> }
        </div>
    )
}