import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/RegistrationForm';


function App() {
  return (
    <div className="App">
      <div className="App-header mb-4">
        <img src={logo} className="App-logo" alt="logo" />

        <h1 className="text">Welcome to the Registration Form</h1>
        
        <h1 className="text">Please fill in the form below to register</h1>

        <RegistrationForm />

      
      </div>
    </div>
  );
}

export default App;
