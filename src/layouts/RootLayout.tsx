import {Link, Outlet} from "react-router-dom";

export default function Rootlayout(){

    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/browse">Browse</Link>
            <Link to="/library">My Library</Link>
            <Link to="/favorites">Favorties</Link>
        </nav>
        <main>
            <Outlet />
        </main>
        </>
    )
}