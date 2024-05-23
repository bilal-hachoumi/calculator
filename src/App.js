
import React, { useState } from 'react'
import './App.css';


function App() {
  const [formula, setFormula] = useState('');
  const [resulta, setResulta] = useState('')

  const handelClick = (value) => {
      setFormula(formula + value)
  }

  const calculate = () => {
      setResulta(eval(formula))
  }

  const clear = () => {
      setFormula('')
      setResulta('')
  }
  return (
      <>
       
          <div className='card'>
              <h1 className='formula'> <input type='text' value={formula}/></h1>
              <h1 className='resulta'><input type='text' value={resulta}/></h1>
              <div className='calculater'>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '/', '*'].map(item => <button className='btns' onClick={() => handelClick(item)}>{item}</button>)}
                   <button className='c' onClick={clear}>c</button><br/> 
                  <button className='eq' onClick={calculate}>=</button>
              </div>
          </div>
         

      </>
  );
}

export default App;
