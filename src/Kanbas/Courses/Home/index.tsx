import ModuleList from "../Modules/List";
import Status from "./Status";
import "./index.css";

function Home() {
    return (
        <div className="homeContainer">
            <div className="moduleList">
                <ModuleList />
            </div>
            <div className="status">
                <Status />
            </div>
        </div>
    );
}
export default Home;