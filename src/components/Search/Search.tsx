import "./Search.css"
import Button from "../Buttons/Button"
export default function Search() {
    return (
        <>
            <div className="searchBar">
                <input className="searchArea" type="text" placeholder="Search Games..." />
                <Button buttonName="Search Now" buttonNewStyle="button" />
            </div>
        </>
    )
}