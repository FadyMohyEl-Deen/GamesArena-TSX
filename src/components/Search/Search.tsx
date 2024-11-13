import "./Search.css"
import Button from "../Buttons/Button"

interface Props {
    Placeholder: string;
    ButtonName: string;
    searchNewStyle?: string;
}

export default function Search({ Placeholder, ButtonName, searchNewStyle }: Props) {
    return (
        <>
            <div className={`searchBar ${searchNewStyle}`}>
                <input className="searchArea" type="text" placeholder={Placeholder} />
                <Button buttonName={ButtonName} buttonNewStyle="buttonSearch" />
            </div>
        </>
    )
}