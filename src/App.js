import { useState } from 'react';
import './App.css';
import Message from './components/Message/Message';
import Input from './components/SimpleInput/SimpleInput';

function App() {
  const [firstNameValue, setFirstNameValue] = useState('');
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [lastNameValue, setLastNameValue] = useState('');
  const [isLastNameValid, setIsLastNameValid] = useState(false);
  
  const submitForm = (event) => {
    event.preventDefault();
    firstNameValue.trim() === '' ? setIsFirstNameValid(true) : setIsFirstNameValid(false);
    lastNameValue.trim() === '' ? setIsLastNameValid(true) : setIsLastNameValid(false);
    const user = {
      firstName: firstNameValue,
      lastName: lastNameValue
    }
    console.log(user);
  }

  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <Input label='First Name' id='firstName' value={firstNameValue} updateValue={setFirstNameValue}/>
        { isFirstNameValid && <Message msg='First name should not be empty'/> }
        
        <Input label='Last Name' id='lastName' value={lastNameValue} updateValue={setLastNameValue}/>
        { isLastNameValid && <Message msg='Last name should not be empty'/> }
        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
}

export default App;
