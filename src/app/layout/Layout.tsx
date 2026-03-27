import {Outlet} from "react-router";
import {Header} from "@/widget/header";



const Layout = () => {
    return (
        <>
        <Header />
        <main className="container">
            <Outlet />
        </main>
        </>
    );
};

export default Layout;