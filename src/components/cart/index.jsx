// Styles
import { useSelector } from 'react-redux';
import * as Styles from './styles';
import CartItem from '../cart-item';
import { selectProductsTotaPrice } from '../../redux/cart/cart.selector';

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { cartItems } = useSelector((rootReducer) => rootReducer.cartReducer);
  const productsTotalPrice = useSelector(selectProductsTotaPrice);
  console.log('Total Price:', productsTotalPrice);
  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        <Styles.CartTotal>
          Total:
          {productsTotalPrice
            ? productsTotalPrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })
            : 'R$ 0,00'}
        </Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
