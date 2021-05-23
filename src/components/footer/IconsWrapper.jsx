import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faFacebookF,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons"

function IconsWrapper() {
    return (
        <div className="flex w-full mt-2 md:w-36 justify-around">
            <FontAwesomeIcon
                className="w-5 text-white-default"
                icon={faInstagram}
            />
            <FontAwesomeIcon
                className="w-5 text-white-default"
                icon={faTwitter}
            />
            <FontAwesomeIcon
                className="w-5 text-white-default"
                icon={faFacebookF}
            />
        </div>
    )
}

export default IconsWrapper
