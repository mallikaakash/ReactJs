import { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(0);
  const [numbers, setNumbers] = useState(false); // false = no numbers  
  const [char,setChar] = useState(false); // false = no special characters
  const [password, setPassword] = useState('');
  const passwordGenerator = useCallback(()=>{
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers){
      str += "0123456789";
    }
    if(char){
      str += "!@#$%^&*()_+";
    }
  },[length, numbers, char,setPassword]);

  return (
    <>
      <h1>Password generator</h1>
    </>
  )
}

export default App
