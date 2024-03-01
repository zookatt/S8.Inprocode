import { describe, test, expect } from 'vitest';
import { render } from "@testing-library/react";
import Translate from './Translate';


describe('Translate', () => {

    test('renders language icons with correct src', () => {
        const { getAllByAltText } = render(<Translate />);

        const englishIcon = getAllByAltText('English');
        const spanishIcon = getAllByAltText('Spanish');
        const catalanIcon = getAllByAltText('Catalan');

        expect(englishIcon.length).toBe(1);
        expect(spanishIcon.length).toBe(1);
        expect(catalanIcon.length).toBe(1);
    });

});

