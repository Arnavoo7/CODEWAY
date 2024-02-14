import "./JavaFrameworks.css";
import spring from "../../assets/spring.png";
import springboot from "../../assets/springboot.png";
import hibernate from "../../assets/hibernate.png"



const JavaFrameworks = () => {

    return(
        <div id="spring-container">
            <img id="spring" src={spring} alt="spring-logo" />
            <img id="springboot" src={springboot} alt="springboot-logo" />
            <img id="hibernate" src={hibernate} alt="hibernate-logo" />
        </div>
    );

}



export default JavaFrameworks;