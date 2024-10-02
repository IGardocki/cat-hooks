import egyptianGeese from '../assets/egyptianGeese.jpg'
import muscovyDucks from '../assets/muscovyDucks.jpg'
import { useState } from 'react';

type DuckType = 'egyptianGoose' | 'muscovyDuck'

export const DuckComponent: React.FC = () => {
    const [duckType, setDuckType] = useState<DuckType>('egyptianGoose');

    const handleEgyptianGeeseClick = () => {
        setDuckType('egyptianGoose')
    }

    const handleMuscovyDuckClick = () => {
        setDuckType('muscovyDuck')
    }

    return(
        <div style={{border: '10px solid blue'}}>
            {duckType === 'egyptianGoose' ? <img src={egyptianGeese} height={'300vh'} width={'300vw'}/> 
            : <img src={muscovyDucks} height={'300vh'} width={'300vw'}/> }
            <br/>
            <button onClick={handleEgyptianGeeseClick}>See Egyptian Geese</button>
            <button onClick={handleMuscovyDuckClick}>See Moscovy Ducks</button>
        </div>
    )
}