import React from 'react'
import { useContext } from 'react';
import { appLogicContext } from '../../context/ContextProvider';
import { useTranslation } from 'react-i18next';

const ExpensesToday = () => {

    const { todayExpense, variationPercentage } = useContext(appLogicContext);
    const { t } = useTranslation();
    return (
        <div className='flex justify-between me-3'>
            <div>
                <p className="text-start text-sm text-LineGray ms-3">{t('todayExpensesTitle')}</p>
                <p className="text-start text-2xl font-bold ms-3">{todayExpense} €</p>
            </div>
            <div>
                <p className="text-end text-sm font-bold ms-3">{variationPercentage} %</p>
                <p className="text-end text-sm ms-3 font-bold">{t('percentageTitle')}</p>
            </div>
        </div>
    )
}

export default ExpensesToday
