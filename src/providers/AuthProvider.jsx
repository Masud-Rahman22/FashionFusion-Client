import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { setUser, toggleLoading } from "../redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import auth from "../utils/firebase.config";
import useAxios from "../hooks/useAxios";
export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUsers] = useState({});
    const dispatch = useDispatch()
    const axiosPublic = useAxios()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            setUsers(user)
            if (user) {
                const userInfo = {email: user.email}
                axiosPublic.post('/api/jwt', userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
                dispatch(setUser({
                    name: user.displayName,
                    email: user.email
                }))
                dispatch(toggleLoading(false))
            } else {
                localStorage.removeItem('access-token')
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