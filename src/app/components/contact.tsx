import Image from "next/image"
import * as data from "./data"
import { sonoLight, sofiaSansSemiCondensed } from "./fonts"

const _contact = data.getData(data.categories.contact) as data.Contact

const text = {
    mobile: "mobile",
    mail: "mail",
    address: "address",
    repo: "repo",
    social: "social",
    homepage: "homepage"
}

function contactElement(element: string): JSX.Element {
    const icons = {
        mobile: "mobile-svgrepo-com.svg",
        mail: "mail-svgrepo-com.svg",
        address: "location-pin-svgrepo-com.svg",
        repo: "code-branch-svgrepo-com.svg",
        social: "users-svgrepo-com.svg",
        homepage: "globe-svgrepo-com.svg"
    }

    const isVisible = data.getVisibilty(element)
    if (! isVisible) return <></>

    return (
        <div className="py-1 flex">
            <div className="invert pt-[2px] pr-2">
                <Image
                    src={"/icons/" + icons[element as keyof object]}
                    alt={element}
                    width={20}
                    height={20}
                />
            </div>
            <div className={sofiaSansSemiCondensed.className}>
                {_contact[element as keyof object]}
            </div>
        </div>
    )
}

export default function contact() {
    return (
        <div className="h-1/4 text-white">
            <div className="text-2xl px-7 pt-5">
                <div className={sonoLight.className}>
                    Contact
                </div>
            </div>

            <div className="px-7 py-5">
                {contactElement(text.mobile)}
                {contactElement(text.mail)}
                {contactElement(text.address)}
                {contactElement(text.repo)}
                {contactElement(text.social)}
                {contactElement(text.homepage)}
            </div>
        </div>
    )
}