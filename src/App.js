
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

const App = () => {

  const styleForApp = {
    minHeight: '100%',
  display: 'flex',
  flexDirection: 'column'
  }

  return (
    <div className="App" style={styleForApp}>
      <Header />
      <Body />
    <Footer />
    </div>
  );
}

export default App;
