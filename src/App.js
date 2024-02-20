import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/RegistrationForm';


function App() {
  return (
    <div className="">
      <img
        src="https://cdn.freebiesupply.com/images/large/2x/apple-logo-transparent.png"
        className="max-w-md mx-auto logo"
        alt="logo"
      />

      <RegistrationForm />
    </div>
  );
}

export default App;
