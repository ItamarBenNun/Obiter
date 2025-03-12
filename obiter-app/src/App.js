import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import calender from './assets/images/calender.svg'
import calculator from './assets/images/calculator.svg'
import chat from './assets/images/chat.svg'
import check from './assets/images/check.svg'
import flashcards from './assets/images/flashcards.svg'
import progress from './assets/images/progress.svg'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Obiter</h1>
        <div className="pageButtons">
          <img src={chat}/>
          <img src={flashcards}/>
          <img src={calender}/>
          <img src={calculator}/>
          <img src={progress}/>
          <img src={check}/>
        </div>
      </header>
    </div>
  );
}

export default App;
