import './App.css';
import Maincontent from './components/Maincontent';
import Menu from './components/Menu';
import { CustomProvider } from './UserContext';

function App() {
  return (
    <div
      style={{
        height: '100vh',
        width: '98vw',
        margin: '0',
        padding: '0',
        background: '#ee0979',
        background: '-webkit-linear-gradient(to right, #ff6a00, #ee0979)',
        background: 'linear-gradient(to right, #ff6a00, #ee0979)',
      }}
    >
      <CustomProvider>
        <Menu></Menu>
        <Maincontent></Maincontent>
      </CustomProvider>
    </div>
  );
}

export default App;
