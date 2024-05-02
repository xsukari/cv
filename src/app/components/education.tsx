import * as data from "./data"
import { sonoLight, sofiaSansSemiCondensed } from "./fonts"

const _education = data.getData(data.categories.education) as data.Education[]

function educationElements(): JSX.Element[] {
    const elements: JSX.Element[] = []

    _education.forEach(element => {
        elements.push (
            <div className="px-7 pt-5">
                <div className="py-1">
                    <div className={sofiaSansSemiCondensed.className}>
                        {element.degree}
                    </div>
                </div>
                <div className="py-1">
                    <div className={sofiaSansSemiCondensed.className}>
                        {element.university + ", " + element.location}
                    </div>
                </div>
                <div className="py-1">
                    <div className={sofiaSansSemiCondensed.className}>
                        {element.startDate + " - " + element.endDate}
                    </div>
                </div>
            </div>
        )
    })

    return elements
}

export default function education() {
    return (
        <div className="h-1/4 text-white">
            <div className="text-2xl px-7 pt-5">
                <div className={sonoLight.className}>
                    Education
                </div>
            </div>

            {educationElements()}
        </div>
    )
}