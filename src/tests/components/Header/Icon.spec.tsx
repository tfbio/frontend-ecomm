import { render } from '@testing-library/react'
import { CartIcon, LoginIcon } from '../../../components/Header/Icons'

jest.mock('../../../hooks/useCart', () => {
  return {
    useCart: () => ({
      cart: [
        {
          id: 1,
          name: 'produto teste',
          unformattedPrice: 58.9,
          imageUrl: 'url de imagem',
          amount: 2 
        },
        {
          id: 2,
          name: 'produto teste 2',
          unformattedPrice: 58.9,
          imageUrl: 'url de imagem',
          amount: 3 
        }
      ]
    })
  }
})

describe('Icon Component', () => {
  it('should render the total amount of unique items in cart', () => {
    const { getByTestId } = render(<CartIcon />)

    const itemsInCart = getByTestId('cart-items')
    console.log(itemsInCart);
    
    expect(itemsInCart).toHaveTextContent('2')
  })
})