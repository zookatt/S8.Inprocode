import { describe, test, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import BarChart from './BarChart'

describe('BarChart', () => {
    test("show data of chart bar", () => {
        render(
            <BarChart data-testid="bar-chart" />
        );
        expect(screen.getByTestId('bar-chart')).toBeDefined();
    });


});