import {useState} from 'react'
import './App.css'
import { DuckComponent } from './components/DuckComponents'
import { Cat, catContext } from './CatContext';
import { CatTitle } from './components/CatTitle';
import { CatButtons } from './components/CatButtons';
import { CatDescription } from './components/CatDescriptions';
import { CatPicture } from './components/CatPicture';
import { CatFooter } from './components/CatFooter';

function App() {
  const [cat, setCat] = useState<Cat>('Romad')

  // need to declare getter setter here and give typing to context in another place
  const getterSetter = {cat, setCat};

  return (
    <>
      <catContext.Provider value={getterSetter}>
        <CatButtons/>
        <CatTitle/>
        <CatDescription /> 
        <CatPicture/>
        <DuckComponent />
        <CatFooter/>
      </catContext.Provider>
    </>

  )
}

export default App
