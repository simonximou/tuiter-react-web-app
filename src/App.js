import logo from './logo.svg';
import './App.css';

function App() {
<<<<<<< Updated upstream
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deployed <code>src/App.js</code> React App.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/*" element={<Labs/>}/>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/tuiter/*"
                           element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
>>>>>>> Stashed changes
}

export default App;
