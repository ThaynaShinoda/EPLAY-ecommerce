import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/styles';
import { Header } from './components/Header';
import { Router } from './routes';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="wrapper">
        <Header />
      </div>
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
