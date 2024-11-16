import "./Search.css"
import Button from "../Buttons/Button"

interface Props {
    Placeholder: string;
    ButtonName: string;
    searchNewStyle?: string;
    buttonNewStyle?: string;
}

export default function Search({ Placeholder, ButtonName, buttonNewStyle, searchNewStyle }: Props) {
    return (
        <>
            <div className={`searchBar ${searchNewStyle}`}>
                <input className="searchArea" type="text" placeholder={Placeholder} />
                <Button buttonName={ButtonName} buttonNewStyle={buttonNewStyle} />
            </div>
        </>
    )
}