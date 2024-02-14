import "./DevOpsTools.css";
import git from "../../assets/git.png"
import docker from "../../assets/docker.png"


const DevOpsTools = () => {
    return(
        <div id="devops-container">
            <img id="git" src={git} alt="git-logo" />
            <img id="docker" src={docker} alt="docker-logo" />
        </div>
    );

}


export default DevOpsTools;