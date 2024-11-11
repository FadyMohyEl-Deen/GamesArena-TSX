import './button.css'
export default function Button(Props: {buttonName: string}) {
    return (
        <a className="button" href="" >{Props.buttonName}</a>
    )
}