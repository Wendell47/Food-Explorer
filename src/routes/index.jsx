import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Routes(){
    const route = false
    return(
        <BrowserRouter>
        {route ?  <AuthRoutes/> : <AppRoutes/>}
        </BrowserRouter>
    )
}