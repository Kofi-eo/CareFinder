import Spinner from '@/styles/spinner.module.css'

// Will be displayed while data is being fetched
export default function LoadingSpinner() {    
    return (
        <div className={Spinner.spinner_container}>
            <div className={Spinner.loading_spinner}>
            </div>
        </div>
    )

}
