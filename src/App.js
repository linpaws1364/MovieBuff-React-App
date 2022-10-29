// import logo from './logo.svg';
import './App.css';
import SearchMovies from './Components/SearchMovies';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1 className='title'>MovieBuff</h1>
        <SearchMovies/>
      </div>
    </div>
  );
}

export default App;
