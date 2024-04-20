import { useState } from "react"
import { loginRequest } from "../../../service/api" // Importa la función de inicio de sesión adecuada
import toast from "react-hot-toast"

export const useLogin = () =>{
    const [isLoading, setIsLoading] = useState(false)

    const login = async (email, password ) =>{
        setIsLoading(true)

        const user = {
            email, 
            password
        }

        const response = await loginRequest(user) // Cambia a la función de inicio de sesión adecuada
        setIsLoading(false)
        if(response.error){
            return toast.error(
                response?.err.response?.data?.message ||
                'Error al iniciar sesión, verifica tus credenciales e intenta nuevamente'
            )
        }

        console.log(response)

    }
    return {
        login,
        isLoading
    }
}
