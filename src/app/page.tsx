import Picture from "./components/picture"

export default function Home() {
    return (
        <main className="flex min-h-screen">
            <div className="w-1/3 min-h-screen bg-[#2b3639]">
                <Picture />

                <div className="h-1/5">

                </div>
            </div>
            <div className="w-2/3 min-h-screen bg-[#ffffff]">

            </div>
        </main>
    )
}
