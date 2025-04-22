import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/styles';
import { Header } from './components/Header';
import { Router } from './routes';
import { Footer } from './components/Footer';
import { store } from './redux/store';

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
      </BrowserRouter>
    </Provider>
  );
}

export default App;
