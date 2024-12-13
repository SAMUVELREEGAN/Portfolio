import  React, { useEffect, useState } from 'react'

const Skills = ({ tool, percentage,theme }) => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
  
    const observeVisibility = (entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true); 
      }
    };
  
    useEffect(() => {
      const observer = new IntersectionObserver(observeVisibility, {
        threshold: 0.5, 
      });
      const element = document.querySelector(`.skill-${tool}`);
      if (element) observer.observe(element);
  
      return () => observer.disconnect(); 
    }, [tool]);
  
    useEffect(() => {
      if (!isVisible) return;
  
      let current = 0;
      const interval = setInterval(() => {
        if (current < percentage) {
          setProgress(current);
          current++;
        } else {
          clearInterval(interval);
        }
      }, 15);
  
      return () => clearInterval(interval);
    }, [isVisible, percentage]);
  
    return (
      <div className={`skill skill-${tool}`} style={{display:"flex",flexDirection:"column",margin:"20px"}}>
         
        <div
          className="skill-circle"
          style={{
            background: `conic-gradient(
              ${theme === 'light'? "rgb(187, 17, 187)" : "orange"} ${progress * 3.6}deg,
              ${theme === 'light'? "white" : "black"} ${progress * 3.6}deg
            )`,
          }}
        >
          <span style={{color:`${theme === 'light'? "black" : "white"}` , fontSize:"30px"}}>{progress}%</span>
        </div>
        <div className="skill-title" > {tool.toUpperCase()}</div>
     
      </div>
    );
}

export default Skills