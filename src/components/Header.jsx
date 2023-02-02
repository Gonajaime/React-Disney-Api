import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <Link to="/">Home</Link>
            <Link to="/charactersPage">Characters</Link>
            <Link to="/charactersPageDetail">CharactersPageDetail</Link>
        </header>
    )

}