import React, { createContext, useState } from "react";


export const Khi = createContext(null);

export default function Ibm({ children }) {

    const [theme, setTheme] = useState('light')
    return (

        <Khi.Provider value={{ theme }}>
            {children}
        </Khi.Provider>


    )
}