import HeadSection from "../components/HeadSection/HeadSection";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import GameCard from "../components/GameCard/GameCard";

export default function Home() {
    return (
        <>
            <section className="headSection">
                <HeadSection
                    content={{
                        heroText1: "WELCOME TO GAMESARENA",
                        heroText2: "BEST GAMING SITE EVER!",
                        heroText3: "Welcome to GamesArena, your ultimate destination for all things gaming! Explore a vast collection of the latest games, and reviews across multiple genres. Whether you're a casual gamer or a competitive pro, GamesArena is where the gaming community comes together to level up!",
                        heroImage: "../images/banner-bg.jpg",
                        priceTag: "$22",
                        offer: "-40%",
                        ImgSrc: "../images/banner-image.jpg",
                        Alt: "an image of a video game"
                    }}
                />
            </section>

            <section className="gamesSection">
                <SectionHeader
                    sectionContent={{
                        SectionFirstTitle: "TRENDING",
                        SectionSecondTitle: "Trending Games"
                    }
                    }
                />
                <div className="cardsList">
                    <GameCard
                        cardContent={{
                            ImgSrc: "../images/top-game-01.jpg",
                            Price: "$Price",
                            Genre: "Genre",
                            GameName: "Game Name",
                            cartImg: "../images/cart.png",
                            Alt: "Add To Cart"
                        }}
                    />
                    <GameCard
                        cardContent={{
                            ImgSrc: "../images/top-game-02.jpg",
                            Price: "$Price",
                            Genre: "Genre",
                            GameName: "Game Name",
                            cartImg: "../images/cart.png",
                            Alt: "Add To Cart"
                        }} />
                    <GameCard
                        cardContent={{
                            ImgSrc: "../images/top-game-03.jpg",
                            Price: "$Price",
                            Genre: "Genre",
                            GameName: "Game Name",
                            cartImg: "../images/cart.png",
                            Alt: "Add To Cart"
                        }} />
                    <GameCard
                        cardContent={{
                            ImgSrc: "../images/top-game-04.jpg",
                            Price: "$Price",
                            Genre: "Genre",
                            GameName: "Game Name",
                            cartImg: "../images/cart.png",
                            Alt: "Add To Cart"
                        }} />
                </div>
            </section>

            <section className="gamesSection">
                <SectionHeader
                    sectionContent={{
                        SectionFirstTitle: "TOP GAMES",
                        SectionSecondTitle: "Most Played"
                    }}
                />
                <div className="cardsList">
                    <GameCard
                        cardContent={{
                            ImgSrc: "../images/top-game-01.jpg",
                            Price: "$Price",
                            Genre: "Genre",
                            GameName: "Game Name",
                            cartImg: "../images/cart.png",
                            Alt: "Add To Cart"
                        }}
                    />
                    <GameCard
                        cardContent={{
                            ImgSrc: "../images/top-game-02.jpg",
                            Price: "$Price",
                            Genre: "Genre",
                            GameName: "Game Name",
                            cartImg: "../images/cart.png",
                            Alt: "Add To Cart"
                        }} />
                    <GameCard
                        cardContent={{
                            ImgSrc: "../images/top-game-03.jpg",
                            Price: "$Price",
                            Genre: "Genre",
                            GameName: "Game Name",
                            cartImg: "../images/cart.png",
                            Alt: "Add To Cart"
                        }} />
                    <GameCard
                        cardContent={{
                            ImgSrc: "../images/top-game-04.jpg",
                            Price: "$Price",
                            Genre: "Genre",
                            GameName: "Game Name",
                            cartImg: "../images/cart.png",
                            Alt: "Add To Cart"
                        }} />
                </div>
            </section>

            <section className="gamesSection">
                <SectionHeader
                    sectionContent={{
                        SectionFirstTitle: "CATEGORIES",
                        SectionSecondTitle: "Top Categories"
                    }}
                />
                <div className="cardsList">
                    <GameCard
                        cardContent={{
                            ImgSrc: "../images/top-game-01.jpg",
                            Price: "$Price",
                            Genre: "Genre",
                            GameName: "Game Name",
                            cartImg: "../images/cart.png",
                            Alt: "Add To Cart"
                        }}
                    />
                    <GameCard
                        cardContent={{
                            ImgSrc: "../images/top-game-02.jpg",
                            Price: "$Price",
                            Genre: "Genre",
                            GameName: "Game Name",
                            cartImg: "../images/cart.png",
                            Alt: "Add To Cart"
                        }} />
                    <GameCard
                        cardContent={{
                            ImgSrc: "../images/top-game-03.jpg",
                            Price: "$Price",
                            Genre: "Genre",
                            GameName: "Game Name",
                            cartImg: "../images/cart.png",
                            Alt: "Add To Cart"
                        }} />
                    <GameCard
                        cardContent={{
                            ImgSrc: "../images/top-game-04.jpg",
                            Price: "$Price",
                            Genre: "Genre",
                            GameName: "Game Name",
                            cartImg: "../images/cart.png",
                            Alt: "Add To Cart"
                        }} />
                </div>
            </section>
        </>
    )
}