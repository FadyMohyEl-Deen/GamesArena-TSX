import "./SectionHeader.css"
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
                </div>
                <hr className="line" />
            </div>
        </>
    )
}