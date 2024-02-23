import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
    FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock,
    FaPlayCircle, FaCreativeCommonsSa, FaRegQuestionCircle
} from "react-icons/fa";
function KanbasNavigation() {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 icon-color" /> },
        { label: "Courses", icon: <FaBook className="fs-2 icon-color" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2 icon-color" /> },
        { label: "Inbox", icon: <FaInbox className="fs-2 icon-color" /> },
        { label: "History", icon: <FaRegClock className="fs-2 icon-color" /> },
        { label: "Studio", icon: <FaPlayCircle className="fs-2 icon-color" /> },
        { label: "Commons", icon: <FaCreativeCommonsSa className="fs-2 icon-color" /> },
        { label: "Help", icon: <FaRegQuestionCircle className="fs-2 icon-color" /> },
    ];
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation">
            <li>
                <a href="https://northeastern.edu">
                    <img src="./bigf.jpeg" alt="Northeastern University Logo" className="navigation-logo" />
                </a>
            </li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;