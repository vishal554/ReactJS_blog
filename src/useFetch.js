import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    const abortCont = new AbortController()
    useEffect(() => {
        fetch(url, {signal: abortCont.signal})
        .then(res => {
            if(res.ok){
                return res.json()
            }
            else{
                throw Error("Could not fetch the resource.")
            }
        })
        .then(data => {
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch((error) => {
            if (error.name === 'AbortError'){
                console.log('Fetch cancelled')
            }
            else{
                setError(error.message)
                setIsPending(false)
            }
        })

        return () => abortCont.abort()

    }, [url])

    return {data, isPending, error} 
}
export default useFetch