import Picture from "./components/picture"
import Person from "./components/person"
import Contact from "./components/contact"
import Education from "./components/education"
import Languages from "./components/languages"
import Experience from "./components/experience"
import Skills from "./components/skills"

export default function Home() {
    return (
        <main className={"flex h-[1178px] w-[833px] m-auto"}>
            <div className="w-1/3 bg-[#2b3639]">
                {/* Left column */}

                <Picture/>
                <Contact/>
                <Education/>
                <Languages/>

            </div>
            <div className="w-2/3 bg-[#ffffff]">
                {/* Right column */}

                <Person/>
                <Experience/>
                <Skills/>

            </div>
        </main>
    )
}
