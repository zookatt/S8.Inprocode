import React from 'react'
import Grafics from '../Grafics'
import ExpensesToday from '../expenses-today/ExpensesToday'
const Expenses = () => {
    return (
        <div className='py-3 px-4' style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            <Grafics />
            <ExpensesToday />
        </div>
    )
}

export default Expenses
