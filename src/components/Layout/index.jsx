import { Navbar } from "@/components/Navbar";


export const Layout = ({ children }) => {
    return(
        <>
            <main>
                {children}
            </main>
            <Navbar />
        </>
    )
}