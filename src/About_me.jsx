import React from 'react'
import './about_me.css'
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
      once:true
     }}
      className='about_me'  id="aboutMey">
      <h2 className='heading'>About Me</h2>
    <div className="about_me_info">
     <center> <p className='about_me_left'>Hello! I'm M.  Anurag, Pre-final-year B.Tech student with a strong focus on Java Backend Development and experience building web applications using Java technologies. Proficient in Spring Boot, Spring MVC, Hibernate, JSP, and Servlets, with hands-on experience in developing backend services and database integration. Familiar with MySQL, PostgreSQL, Redis, Git, GitHub, Maven, Gradle, and Postman. Passionate about learning scalable backend systems and software engineering best practices.</p>  </center>
        <div className="about_me_right"></div>
    </div>

    </motion.div>
    
  )
}

export default AboutMe
