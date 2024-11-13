import "./GameCard.css"

interface Props {
    cardContent: {
        ImgSrc: string;
        Price: string;
        Genre: string;
        GameName: string;
        cartImg: string;
        Alt: string;
    };
}

export default function GameCard({ cardContent }: Props) {
    return (
        <>
            <div className="gameCard">
                <div className="imgCard">
                    <img className="gameImage" src={cardContent.ImgSrc} alt={cardContent.Alt} />
                    <span className="priceTag">{cardContent.Price}</span>
                    <div className="gameInfo">
                        <p>{cardContent.Genre}</p>
                        <div className="nameAndCart">
                            <h2>{cardContent.GameName}</h2>
                            <img src={cardContent.cartImg} alt={cardContent.Alt} className="cart" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}