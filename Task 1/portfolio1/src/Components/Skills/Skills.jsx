import { useState } from 'react';
import ProgrammingLanguages from './ProgrammingLanguages';
import './Skills.css'
import JavaFrameworks from './JavaFrameworks';
import FrontendDevelopement from './FrontendDevelopment';
import BackendDevelopment from './BackendDevelopment';
import Rdbms from './Rdbms';
import DevOpsTools from './DevOpsTools';



const Skills = () => {

    const [categoryId, setCategoryId] = useState(1);
    
    const handleCategoryId = (categoryId) => {
        setCategoryId(categoryId);

        document.querySelectorAll(".active-indicator").forEach(
            button => button.classList.remove("active")
        )

        document.querySelector(`.active-indicator:nth-child(${categoryId})`).classList.add("active");
    }

    const renderComponent = () => {
        switch(categoryId){
            
            case 1: return <ProgrammingLanguages />
                    
            case 2: return <JavaFrameworks />

            case 3: return <FrontendDevelopement />

            case 4: return <BackendDevelopment />

            case 5: return <Rdbms />

            case 6: return <DevOpsTools />

                    
        }
    }



    return(
        <div id='skills'>
            
            {/* #skills-title-section */}
            <div id="skills-title">
                <hr className='hr-style' />
                <h1>Skills</h1>
            </div>

            <div id='skills-center-component-background'>
            {/* #skills-center-component */}
            <div id='skills-center-component'>

                {/* #skills-category-button */}
                <div id='skills-category-button'>
                    <button className="active-indicator " onClick={() => { handleCategoryId(1) }}>Programming Languages</button>
                    <button className="active-indicator b2" onClick={() => { handleCategoryId(2) }}>Java Frameworks</button>
                    <button className="active-indicator b3" onClick={() => { handleCategoryId(3) }}>Frontend Development</button>
                    <button className="active-indicator b4" onClick={() => { handleCategoryId(4) }}>Backend Development</button>
                    <button className="active-indicator b5" onClick={() => { handleCategoryId(5) }}>RDBMS</button>
                    <button className="active-indicator" onClick={() => { handleCategoryId(6) }}>DevOps Tools</button>
                </div>

                {/* #skills-component-change-on-category-button-press */}
                <div id='skills-component-change-on-category-button-press'>
                    { renderComponent() }
                </div>
            </div>
            </div>

        </div>
    );
}





export default Skills;