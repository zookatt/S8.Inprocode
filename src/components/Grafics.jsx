import React from 'react'
import BarChart from "./chart/BarChart.jsx"

const Grafics = () => {

    return (
        <div>
            <section className="text-start">
                <h1 className='text-2xl font-bold ms-3 mb-5' >Gastos - Ultima semana</h1>
                <BarChart />
            </section>
        </div>
    )
}

export default Grafics
