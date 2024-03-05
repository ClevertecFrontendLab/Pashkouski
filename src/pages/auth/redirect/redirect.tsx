import {Navigate, useLocation} from "react-router-dom";
import {paths} from "@constants/paths.ts";

export const Redirect = () => {
    const location = useLocation()

    return <Navigate to={paths.AUTH} state={{ from: location }} replace/>
}
