import * as data from "./data"
import { sonoLight, sono } from "./fonts"

const _person = data.getData(data.categories.person) as data.Person

export default function person() {
    return (
        <div className="h-[23.5%]">
            <div className="p-[6%] pt-[8%]">
                <div className="text-7xl p-2 tracking-[.025em]">
                    <div className={sonoLight.className}>
                        {_person.firstName.toUpperCase()}
                    </div>
                </div>
                <div className="text-7xl p-2 tracking-[.025em]">
                    <div className={sonoLight.className}>
                        {_person.lastName.toUpperCase()}
                    </div>
                </div>
                <div className="text-2xl p-2 tracking-wide">
                    <div className={sono.className}>
                        {_person.title.toUpperCase()}
                    </div>
                </div>
            </div>
        </div>
    )
}