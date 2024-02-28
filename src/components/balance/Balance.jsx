import React from 'react'
import { useContext } from 'react';
import { appLogicContext } from '../../context/ContextProvider';

const Balance = () => {
    const { total } = useContext(appLogicContext);

    return (
        <div className='flex items-center justify-start h-full py-3 px-4'>
            <div className='text-start'>
                <h1 className="text-sm text-start ms-3">Balance total</h1>
                <p className="text-2xl font-bold text-start ms-3">{total} €</p>
            </div>
        </div>
    );
}

export default Balance


