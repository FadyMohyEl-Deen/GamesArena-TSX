import "./ThreeImagesCards.css"
import Button from "../Buttons/Button";
import Search from "../Search/Search";

interface Props {
    LeftSection: {
        P1: string;
        P2_1: string;
        P2_2: string;
        P3: string;
        Span: string;
        ButtonName: string;
    }
    MidImage: {
        ImgSrc: string;
        ImgAlt: string;
    }
    RightSection: {
        P1: string;
        P2_1: string;
        P2_2: string;
        P3: string;
        Span: string;
        PlaceHolder: string;
        ButtonName: string;
    }
}
const ThreeImagesCards = ({ LeftSection, MidImage, RightSection }: Props) => {
    return (
        <>
            <div className="bottomArea">

                <div className="leftSection">
                    <p className="p1">{LeftSection.P1}</p>
                    <p className="p2">{LeftSection.P2_1}<span className="span">{LeftSection.Span}</span>{LeftSection.P2_2}</p>
                    <p className="p3">{LeftSection.P3}</p>
                    <Button buttonName={LeftSection.ButtonName} buttonNewStyle="subscribeButton" />
                </div>

                <img className="midImage" src={MidImage.ImgSrc} alt={MidImage.ImgAlt} />

                <div className="rightSection">
                    <p className="p1">{RightSection.P1}</p>
                    <p className="p2">{RightSection.P2_1}<span className="span">{RightSection.Span}</span> {RightSection.P2_2}</p>
                    <p className="p3">{RightSection.P3}</p>
                    <div className="emailSection">
                        <Search Placeholder={RightSection.PlaceHolder} ButtonName={RightSection.ButtonName} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThreeImagesCards
