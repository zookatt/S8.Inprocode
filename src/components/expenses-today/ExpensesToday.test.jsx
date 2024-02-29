import { describe, test, expect, beforeAll } from 'vitest';
import { render, screen } from "@testing-library/react";
import { appLogicContext } from '../../context/ContextProvider';
import ExpensesToday from './ExpensesToday';

describe('ExpensesToday', () => {
    beforeAll(() => {
        // contexto simulado

        const todayExpense = 50;
        const variationPercentage = 2.5;
        const contextValue = { todayExpense, variationPercentage };

        render(
            <appLogicContext.Provider value={contextValue}  >
                <ExpensesToday />
            </appLogicContext.Provider>
        );
    })

    test('should show today expenses', () => {
        expect(screen.getByText('Gastos hoy')).toBeDefined();
    });

    test('should show variation percentage', () => {
        expect(screen.getByText('respecto ayer')).toBeDefined();
    });

    test('should display total expenses today', () => {
        const todayExpense = 50;
        expect(screen.getByText(`${todayExpense} €`)).toBeDefined();
    });

    test('should be a number', () => {
        const todayExpense = 50;
        expect(parseFloat(screen.getByText(`${todayExpense} €`).textContent)).not.toBeNaN();
    });

    test('should display total variation percentage', () => {
        const variationPercentage = 2.5;
        expect(screen.getByText(`${variationPercentage} %`)).toBeDefined();
    });

    test('should be a number', () => {
        const variationPercentage = 2.5;
        expect(parseFloat(screen.getByText(`${variationPercentage} %`).textContent)).not.toBeNaN();
    });
});