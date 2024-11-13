import "./Search.css"
import Button from "../Buttons/Button"

interface Props {
    Text: string;
}

export default function Search({ Text }: Props) {
    return (
        <>
            <div className="searchBar">
                <input className="searchArea" type="text" placeholder={Text} />
                <Button buttonName="Search Now" buttonNewStyle="buttonSearch" />
            </div>
        </>
    )
}