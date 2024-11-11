import "./Search.css"
import Button from "../Buttons/Button"

interface Placeholer {
    Text: string;
}

export default function Search({ Text }: Placeholer) {
    return (
        <>
            <div className="searchBar">
                <input className="searchArea" type="text" placeholder={Text} />
                <Button buttonName="Search Now" buttonNewStyle="buttonSearch" />
            </div>
        </>
    )
}