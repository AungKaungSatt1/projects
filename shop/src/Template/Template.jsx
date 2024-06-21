import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function Template() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}