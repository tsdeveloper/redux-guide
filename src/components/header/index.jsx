import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Components
import Cart from '../cart/index';

// Styles
import * as Styles from './styles';
import { loginUser, logoutUser } from '../../redux/user/actions';
import { selectProductsCount } from '../../redux/cart/cart.selector';

// Utilities

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();

  const productsCount = useSelector(selectProductsCount);
  console.log(productsCount);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(
      loginUser({
        id: 10,
        name: 'Web Developer',
        email: 'developer@email.com',
      }),
    );
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
