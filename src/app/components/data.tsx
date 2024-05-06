import fs from "fs"

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

export interface Contact {
    mobile: string,
    mail: string,
    address: string,
    repo: string,
    social: string,
    homepage: string
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
    value: number,
    maxValue: number
}

export interface Skills {
    name: string,
    value: number,
    maxValue: number
}

function getDataFile(): string {
    if (fs.existsSync(process.cwd() + "/public/data.json")) {
        return process.cwd() + "/public/data.json"
    } else {
        return process.cwd() + "/public/placeholder_data.json"
    }
}

export function getData(category: string): ( Person | Contact | Education[] | Languages[] | Skills[] ) {
    const file = fs.readFileSync(getDataFile(), "utf8")
    const data = JSON.parse(file)

    return data.elements[category]
}

export function getVisibilty(element: string): boolean {
    const file = fs.readFileSync(getDataFile(), "utf8")
    const data = JSON.parse(file)

    return data.visibility[element]
}