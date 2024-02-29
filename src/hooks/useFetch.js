import { useState, useCallback, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const controller = new AbortController()

    useEffect(() => {
        const fetchData = async () => {
            try {

                setLoading(true)
                const response = await fetch(url, {
                    signal: controller.signal
                });
                console.log(response);
                if (!response.ok) { //to handle errors from our side
                    throw new Error(response.statusText) //this move us with error in our Catch Block
                }
                const result = await response.json();
                setLoading(false)
                setData(result)
                setError("")
            } catch (error) { //to handle server errors
                console.log(error)
                setLoading(false)
                setError(error.message)
                setData("")
            }
        }

        fetchData();

        return () => {
            controller.abort()
        }
    }, [url]);

    return { data, loading, error }
}

export default useFetch