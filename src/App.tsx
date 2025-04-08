import { GlobalStyle } from './styles/styles';
import { Header } from './components/Header';
import { Banner } from './components/Banner';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <Header />
      </div>
      <Banner />
    </>
  );
}

export default App;
