import React, {useState} from 'react'




function Search() {

const [input, setInput] = useState('')

    const  handleSubmit = (event) =>{
        event.preventDefault()
        const {value} = event.target;
      
        setInput(value)
   console.log(input)
    }

  return (
      <form >

          <input type="text" placeholder='Search'/>
          <button onClick={handleSubmit} type='submit'>Search</button>
      </form>
  )
}

export default Search