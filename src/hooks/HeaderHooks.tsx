import { useEffect, useState } from "react";
import { getLoggedUser } from "../models/LoggedUserData";

export function useDisplayName() {
    const [displayName, setDisplayName] = useState();

    useEffect(() => {
        const data = getLoggedUser;
        setDisplayName(data.name);
    }, []);

    return displayName;
}