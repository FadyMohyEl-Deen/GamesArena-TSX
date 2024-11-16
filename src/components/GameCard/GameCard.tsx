import Button from "../Buttons/Button";
import "./GameCard.css"

interface Props {
    cardContent: {
        ImgSrc: string;
        Price?: string;
        Genre?: string;
        GameName?: string;
        cartImg?: string;
        Alt: string;
        newGameCard?: string;
    };
}

export default function GameCard({ cardContent }: Props) {
    return (
        <>
            <div className="gameCard">
                <div className={`imgCard ${cardContent.newGameCard}`}>
                    <img id="gameImage" src={cardContent.ImgSrc} alt={cardContent.Alt} />
                    {/* <span className="priceTag">{cardContent.Price}</span> */}
                    <div className="gameInfo">
                        <p id="gameGenre">{cardContent.Genre}</p>
                        <div className="nameAndCart">
                            <h2 id="gameName">{cardContent.GameName}</h2>
                            <img src={cardContent.cartImg} alt={cardContent.Alt} className="cart" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export function GameCard2({ cardContent }: Props) {
    return (
        <>
            <div className="gameCard2">
                <div className={`imgCard2 ${cardContent.newGameCard}`}>
                    <img id="gameImage2" src={cardContent.ImgSrc} alt={cardContent.Alt} />
                    <div className="gameInfo2">
                        <p>{cardContent.Genre}</p>
                        <h2>{cardContent.GameName}</h2>
                        <Button buttonName="EXPLORE" />
                    </div>
                </div>
            </div>
        </>
    )
}


export function GameCard3({ cardContent }: Props) {
    return (
        <>
            <div className="gameCard3">
                <div className={`imgCard3 ${cardContent.newGameCard}`}>
                    <a className="genreName">Genre</a>
                    <img id="gameImage3" src={cardContent.ImgSrc} alt={cardContent.Alt} />
                </div>
            </div>
        </>
    )
}

function fetchData() {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games',
        {
            headers: {
                "x-rapidapi-ua": "RapidAPI-Playground",
                "x-rapidapi-key": "0ab3065acamsh011ef3f7ced2ca5p17e960jsn9cd49c3ac72a",
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
            }
        })
        .then((response) => {
            console.log(response);

            return response.json()
        })
        .then((data) => {
            const games = data[1];
            const gameImage = document.getElementById("gameImage") as HTMLImageElement;
            const gameGenre = document.getElementById("gameGenre") as HTMLParagraphElement;
            const gameName = document.getElementById("gameName") as HTMLHeadingElement;
            gameImage!.src = games.thumbnail;
            gameGenre!.textContent = games.genre;
            gameName!.textContent = games.title;

        })
        .catch(error => console.error('Error fetching game data:', error));
}

fetchData();    