/* 
This project is a simple password generator that generates a password based on the user's input. The user can choose the length of the password, whether to include numbers, and whether to include symbols. The password is generated using the Math.random() function and the charset of characters that the user chooses.
The main focus of this project is to learn about the useState, useEffect, and useCallback hooks in React. The useState hook is used to manage the state of the password, length, numbers, and symbols. The useEffect hook is used to generate the password when the component is mounted and when the length, numbers, and symbols change. The useCallback hook is used to prevent the function from being re-created every time the component re-renders. This is useful when the function is passed as a prop to a child component.
*/

import { useCallback, useState, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(6)
  const [password,setPassword] = useState('')
  const [numbers,setNumbers] = useState(false)
  const [symbols,setSymbols] = useState(false)

  //UseRef hook
  const passwordRef = useRef(null) // make it seem better 

  const PasswordGenerator= useCallback(()=> { //useCallback is used to prevent the function from being re-created every time the component re-renders. This is useful when the function is passed as a prop to a child component.
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(numbers) charset += '0123456789'
    if(symbols) charset += '!@#$%^&*()_+'
    let password = ''
    for(let i=0;i<length;i++){
      password += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(password)
  }, [length,numbers,symbols])

const copyPasswordToClip = useCallback (() => {
  passwordRef.current?.select();
  // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
}, [password])

  useEffect(()=>{
    PasswordGenerator()
  }, [length,numbers,symbols])
  //Putting PasswordGenerator in the useEffect will make sure that the password is generated when the component is mounted and when the length, numbers, and symbols change.
  //Putting Password here traps it in an infinite loop because it will keep updating the state and re-rendering the component.

  return (
    <>
    <div className='bg-black h-screen m-0 p-0 max-w-full '>
      <h1 className='text-white text-3xl '> Password Generator</h1>

      <div>
        <input type="text" value={password} readOnly className='text-black text-2xl bg-white w-96 h-10 rounded-md ' placeholder='Password' ref={passwordRef}/>
        <button className='bg-blue-500 text-white w-20 h-10 rounded-r-md' onClick={copyPasswordToClip}>Copy</button>
      </div>
      <div>
        <div>
          <input type="range" min="6" max="20" value={length} onChange={e=>setLength(e.target.value)} className='w-96 cursor-pointer'/>
         
          <label className='text-white'>Password Length: {length}</label>
        </div>
        <div>
          <input type="checkbox" checked={numbers} onChange={e=>setNumbers(e.target.checked)}/>
          <label className='text-white'>Include Numbers</label>
          </div>
          <div>
            <input type="checkbox" checked={symbols} onChange={e=>setSymbols(e.target.checked)}/>
            <label className='text-white'>Include Symbols</label>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
