import "./Rdbms.css";
import mysql from "../../assets/mysql.png";



const Rdbms = () => {
    return(
        <div id="rdbms-container">
            <img id="mysql" src={mysql} alt="mysql-logo" />
        </div>
    );
}



export default Rdbms;