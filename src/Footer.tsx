import React, {useEffect, useState} from 'react';
import packageJson from '../package.json'
import useAxios from "./hooks/useAxios";

const Footer = () => {

    const axios = useAxios();
    const [backendVersion, setBackendVersion] = useState<string>("")

    useEffect(() => {
        axios.get('/actuator/info')
            .then(res => {
                setBackendVersion(res.data.build.version)
            })
            .catch(err => {
                setBackendVersion("Unknown")
            })
    }, [])

    return (<p>
        Frontend: v{packageJson.version} | Backend: v{backendVersion}
    </p>)
}

export default Footer;