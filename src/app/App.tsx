import {RouterProvider} from "react-router";
import {routes} from "@app/routes/routes.ts";


function App() {

    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}

export default App
