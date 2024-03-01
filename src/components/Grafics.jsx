import React from 'react'
import BarChart from "./chart/BarChart.jsx"
import { useTranslation } from 'react-i18next';

const Grafics = () => {
    const { t } = useTranslation();
    return (
        <div>
            <section className="text-start">
                <h1 className='text-2xl font-bold ms-3 mb-5' >{t('expensesTitle')}</h1>
                <BarChart />
            </section>
        </div>
    )
}

export default Grafics
