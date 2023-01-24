import { render, fireEvent } from '@testing-library/react'

describe('incQty', () => {
    it('should increment the quantity', () => {
        let qty = 0;
        const setQty = (newQty) => {
            qty = newQty;
        };
        const { getByText } = render(<button onClick={() => setQty(qty+1)}>Increment</button>);
        fireEvent.click(getByText('Increment'));
        expect(qty).toBe(1);
    });
});