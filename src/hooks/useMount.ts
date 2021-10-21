import {useEffect} from "react"

function useMount(callback: () => void) {
    useEffect(() => {
        callback && callback()
    }, [])
}

export default useMount