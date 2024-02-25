import React from 'react'

const ExpensesToday = () => {
    return (
        <div className='flex justify-between me-3'>
            <div>
                <p className="text-start text-sm text-LineGray ms-3">Gastos hoy</p>
                <p className="text-start text-2xl font-bold ms-3">557.46 €</p>
            </div>
            <div>
                <p className="text-end text-sm font-bold ms-3">+2.4%</p>
                <p className="text-end text-sm ms-3 font-bold">respecto ayer</p>
            </div>
        </div>
    )
}

export default ExpensesToday
