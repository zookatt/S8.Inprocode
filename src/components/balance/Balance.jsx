
import React from 'react'
import { useContext } from 'react';
import { appLogicContext } from '../../context/ContextProvider';
import { useTranslation } from 'react-i18next';

const Balance = () => {
    const { total } = useContext(appLogicContext);
    const { t } = useTranslation();

    return (
        <div className='flex items-center justify-start h-full py-3 px-4'>
            <div className='text-start'>
                <h1 className="text-sm text-start ms-3">{t('balanceTitle')}</h1>
                <p className="text-2xl font-bold text-start ms-3">{total} €</p>
            </div>
        </div>
    );
}

export default Balance

