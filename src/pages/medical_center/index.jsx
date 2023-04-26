import { useRouter } from "next/router"
import { useEffect } from "react"

// Redirects Back to the Home page if a user lands here.
export default function MedCenter() {
    const route = useRouter()

    useEffect(() => {
        route.push('/')
    },[])

    return (
        <></>
    )
}