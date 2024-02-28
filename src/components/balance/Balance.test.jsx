import { describe, test, expect, beforeAll } from 'vitest';
import { render, screen } from "@testing-library/react";
import { appLogicContext } from '../../context/ContextProvider';
import Balance from "./Balance";

describe('Balance', () => {
  beforeAll(() => {
    // contexto simulado
    const total = 100;
    const contextValue = { total };


    render(
      <appLogicContext.Provider value={contextValue}>
        <Balance />
      </appLogicContext.Provider>
    );
  })

  test('should show Balance component', () => {
    expect(screen.getByText('Balance total')).toBeDefined();
  });

  test('should display total expenses', () => {
    const total = 100;
    expect(screen.getByText(`${total} €`)).toBeDefined();
  });

  test('should not be negative', () => {
    const total = 100;
    expect(parseInt(screen.getByText(`${total} €`).textContent)).toBeGreaterThanOrEqual(0);
  });


  test('should be a number', () => {
    const total = 100;
    expect(parseInt(screen.getByText(`${total} €`).textContent)).not.toBeNaN();
  });
});
