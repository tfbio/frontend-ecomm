import { render } from '@testing-library/react';
import { Header } from '../../components/Header';
import { ReactNode } from 'react';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: ReactNode }) => children,
  };
});


describe('', () => {
  it('should render amount of different products in cart', () => {
    const { getByTestId } = render(<Header />)
  
    const cartCounter = getByTestId('cart-items')
    expect(cartCounter).toHaveTextContent('2')
  })
})