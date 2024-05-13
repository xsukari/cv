import fs from "fs"

export const maxValue = 10

export const categories = {
    person: "person",
    contact: "contact",
    education: "education",
    languages: "languages",
    skills: "skills",
    experience: "experience"
}

export interface Person {
    firstName: string,
    lastName: string,
    title: string
}

interface ContactElement {
    value: string,
    visible: boolean
}
export interface Contact {
    mobile: ContactElement,
    mail: ContactElement,
    address: ContactElement,
    repo: ContactElement,
    social: ContactElement,
    homepage: ContactElement
}

export interface Education {
    degree: string,
    university: string,
    location: string,
    startYear: string,
    endYear: string
}

export interface Languages {
    name: string,
    value: number
}

export interface Skills {
    name: string,
    value: number
}

interface Timeframe {
    startMonth: string,
    startYear: string,
    endMonth: string,
    endYear: string
}
interface Activity {
    description: string
}
export interface Experience {
    timeFrame: Timeframe,
    title: string,
    company: string,
    activities: Activity[]
}

function getDataFile(): string {
    if (fs.existsSync(process.cwd() + "/public/data.json")) {
        return process.cwd() + "/public/data.json"
    } else {
        return process.cwd() + "/public/placeholders/placeholder_data.json"
    }
}

export function getData(category: string): ( Person | Contact | Education[] | Languages[] | Skills[] | Experience[] ) {
    const file = fs.readFileSync(getDataFile(), "utf8")
    const data = JSON.parse(file)

    return data[category]
}