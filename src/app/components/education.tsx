import * as data from "./data"
import { sonoLight, openSans } from "./fonts"

const text = {
    degree: "degree",
    university: "university",
    location: "location",
    startDate: "startDate",
    endDate: "endDate"
}

function educationElements(): JSX.Element {
    

    
/*
    <div className="py-1">
        <div className={openSans.className}>
            
        </div>
    </div>
*/
    return <></>
}

export default function education() {
    return (
        <div className="h-1/4 text-white">
            <div className="text-2xl px-7 pt-5">
                <div className={sonoLight.className}>
                    Education
                </div>

                {educationElements()}
            </div>
        </div>
    )
}