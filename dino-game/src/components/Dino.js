import React,{useEffect,useState,useRef} from "react";
import "./Dino.css";

const Dino = () => {
    const dinoRef = useRef();
    const cactusRef = useRef();
    const [score,setScore] = useState(0);
    const [cactusPassed,setCactusPassed] = useState(false);

    const jump = () => {
        if(!!dinoRef.current && dinoRef.current.classList.contains("jump"))
        {
            dinoRef.current.classList.add("jump");
            setTimeout(() => dinoRef.current.classList.remove("jump"),300);
        }
    }

    useEffect(() => {
        const isAlive = setInterval(() => {
            let dinoTop = parseInt(getComputedStyle(dinoRef.current).getPropertyValue("top"));
            let cactusLeft = parseInt(getComputedStyle(cactusRef.current).getPropertyValue("left"));
            let dinoLeft = parseInt(getComputedStyle(dinoRef.current).getPropertyValue("left"));
            let cactusRight = parseInt(getComputedStyle(cactusRef.current).getPropertyValue("right"));
            if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
                alert("Game Over! Your score: " + score);
                setScore(0);
            }
            if(cactusRight < dinoLeft && !cactusPassed)
            {
                setScore(prev => prev + 1);
                setCactusPassed(true);
            }
            if(cactusLeft > window.innerWidth)
            {
                setCactusPassed(false);
            }
           
        }, 10);
        return () => clearInterval(isAlive);
    },[]);

    useEffect(() => { 
        document.addEventListener("keydown",jump);
        return () => document.removeEventListener("keydown",jump);
    }, []);

    return (<div className="game">
        Score: {score}
        <div id="dino" ref={dinoRef}></div>
        <div id="cactus" ref={cactusRef}></div>
    </div>);
}

export default Dino;