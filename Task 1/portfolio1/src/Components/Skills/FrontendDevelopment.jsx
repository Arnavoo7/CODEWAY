import "./FrontendDevelopment.css";
import react1 from "../../assets/react1.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png"

const FrontendDevelopement = () => {
    return(
        <div id="react-container">
            <img id="html" src={html} alt="html-logo"  />
            <img id="css" src={css} alt="css-logo"  />
            <img id="js" src={js} alt="js-logo"  />
            <img id="react" src={react1} alt="react-logo"  />


        </div>
    );
}


export default FrontendDevelopement;