import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/styles';
import { Header } from './components/Header';
import { Router } from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <div className="wrapper">
          <Header />
        </div>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
