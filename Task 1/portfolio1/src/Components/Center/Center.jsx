import './Center.css';
import boy from '../../assets/anime-boy.png'
import rocks from '../../assets/rocks.png'
import spring from '../../assets/spring.png'
import react from '../../assets/react.png'
import java from '../../assets/java.png'
import { useRef } from 'react';

import Typed from 'typed.js';
import { useEffect } from 'react';




const Center = () => {

    const elem = useRef(null);

    useEffect(() => {
        const typed = new Typed(elem.current, {
            strings: ['Java Developer .', 'Web Developer.', 'React Developer.'],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 400,
            loop: true,
        });

        //Destroying
        return () => {
            typed.destroy();
        };
    },[]);

    return(
        <div id='center'>

            <div id="left">
                <h2 >Hi there! My Name is</h2>
                <h2 >Arnab Mahato</h2> 
                <h2 >A <span ref={elem}></span></h2>
            </div>

            <div id="right">
                <img src={boy} alt='profile-pic' />
            </div>

            <img id='react-circle' src={react} alt='react-pic' />
            <img id='java-circle' src={java} alt='java-pic' />
            <img id='spring-circle' src={spring} alt='spring-pic' />


            
            <div id='circle-1'></div>
            <div id='circle-2'></div>
            <div id='circle-3'></div>
            <div id='circle-4'></div>
            <div id='circle-5'></div>
            <div id='circle-6'></div>
            <div id='circle-7'></div>
            <div id='circle-8'></div>



            <img id="rocks-1" src={rocks}></img>
            <img id="rocks-2" src={rocks}></img>
            <img id="rocks-3" src={rocks}></img>


        </div>
    );
}



export default Center;