import './button.css'

interface Props {
    buttonName: string;
    buttonNewStyle?: string;
}

export default function Button({ buttonName, buttonNewStyle }: Props) {
    return (
        <a className={`button ${buttonNewStyle}`} href="">{buttonName}</a>
    )
}
