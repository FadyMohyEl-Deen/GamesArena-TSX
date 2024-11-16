import { HeadSection2 } from "../components/HeadSection/HeadSection"
export default function GamesList() {
    return (
        <>
            <HeadSection2 />
            <div className="categories">
                <ol>
                    <li>ALL</li>
                    <li>ADVENTURE</li>
                    <li>STRATEGY</li>
                    <li>RACING</li>
                    <li>ALL CATEGORIES</li>
                </ol>
            </div>
        </>
    )
}