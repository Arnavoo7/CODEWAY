import "./BackendDevelopment.css";
import java from "../../assets/java.png"
import springboot from "../../assets/springboot.png"

const BackendDevelopment = () => {
    return(
        <div id="backend-container">
            <img id="b-java" src={java} alt="java-logo" />
            <img id="b-springboot" src={springboot} alt="springboot-logo" />
        </div>
    );
}


export default BackendDevelopment;