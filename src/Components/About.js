import React from 'react'
import "./About.css"
function About() {
  return (
    <div className='about'>

      <section className='zane'>
        <img alt='zane'/>
        <p>Description goes here</p>
        <a href="github.com"> add your github url </a>
        <br></br>
        <a href="linkedin.com"> add your linked in url</a>
      </section>

      <section className='jamal'>
        <img alt='jamal'/>
        <p>Description goes here</p>
        <a href="github.com"> add your github url </a>
        <br></br>
        <a href="linkedin.com"> add your linked in url</a>
      </section>

      <section className='kenyetta'>
        <img alt='kenyetta' />
        <p>Description goes here</p>
        <a href="github.com"> add your github url</a>
        <br></br>
        <a href="linkedin.com"> add your linked in url</a>
      </section>

      <section className='khaleed'>
        <img src="../Khaleed Uddin img.png" alt='khaleed' />
        <p>My name is Khaleed Uddin. I just graduated with a business degree from City College of New York and I am looking to expand my skills, especially in tech world. My hobbies include sleeping, working out, watching shows, and hanging with friends.</p>
        <a href="https://github.com/Khaleed-Uddin"> Visit my Github! </a>
        <br></br>
        <a href="https://www.linkedin.com/in/khaleed-uddin/"> Visit my LinkedIn! </a>
      </section>

    </div>
  )
}

export default About