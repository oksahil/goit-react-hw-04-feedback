// import { Fragment } from 'react';
import Votes from './modules/Votes/Votes';
// import './shared/components/Button/Button';
import './index.css';
import MainMenu from 'modules/MainMenu/MainMenu';
import mainMenu from "./data/mainMenu.json";

function App() {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <MainMenu items={mainMenu} />
      <Votes />
    </div>
  );
};

export default App;
