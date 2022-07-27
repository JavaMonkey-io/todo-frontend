import React, {useEffect, useState} from 'react'
import useAxios from "../hooks/useAxios";


const HomePage = () => {

    const axios = useAxios();

    const [message, setMessage] = useState<string>("")

    useEffect(() => {
        axios.get("/api/hello")
            .then(res=>setMessage(res.data))
            .catch(res=>setMessage("Unknown message"))
    })

    return (
        <>
            <h1>{message}</h1>
        </>
    )
}

export default HomePage;