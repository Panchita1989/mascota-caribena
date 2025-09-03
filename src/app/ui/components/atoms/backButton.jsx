
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";


export default function BackButton({href, className}) {
    
    return(
        <Link href={href} className={`px-4 py-2 border rounded-full hover:bg-gray-400 inline-block ${className}`}>
            <FontAwesomeIcon
                icon={faArrowLeft}
                />
        </Link>
    )
}