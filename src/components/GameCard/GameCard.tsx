import Button from "../Buttons/Button";
import "./GameCard.css"
import CartImage from "../../../images/cart.png"
import { useState, useEffect } from "react";

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
// { cardContent }: Props

export default function GameCard({enableCart = true}) {
    const [games, setGames] = useState([]);
    
    useEffect(() => {
       fetchData();
    },[games])

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
                setGames(data);
            })
            .catch(error => console.error('Error fetching game data:', error));
    }
    
    return (
        <>
            <div className="gameCard">
                {games.slice(0,4).map((game) => (
                    <div className="gameCard" key={game.id}>
                        <div className="imgCard">
                            <img src={game.thumbnail} className="gameImage" alt={game.title} />
                        </div>
                        <div className="gameInfo">
                            <p className="gameGenre">{game.genre}</p>
                        </div>
                        <div className="nameAndCart">
                            <h2 className="gameName">{game.title}</h2>
                            { enableCart && <img src={CartImage} className="cart" alt="Cart" />}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

// function addGames(games) {
//     const gameContainer = document.querySelector(".gameCard");
//     if (!gameContainer) return;
//     for (let i = 0; i <= 3; i++) {
//         const gameCard = document.createElement('div');
//         gameCard.classList.add('gameCard');
//         const imageCard = document.createElement('div');
//         imageCard.classList.add('imgCard');
//         const gameImage = document.createElement('img');
//         gameImage.id = ('gameImage');
//         const gameInfo = document.createElement('div');
//         gameInfo.classList.add('gameInfo');
//         const gameGenre = document.createElement('p');
//         gameGenre.id = ('gameGenre');
//         const nameAndCart = document.createElement('div');
//         nameAndCart.classList.add('nameAndCart');
//         const gameName = document.createElement('h2');
//         gameName.id = ('gameName');
//         const cart = document.createElement('img');
//         cart.classList.add('cart');

//         gameImage.src = games[i].thumbnail;
//         gameName.textContent = games[i].title;
//         gameGenre.textContent = games[i].genre;
//         cart.src = "../../../images/cart.png"

//         nameAndCart.appendChild(gameName);
//         nameAndCart.appendChild(cart);
//         gameInfo.appendChild(gameGenre);
//         gameInfo.appendChild(nameAndCart);
//         imageCard.appendChild(gameImage);
//         imageCard.appendChild(gameInfo);
//         gameCard.appendChild(imageCard);
//         gameContainer?.appendChild(gameCard);
//     }
// }

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
