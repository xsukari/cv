import * as data from "./data"
import { sonoLight, sofiaSansSemiCondensed } from "./fonts"

const _education = (data.getData(data.categories.education) as data.Education[])
    .sort((a, b) => parseInt(b.endYear) - parseInt(a.endYear))
const educationLimit = _education.length > 2 ? 2 : _education.length

function educationElements(): JSX.Element[] {
    const elements: JSX.Element[] = []

    for (let i = 0; i < educationLimit; i++) {
        elements.push (
            <div className="px-7 pt-5" key={i}>
                <div className="py-1">
                    <div className={sofiaSansSemiCondensed.className}>
                        {_education[i].degree}
                    </div>
                </div>
                <div className="py-1">
                    <div className={sofiaSansSemiCondensed.className}>
                        {_education[i].university + ", " + _education[i].location}
                    </div>
                </div>
                <div className="py-1">
                    <div className={sofiaSansSemiCondensed.className}>
                        {_education[i].startYear + " - " + _education[i].endYear}
                    </div>
                </div>
            </div>
        )
    }

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