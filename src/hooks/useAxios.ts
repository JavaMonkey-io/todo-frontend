import axios from "axios";

const useAxios = () => {

    const axiosInstance = axios.create({
        baseURL: (window as any).API_URI,
    });

    return axiosInstance;
};

export default useAxios;