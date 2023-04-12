import { useRouter } from "next/router"
import { useEffect } from "react"

export default function MedCenter() {
    const route = useRouter()

    useEffect(() => {
        route.push('/')
    },[])

    return (
        <></>
    )
}