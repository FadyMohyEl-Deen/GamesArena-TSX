import "./SectionHeader.css"
interface Content {
    sectionContent: {
        SectionFirstTitle: string;
        SectionSecondTitle: string;
    }
}

export default function SectionHeader({ sectionContent }: Content) {
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