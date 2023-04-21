import Spinner from '@/styles/spinner.module.css'

export default function LoadingSpinner() {    
    return (
        <div className={Spinner.spinner_container}>
            <div className={Spinner.loading_spinner}>
            </div>
        </div>
    )

}
