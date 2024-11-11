import "./HeadSection.css"
export default function HeadSection() {
    return (
        <>
            <div className="heroArea">
                <div className="heroText">
                    <p className="heroText1">WELCOME TO GAMESARENA</p>
                    <h1 className="heroText2">BEST GAMING SITE EVER!</h1>
                    <p className="heroText3">Welcome to GamesArena, your ultimate destination for all things gaming! Explore a vast collection of the latest games, and reviews across multiple genres. Whether you're a casual gamer or a competitive pro, GamesArena is where the gaming community comes together to level up!</p>

                    <form className="searchBar">
                        <input className="searchArea" type="text" placeholder="Search Games..."/>
                        <button className="searchButton" type="button">Search Now</button>
                    </form>
                </div>
                <div className="rightImage">
                    <img className="heroImage" src="../images/banner-image.jpg" alt="Website's hero image, containing an image of Assassians Creed game."/>
                    <span className="price">$22</span>
                    <span className="offer">-40%</span>
                </div>
            </div>
        </>
    )
}