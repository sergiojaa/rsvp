import { useState } from 'react'
import './App.css'

function App() {
  const [input ,setInput] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const inputValue = (e) =>{
    
    setInput(e.target.value)
    console.log(e.target.value)
    
  }

  const clicked = (e)=>{
    e.preventDefault()
    setSubmitted(true)
    
  }https://github.com/sergiojaa/rsvp/edit/main/App.jsx#L19C0

 console.log(submitted)
  return (
    <>
    <h1>
      rsvp
    </h1>
    <div>
      <form  >
        <input 
        onChange={inputValue}
        type="text"
         placeholder='invite someone' 
         value={input}
         />
          <button type="submit" onClick={clicked}  >submit</button>

      </form>
      <h2>attending: </h2>
     
      <h2>total: </h2>
     
      
      <h1>{submitted ? input : null}</h1>
    </div>
    
    </>
  )
}

export default App
