import Votes from './modules/Votes/Votes';
import './index.css';
import MainMenu from 'modules/MainMenu/MainMenu';
import mainMenu from "./data/mainMenu.json";

function App() {
  return (
    <div>
      <MainMenu items={mainMenu} />
      <Votes />
    </div>
  );
};

export default App;
