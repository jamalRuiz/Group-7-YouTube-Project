import React, {useState} from 'react'
import "./Search.css"
function Search() {

const [input, setInput] = useState('')

    const  handleSubmit = (event) =>{
        event.preventDefault()
        const {value} = event.target;
      
        setInput(value)
   console.log(input)
    }

  return (
      <form className='search'>
          <input type="text" placeholder='Search'/>
          <button onClick={handleSubmit} type='submit'>Search</button>
      </form>
  )
}

export default Search