import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QouteSection(){
    return (
        <div className="section quote">
            <p className="qoute-text"><FontAwesomeIcon icon={faQuoteLeft} /> Good food is the foundation of genuine happiness.</p>
            <p className="qoute-auther">- Auguste Escoffier</p>
        </div>
    )
}