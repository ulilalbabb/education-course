const Navbar = () => {
    return (
        <nav className="flex items-center justify-between w-full bg-white py-4 pl-10 md:pl-20 lg:pl-40 shadow-lg backdrop-blur-sm bg-opacity-30">
            <p className="text-amber-600 text-xl font-semibold">videobelajar</p>
            <ul className="hidden gap-3">
                <li>Home</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </nav>
    )
}

export default Navbar