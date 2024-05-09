import Image from "next/image"
import * as data from "./data"
import { sonoLight, sofiaSansSemiCondensed } from "./fonts"

const _skills = (data.getData(data.categories.skills) as data.Skills[])
    .sort((a, b) => a.name.localeCompare(b.name))
    .sort((a, b) => b.value - a.value)
const skillsLimit = _skills.length > 10 ? 10 : _skills.length

function skillValue(value: number, maxValue: number): JSX.Element[] {
    const elements: JSX.Element[] = []

    // Overwrite parameters in case of invalid input in data.json
    value = value > 10 ? 10 : value
    maxValue = maxValue !== 10 ? 10 : maxValue
    
    for (let i = 0; i < Math.floor(value / 2); i++) {
        elements.push(
            <Image
                src="/icons/circle-full.svg"
                alt={"progress " + i}
                width={20}
                height={20}
                className="mx-[1px]"
            />
        )
    }

    if (value % 2 !== 0) {
        elements.push(
            <Image
                src="/icons/circle-half-1.svg"
                alt={"progress " + Math.floor(value / 2) + 1}
                width={20}
                height={20}
                className="mx-[1px]"
            />
        )
    }

    for (let i = Math.ceil(value / 2); i < maxValue / 2; i++) {
        elements.push(
            <Image
                src="/icons/circle-svgrepo-com.svg"
                alt={"progress " + i}
                width={20}
                height={20}
                className="mx-[1px]"
            />
        )
    }

    return elements
}

function skillElements(): JSX.Element[] {
    const elements: JSX.Element[] = []

    for (let i = 0; i < skillsLimit; i++) {
        elements.push (
            <div className={"w-1/2 py-1 " + ((i % 2 === 0) ? "pr-2" : "pl-2" ) + " flex"}>
                <div className="min-w-[50%]">
                    <div className={sofiaSansSemiCondensed.className}>
                        {_skills[i].name}
                    </div>
                </div>

                <div className="min-w-[50%] pb-[2px] pl-2 flex">
                    {skillValue(_skills[i].value, _skills[i].maxValue)}
                </div>
            </div>
        )
    }

    return elements
}

export default function skills() {
    return (
        <div className="h-[23.5%]">
            <div className="text-2xl px-7 pt-5">
                <div className={sonoLight.className}>
                    Skills
                </div>
            </div>

            <div className="px-7 py-5 flex flex-wrap">
                {skillElements()}
            </div>
        </div>
    )
}