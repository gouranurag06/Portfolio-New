import React from 'react'
import Card from './Card';
import exam from "./images/exam.png";
import mar from "./images/mar.jpg";
import heritage from "./images/heritage.jpg";
import restaurant from"./images/ivan-stern-LOLSb7m6XkU-unsplash.jpg"
import chess from"./images/chess.jpg"
import snake from "./images/snake.jpg"
import wise_way from"./images/wise_way.jpg"
import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [
        {
          imageUrl: exam,
          altText: 'Exam management system',
          title: 'Exam Management System',
          description: 'The Online Examination System is a web-based application developed using Java, Spring Boot, Spring Security, Spring Data JPA, Hibernate, Thymeleaf, and the H2 Database. It provides a secure platform for conducting online examinations with separate functionalities for administrators and students..',
          explore:"https://github.com/gouranurag06/online-exam-system-master"
        },
        {
          imageUrl:heritage,
          altText: 'Heritage & culture',
          title: 'Heritage & Culture',
          description: '"The Heritage and Culture Website is a responsive web application designed to showcase the rich cultural heritage, historical monuments, traditions, festivals, art, and architecture of different regions. The platform provides users with an engaging and informative experience through visually appealing content and an intuitive interfac"',
          explore:"https://github.com/gouranurag06/Heritage-and-culture-recommendational-system"

        },
        {
          imageUrl: mar,
          altText: 'Marvel-website',
          title: 'Marvel-website',
          description: "The Marvel Website is a responsive web application designed for Marvel fans to explore their favorite superheroes, villains, movies, and comic characters in an engaging and interactive way. The website provides detailed information about Marvel characters, including their biographies, powers, teams, and appearances, through a clean and visually appealing user interface.",
          explore:"https://github.com/gouranurag06/marvel_website"
        }
      ];

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
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='heading1 down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
          explore={card.explore}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
