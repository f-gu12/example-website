import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);                                                                     //THIS EFFECT IS TO PREVENT USER FROM USING NAVBAR WHEN MOBILE MENU OPENS, NOT TO CLOSE

    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl fon-bold text-white">
                    <a>Logo
                        <span className="text-blue-500">.tech</span>
                    </a>
                </a>

                <div className="w-50 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}> {/* md:hidden means mobile only, div acting as button && Sets menuOpen to true*/}
                    &#9776;                                                                                                     {/* This is where mobile menu is called*/}
                </div>     

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hove:text-white transition-colors"> Home </a>
                    <a href="#about" className="text-gray-300 hove:text-white transition-colors"> About </a>
                    <a href="#projects" className="text-gray-300 hove:text-white transition-colors"> Projects </a>
                    <a href="#contact" className="text-gray-300 hove:text-white transition-colors"> Contact </a>
                </div>       
            </div>
        </div>
    </nav>
}