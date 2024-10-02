import {createContext } from "react";

export type Cat = 'Romad' | 'Mimi';

interface ICat {
  cat: Cat; setCat: React.Dispatch<React.SetStateAction<Cat>>;
}

// you cannot declare useState stuff outside of a component, so you have to create an interface and
// then create getters and setters in app
export const catContext = createContext<ICat>({} as ICat);