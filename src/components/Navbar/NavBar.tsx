import Button from "../Buttons/Button";
import "./NavBar.css"

interface NavBarProps {
    websiteName: string;
    tabs: {name: string; ref: string}[];
}
export default function NavBar({websiteName, tabs}: NavBarProps) {
    return (
        <>
            <nav className="navBar">
                <div className="logo">
                    <a href="" className="logoText">
                        <img src="/images/Logo.png" alt="website's logo" className="logoImage" />{websiteName}
                    </a>
                </div>
                <ol className="navTabs">
                    {tabs.map((tab, index) =>(
                        <a key={index} className="navTab" href={tab.ref}>{tab.name}
                        </a>
                    ))}
                    <li className="navList"><Button buttonName="Sign In" /></li>
                </ol>
            </nav>

        </>
    );
}