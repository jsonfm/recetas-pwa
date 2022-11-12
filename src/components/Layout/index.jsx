import { Navbar } from "@/components/Navbar";


export const Layout = ({ children }) => {
    return(
        <>
            <main className="min-h-screen px-4 py-2">
                {children}
            </main>
            <Navbar />
        </>
    )
}