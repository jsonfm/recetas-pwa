import { Navbar } from "@/components/Navbar";


export const Layout = ({ children }) => {
    return(
        <>
            <main className="min-h-screen">
                {children}
            </main>
            <Navbar />
        </>
    )
}