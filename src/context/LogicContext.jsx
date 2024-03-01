import { appLogicContext } from "./ContextProvider";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const LogicContext = ({ children }) => {

    const { t } = useTranslation();
    // Implementa en Redux o Contexto la lógica para servir los datos a los distintos componentes:

    // - Los datos de la gráfica.
    var expenses = [250, 450, 500, 300, 250, 430, 550];
    const backgroundColors = expenses.map((val) =>
        val > 500 ? "rgb(117, 181, 191)" : "rgb(234, 118, 93)",
    );
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const translatedDays = days.map(day => t(`weekdays.${day.toLowerCase()}`));

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
        labels: translatedDays,
        datasets: [
            {
                label: 'Gastos',
                data: expenses,
                backgroundColor: backgroundColors,
                borderRadius: '8'
            }
        ]
    };


    // - Servir el balance de gastos
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const totalExpenses = expenses.reduce((acc, currentValue) => acc + currentValue, 0);
        setTotal(totalExpenses);
    }, [expenses]);


    // - El gasto de hoy
    const todayIndex = new Date().getDay() - 1;
    const todayExpense = expenses[todayIndex >= 0 ? todayIndex : 6];

    // - El % de variación entre ayer y hoy 
    const yesterdayIndex = todayIndex > 0 ? todayIndex - 1 : 6;
    const yesterdayExpense = expenses[yesterdayIndex];
    const variationPercentage = (((todayExpense - yesterdayExpense) / yesterdayExpense) * 100).toFixed(2);



    return (
        <appLogicContext.Provider value={{ myData, myOptions, total, todayExpense, variationPercentage }}>
            {children}
        </appLogicContext.Provider>
    )
}

export default LogicContext;
