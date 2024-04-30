import fs from "fs"
import fsAsync from "fs/promises"
import { sonoLight, sono } from "./fonts"

const values = {
    firstName: "firstName",
    lastName: "lastName",
    title: "title"
}

function getFile(): string {
    if (fs.existsSync(process.cwd() + "/public/data.json")) {
        return process.cwd() + "/public/data.json"
    } else {
        return process.cwd() + "/public/placeholder_data.json"
    }
}

async function getText(value: string): string {
    const file = await fsAsync.readFile(getFile(), "utf8")
    const data = JSON.parse(file)

    return data[value].toUpperCase()
}

export default function name() {
    return (
        <div className="h-[23.5%]">
            <div className="p-[6%] pt-[8%]">
                <div className="text-7xl p-2 tracking-[.025em]">
                    <div className={sonoLight.className}>
                        {getText(values.firstName)}
                    </div>
                </div>
                <div className="text-7xl p-2 tracking-[.025em]">
                    <div className={sonoLight.className}>
                        {getText(values.lastName)}
                    </div>
                </div>
                <div className="text-2xl p-2 tracking-wide">
                    <div className={sono.className}>
                        {getText(values.title)}
                    </div>
                </div>
            </div>
        </div>
    )
}