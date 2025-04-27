import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

export default function Rootlayout(){

    return (
        <>
       <NavBar />
        <main>
            <Outlet />
        </main>
        </>
    );
}