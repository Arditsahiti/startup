import logo from "./logo.svg";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import LogInForm from "./components/LogInForm";

function App() {
  return (
    <div className="">
      <img
        src="https://cdn.freebiesupply.com/images/large/2x/apple-logo-transparent.png"
        className="max-w-md mx-auto logo"
        alt="logo"
      />
      {/* <LogInForm />  */}
        <RegistrationForm />
 </div> 
  );
}

export default App;
