import { useEffect, useState } from "react"
import {OpenLibraryResponse} from '../types/types';

export const useFetch = (url:string) => {
    const [data, setData] = useState<OpenLibraryResponse | null >(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!url) return;

        fetch(url)
        .then((res) => res.json())
        .then((data:OpenLibraryResponse) => {
            setData(data);
            setLoading(false);
        })
        .catch(()=> setLoading(false));
    }, [url]);
    return { data, loading};
};
