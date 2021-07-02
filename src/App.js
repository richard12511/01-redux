import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <Fragment>
      {isAuthenticated && <Header logout={logoutHandler} />}
      {isAuthenticated && <UserProfile />}
      {!isAuthenticated && <Auth login={loginHandler} />}
      <Counter />
    </Fragment>
  );
}

export default App;
