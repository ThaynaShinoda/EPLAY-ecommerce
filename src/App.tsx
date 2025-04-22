import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/styles';
import { Header } from './components/Header';
import { Router } from './routes';
import { Footer } from './components/Footer';
import { store } from './redux/store';
import { Cart } from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <div className="wrapper">
          <Header />
        </div>
        <Router />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
