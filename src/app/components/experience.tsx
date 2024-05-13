import * as data from "./data"
import { sonoLight, sofiaSansSemiCondensed, openSans } from "./fonts"

const _experience = (data.getData(data.categories.experience) as data.Experience[])
    .sort((a, b) => parseInt(b.timeFrame.endMonth) - parseInt(a.timeFrame.endMonth))
    .sort((a, b) => parseInt(b.timeFrame.endYear) - parseInt(a.timeFrame.endYear))
const experienceLimit = _experience.length > 2 ? 2 : _experience.length

function activityElements(activities: data.Activity[]): JSX.Element[] {
    const elements: JSX.Element[] = []
    let i = 0

    activities.forEach(element => {
        elements.push (
            <div className="flex" key={i}>
                {"•"}
                <div className="pl-2">
                    <div className={openSans.className}>
                        {element.description}
                    </div>
                </div>
            </div>
        )
        i++
    })

    return elements
}

function experienceElements(): JSX.Element[] {
    const elements: JSX.Element[] = []

    for (let i = 0; i < experienceLimit; i++) {
        elements.push (
            <div className="px-7 pt-5" key={i}>
                <div className="py-1">
                    <div className={sofiaSansSemiCondensed.className}>
                        <div className="text-lg">
                            {_experience[i].title}
                        </div>
                        <div>
                            {
                                _experience[i].company +
                                ", " +
                                (
                                    _experience[i].timeFrame.startMonth.length < 2 ? 
                                        "0" + _experience[i].timeFrame.startMonth :
                                        _experience[i].timeFrame.startMonth
                                ) +
                                "/" +
                                _experience[i].timeFrame.startYear +
                                " - " +
                                (
                                    _experience[i].timeFrame.endMonth.length < 2 ? 
                                        "0" + _experience[i].timeFrame.endMonth :
                                        _experience[i].timeFrame.endMonth
                                ) +
                                "/" +
                                _experience[i].timeFrame.endYear
                            }
                        </div>
                    </div>
                </div>
                <div className="py-1 pl-7 text-[15px]">
                    {activityElements(_experience[i].activities)}
                </div>
            </div>
        )
    }

    return elements
}

export default function experience() {
    return (
        <div className="h-[53%]">
            <div className="text-2xl px-7 pt-5">
                <div className={sonoLight.className}>
                    Experience
                </div>

            </div>

            {experienceElements()}
        </div>
    )
}