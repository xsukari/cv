import Image from "next/image"
import * as data from "./data"
import { sonoLight, sofiaSansSemiCondensed } from "./fonts"

const _languages = (data.getData(data.categories.languages) as data.Languages[])
    .sort((a, b) => a.name.localeCompare(b.name))
    .sort((a, b) => b.value - a.value)

function languageValue(value: number, maxValue: number): JSX.Element[] {
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

function languageElements(): JSX.Element[] {
    const elements: JSX.Element[] = []

    _languages.forEach(element => {
        elements.push (
            <div className="py-1 flex">
                <div className={sofiaSansSemiCondensed.className}>
                    {element.name}
                </div>

                <div className="invert pb-[2px] pl-12 flex">
                    {languageValue(element.value, element.maxValue)}
                </div>
            </div>
        )
    })

    return elements
}

export default function languages() {
    return (
        <div className="h-1/4 text-white">
            <div className="text-2xl px-7 pt-5">
                <div className={sonoLight.className}>
                    Languages
                </div>
            </div>

            <div className="px-7 py-5">
                {languageElements()}
            </div>
        </div>
    )
}