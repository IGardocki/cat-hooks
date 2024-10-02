import { useContext } from "react";
import { catContext } from "../CatContext";

export const CatTitle = () => {
    const {cat} = useContext(catContext)

    return(
        <div style={{border: '10px solid orange'}}>
                <h1>{cat}</h1>
            <div/>
        </div>
    )
}
