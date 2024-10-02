import { useContext } from "react"
import { catContext } from "../CatContext"

export const CatButtons = () => {
    const { setCat} = useContext(catContext)

    const handleRomadClick = () => {
        setCat('Romad')
    }

    const handleMimiClick = () => {
        setCat('Mimi')
    }
    return (
        <div style={{border: '10px solid orange'}}>
            <h2>Select a cat!</h2>
            <button onClick={handleRomadClick}>Romad</button>
            <button onClick={handleMimiClick}>Mimi</button>
        </div>
    )
}