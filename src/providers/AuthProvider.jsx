import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { setUser, toggleLoading } from "../redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import auth from "../utils/firebase.config";
export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUsers] = useState({});
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            setUsers(user)
            if (user) {
                dispatch(setUser({
                    name: user.displayName,
                    email: user.email
                }))
                dispatch(toggleLoading(false))
            } else {
                dispatch(toggleLoading(false))
            }
        })
    }, [dispatch])
    console.log(user)
    const authInformation = {
        user,
    }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;