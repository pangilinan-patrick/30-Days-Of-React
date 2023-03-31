import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Patrick";
  const details = (
    //title, gender, email, phone number
    <ul>
      <li>Country: 🇵🇭</li>
      <li>Occupation: 👨‍🎓</li>
      <li>Email: ️✉️‍</li>
      <li>Phone Number: #️️‍</li>
    </ul>
  );
  const footer = (
    <footer>
      <div className="footer-wrapper">
        <p>Copyright 2023 Patrick Pangilinan</p>
      </div>
    </footer>
  );
  const style = { color: "lightblue" };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 style={style}>30 Days of React Challenge</h2>
        <h1>{name}</h1>
        <>{details}</>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {footer}
    </div>
  );
}

export default App;
