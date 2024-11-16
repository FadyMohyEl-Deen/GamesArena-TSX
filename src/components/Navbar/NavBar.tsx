import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import "./NavBar.css"

interface Props {
    LogoRef: string;
    websiteName: string;
    tabs: { name: string; ref: string }[];
}
export default function NavBar({ LogoRef, websiteName, tabs }: Props) {
    return (
        <>
            <nav className="navBar">
                <div className="logo">
                    <Link to={LogoRef} className="logoText">
                        <img src={LogoRef} alt="Website's logo" className="logoImage" />{websiteName}
                    </Link>
                </div>
                <ol className="navTabs">
                    {tabs.map((tab, index) => (
                        <Link key={index} className="navTab active?" to={tab.ref}>{tab.name}
                        </Link>
                    ))}
                    <li className="navList"><Button buttonName="Sign In" /></li>
                </ol>
            </nav>
        </>
    );
}
