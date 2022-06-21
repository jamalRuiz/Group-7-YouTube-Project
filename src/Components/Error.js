import React from 'react'
import "./Error.css"
import {Link} from "react-router-dom"
function Error() {
  return (
    <section className='error'>
        <p>Error 404: Video not found</p>
        <Link to="/">Go Home</Link>
    </section>
  )
}

export default Error


