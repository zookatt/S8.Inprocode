import { appLogicContext } from "./ContextProvider";

import React from 'react'

const LogicContext = ({ children }) => {

    // Implementa en Redux o Contexto la lógica para servir los datos a los distintos componentes:

    // - Servir el balance de gastos

    // - El gasto de hoy

    // - El % de variación entre ayer y hoy 

    // - Los datos de la gráfica.


    return (
        <appLogicContext.Provider>
            {children}
        </appLogicContext.Provider>
    )
}

export default LogicContext;
