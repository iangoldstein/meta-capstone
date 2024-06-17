
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import Nav from './components/nav';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
