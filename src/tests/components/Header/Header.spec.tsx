import { render } from '@testing-library/react'
import { Header } from '../../../components/Header'

jest.mock('../../../hooks/useCart', () => {
  return {
    useCart: () => ({
      cart: []
    })
  }
})

describe('Header Component', () => {
  it('should corrctly render "Header" component', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Login')).toBeInTheDocument()
  })
})

// getByTestId('cart-items')