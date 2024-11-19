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
                <>
                </>
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
            return response.json()
        })
        .then((data) => {
            const games = data;

            function addGames() {
                const gameContainer = document.querySelector(".gameCard");
                if (!gameContainer) return;
                for (let i = 0; i <= 3; i++) {

                    const gameCard = document.createElement('div');
                    gameCard.classList.add('gameCard');
                    const imageCard = document.createElement('div');
                    imageCard.classList.add('imgCard');
                    const gameImage = document.createElement('img');
                    gameImage.id = ('gameImage');
                    const gameInfo = document.createElement('div');
                    gameInfo.classList.add('gameInfo');
                    const gameGenre = document.createElement('p');
                    gameGenre.id = ('gameGenre');
                    const nameAndCart = document.createElement('div');
                    nameAndCart.classList.add('nameAndCart');
                    const gameName = document.createElement('h2');
                    gameName.id = ('gameName');
                    gameImage.src = games[i].thumbnail;
                    gameName.textContent = games[i].title;
                    gameGenre.textContent = games[i].genre;

                    nameAndCart.appendChild(gameName);
                    gameInfo.appendChild(gameGenre);
                    gameInfo.appendChild(nameAndCart);
                    imageCard.appendChild(gameImage);
                    imageCard.appendChild(gameInfo);
                    gameCard.appendChild(imageCard);

                    gameContainer?.appendChild(gameCard);
                }


            }
            addGames();
        })
        .catch(error => console.error('Error fetching game data:', error));
}
fetchData();

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
