import "./HeadSection.css"
import Search from "../Search/Search";
interface Props {
    content: {
        heroText1: string;
        heroText2: string;
        heroText3: string;
        heroImage: string;
        priceTag: string;
        offer: string;
        ImgSrc: string;
        Alt: string;
    };
}
export default function HeadSection({ content }: Props) {
    return (
        <>
            <div className="heroArea">
                <div className="heroText">
                    <p className="heroText1">{content.heroText1}</p>
                    <h1 className="heroText2">{content.heroText2}</h1>
                    <p className="heroText3">{content.heroText3}</p>
                    <Search Text="Search Games..." />
                </div>
                <div className="rightImage">
                    <img className="heroImage" src={content.ImgSrc} alt={content.Alt} />
                    <span className="price">{content.priceTag}</span>
                    <span className="offer">{content.offer}</span>
                </div>
            </div>
        </>
    )
}