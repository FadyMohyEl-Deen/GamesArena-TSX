import "./SectionHeader.css"
import Button from "../Buttons/Button";
interface Props {
    sectionContent: {
        SectionFirstTitle: string;
        SectionSecondTitle: string;
    }
}

export default function SectionHeader({ sectionContent }: Props) {
    return (
        <>
            <div className="upperText" >
                <p>{sectionContent.SectionFirstTitle}</p>
                <div className="titleAndButton">
                    <h2>{sectionContent.SectionSecondTitle}</h2>
                    <Button buttonName="VIEW ALL" />
                </div>
                <hr className="line" />
            </div>
        </>
    )
}

export function CategoriesSectionHeader({ sectionContent }: Props) {
    return (
        <>
            <div className="upperText2" >
                <p>{sectionContent.SectionFirstTitle}</p>
                <h2>{sectionContent.SectionSecondTitle}</h2>
            </div>
            <hr className="line2" />
        </>
    )
}

