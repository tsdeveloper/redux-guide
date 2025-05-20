// Styles
import { useSelector } from 'react-redux';
import * as Styles from './styles';
import CartItem from '../cart-item';

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { cartItems } = useSelector((rootReducer) => rootReducer.cartReducer);
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
