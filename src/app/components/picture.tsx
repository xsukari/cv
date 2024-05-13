import Image from "next/image"
import fs from "fs"

function getPicture(): string {
    if (fs.existsSync(process.cwd() + "/public/portrait.jpg")) {
        return "/portrait.jpg"
    } else {
        return "/placeholders/placeholder_portrait.jpg"
    }
}

export default function picture() {
    return (
        <Image
            src={getPicture()}
            alt="Portrait"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
        />
    )
}