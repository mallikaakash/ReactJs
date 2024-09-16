import { useCallback, useState, useEffect } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(6)
  const [password,setPassword] = useState('')
  const [numbers,setNumbers] = useState(false)
  const [symbols,setSymbols] = useState(false)

  const PasswordGenerator= useCallback(()=> {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(numbers) charset += '0123456789'
    if(symbols) charset += '!@#$%^&*()_+'
    let password = ''
    for(let i=0;i<length;i++){
      password += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(password)
  }, [length,numbers,symbols])

  useEffect(()=>{
    PasswordGenerator()
  }, [length,numbers,symbols,PasswordGenerator])

  return (
    <>
    <div className='bg-black h-screen m-0 p-0 max-w-full '>
      <h1 className='text-white text-3xl '> Password Generator</h1>

      <div>
        <input type="text" value={password} readOnly className='text-black text-2xl bg-white w-96 h-10 rounded-md mr-8' placeholder='Password'/>
        <button className='bg-blue-500 text-white w-20 h-10 rounded-md'>Generate</button>
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
