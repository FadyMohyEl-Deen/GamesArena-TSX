    import HeadSection from "../components/HeadSection/HeadSection";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import GameCard, { GameCard2, GameCard3 } from "../components/GameCard/GameCard";
import ThreeImagesCards from "../components/ThreeImagesCards/ThreeImagesCards";
import { CategoriesSectionHeader } from "../components/SectionHeader/SectionHeader";

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
                            ImgSrc: "/",
                            Price: "$Price",
                            Genre: "Genre",
                            GameName: "Game Name",
                            cartImg: "../images/cart.png",
                            Alt: "Add To Cart"
                        }}
                    />
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
                    <GameCard2
                        cardContent={{
                            ImgSrc: "../images/top-game-01.jpg",
                            Price: "$Price",
                            Genre: "Genre",
                            GameName: "Game Name",
                            cartImg: "../images/cart.png",
                            Alt: "Add To Cart"
                        }}
                    />
                </div>
            </section>

            <section className="gamesSection">
                <CategoriesSectionHeader
                    sectionContent={{
                        SectionFirstTitle: "CATEGORIES",
                        SectionSecondTitle: "Top Categories"
                    }}
                />
                <div className="cardsList">
                    <GameCard3
                        cardContent={{
                            ImgSrc: "../images/top-game-01.jpg",
                            Price: "$Price",
                            Genre: "Genre",
                            GameName: "Game Name",
                            cartImg: "../images/cart.png",
                            Alt: "Add To Cart",
                            newGameCard: "newGameCard"
                        }}
                    />
                </div>
            </section>
            <section>
                <ThreeImagesCards
                    LeftSection={{
                        P1: "OUR SHOP",
                        P2_1: "Go Pre-Order Buy & Get Best",
                        P2_2: "For You!",
                        P3: "Secure your game at the best price before it's released! Don't miss out on exclusive pre-order bonuses and discounts!",
                        Span: "Prices",
                        ButtonName: "SHOP NOW"
                    }}
                    MidImage={{
                        ImgSrc: "/images/cta-bg.jpg",
                        ImgAlt: "An image of a video game."
                    }}
                    RightSection={{
                        P1: "NEWSLETTER",
                        P2_1: "Get Up To $100 Off Just Buy",
                        P2_2: "Newsletter!",
                        P3: "Unlock up to $100 in savings - just subscribe to our newsletter! Stay updated with the latest deals, news, and exclusive gaming offers.",
                        Span: "Subscribe",
                        PlaceHolder: "Your Email...",
                        ButtonName: "SUBSCRIBE NOW"
                    }} />
            </section>
        </>
    )
}