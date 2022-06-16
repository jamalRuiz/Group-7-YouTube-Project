import React, {useState} from 'react'




function Search() {

const [input, setInput] = useState('')

    const  handleSubmit = (event) =>{
        event.preventDefault()
        const {value} = event.target
        setInput(value)

    }

  return (
      <form onSubmit={handleSubmit}>

          <input type="text" placeholder='Search'/>
          <button type='submit'>Search</button>
      </form>
  )
}

export default Search