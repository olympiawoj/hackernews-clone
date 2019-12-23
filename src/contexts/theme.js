import React from "react"

const MyContext = React.createContext();
const { Consumer, Provider } = MyContext

export const ThemeConsumer = Consumer;
export const ThemeProvider = Provider