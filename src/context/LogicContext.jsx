import { appLogicContext } from "./ContextProvider";
import { useState, useEffect } from "react";

const LogicContext = ({ children }) => {
    // data grafico
    var expenses = [250, 450, 500, 300, 250, 430, 550];
    const backgroundColors = expenses.map((val) =>
        val > 500 ? "rgb(117, 181, 191)" : "rgb(234, 118, 93)",
    );
    var days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

    var myOptions = {
        responsive: true,
        animation: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                min: 0,
                max: 600
            },
            x: {
                ticks: { color: 'rgb(218, 217, 215)' },
                grid: { display: false },

            }
        },

    };

    var myData = {
        labels: days,
        datasets: [
            {
                label: 'Gastos',
                data: expenses,
                backgroundColor: backgroundColors,
                borderRadius: '8'
            }
        ]
    };
    // Implementa en Redux o Contexto la lógica para servir los datos a los distintos componentes:

    // - Servir el balance de gastos
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const totalExpenses = expenses.reduce((acc, currentValue) => acc + currentValue, 0);
        setTotal(totalExpenses);
    }, [expenses]);


    // - El gasto de hoy

    // - El % de variación entre ayer y hoy 

    // - Los datos de la gráfica.


    return (
        <appLogicContext.Provider value={{ myData, myOptions, total }}>
            {children}
        </appLogicContext.Provider>
    )
}

export default LogicContext;
