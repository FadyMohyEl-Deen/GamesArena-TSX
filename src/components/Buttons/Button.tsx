import './button.css'
export default function Button(Props: { buttonName: string, buttonNewStyle?: string }) {
    return (
        <a className={`button ${Props.buttonNewStyle}`} href="">{Props.buttonName}</a>
    )
}
