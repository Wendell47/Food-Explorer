import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext({})
    import AlertCard from "../components/alertCard";

// eslint-disable-next-line react/prop-types
function AuthProvider({children}){
    const [data,setData] = useState({})

    async function signIn({email,password}){
       try{
        const response = await api.post("/sessions", {email, password})
        const {user, token} = response.data

        api.defaults.headers.common['authorization'] = `Bearer ${token}`
        setData({user, token})

        localStorage.setItem("@foodExplorer:user", JSON.stringify(user))
        localStorage.setItem("@foodExplorer:token", token)

       }catch(error){
            if(error.response){
                alert(error.response.data.message)
                {AlertCard}
            }else{
                alert("Não foi possível entrar")
            }
       }
    }
    async function signOut(){
            localStorage.removeItem("@foodExplorer:token")
         localStorage.removeItem("@foodExplorer:user")

         setData({})
    }

    useEffect(()=>{
        const token = localStorage.getItem("@foodExplorer:token")
        const user = localStorage.getItem("@foodExplorer:user")
        if(token && user){
            api.defaults.headers.common['authorization'] = `Bearer ${token}`
            
            setData({
                token,
                user: JSON.parse(user)
            })
        }
       

    }, [])
    

    return(
        <AuthContext.Provider value={{
            signIn, 
            signOut,
            user: data.user,
            }}>
        {children}
      </AuthContext.Provider> 
    )
}

function useAuth(){
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth}