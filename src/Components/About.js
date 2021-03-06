import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about">
      <section className="zane">
        <img src="../Zane_Ahmed.jpeg" alt="zane" />
        <p>
          Hello! My name is Zane and I use she/they pronouns! I am an aspiring
          software engineer and Pursuit Fellow. I have a passion for coding and
          inclusivity in tech spaces for woman of color like myself.
        </p>
        <a href="https://github.com/zaneahmed1"> Visit my Github! </a>
        <br></br>
        <a href="https://www.linkedin.com/in/zaneahmed"> Visit my LinkedIn! </a>
      </section>

      <section className="jamal">
        <img src="../Jamal_Ruiz.jpeg" alt="jamal" />
        <p>
          Hello! my name is Jamal Ruiz. I am an undergraduate of CUNY Lehman College and have obtain my
          bachelor's degree in Political Science. In my college career, I have
          been establishing myself into the world of professionalism through
          many career accelerating programs and have developed a drive to
          accomplish much more.{" "}
        </p>
        <a href="https://github.com/jamalRuiz"> Visit my Github!</a>
        <br></br>
        <a href="https://www.linkedin.com/in/jamal-ruiz-473a641a6">
          Visit my LinkedIn!
        </a>
      </section>

      <section className="kenyetta">
        <img src="../Kenyetta_Griffin.jpg" alt="kenyetta" />
        <p>
          My name is Kenyetta Griffin and I am a Program Manager with 15+ years
          experience in social services. Currently pursuing certification as a
          Full Stack Web Developer. Spunky, charasmatic, and upbeat problem
          solver who collects crystals. Good Vibes and No Compiler errors is a
          Good day to me. My pride and joy is my son Tristan, who goes to Clara
          Barton H.S{" "}
        </p>
        <a href="https://github.com/PursuitMadeMe"> Visit my Github!</a>
        <br></br>
        <a href="https://www.linkedin.com/in/kenyetta-griffin-968471166/">
          {" "}
          Visit my LinkedIn!
        </a>
      </section>

      <section className="khaleed">
        <img src="../Khaleed Uddin img.png" alt="khaleed" />
        <p>
          My name is Khaleed Uddin. I just graduated with a business degree from
          City College of New York and I am looking to expand my skills,
          especially in tech world. My ho"bbies include sleeping, working out,
          watching shows, and hanging with friends.
        </p>
        <a href="https://github.com/Khaleed-Uddin"> Visit my Github! </a>
        <br></br>
        <a href="https://www.linkedin.com/in/khaleed-uddin/">
          {" "}
          Visit my LinkedIn!{" "}
        </a>
      </section>
    </div>
  );
}

export default About;
