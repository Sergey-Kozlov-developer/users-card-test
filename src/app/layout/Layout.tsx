import {Outlet} from "react-router";
import {Header} from "@/widget/header";



const Layout = () => {
    return (
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        </>
    );
};

export default Layout;