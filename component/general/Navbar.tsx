import Link from "next/link";

export function Navbar() {
    return (
        <nav className="py-5 flex items-center justify-between">
            <div className="flex items-center gap-6">
                <Link href="/">
                <h1 className="text-3xl font-semibold">
                    <span className="text-red-500">Axis</span><span className="text-blue-500">Point</span>
                </h1>
                </Link>
            </div>
            <div className="hidden sm:flex items-center gap-6">
                <Link href="/" className="text-sm font-medium hover:text-gray-500 transition-colors">
                Home
                </Link>
                <Link href="/" className="text-sm font-medium hover:text-gray-500 transition-colors">
                About Us
                </Link>
                <Link href="/" className="text-sm font-medium hover:text-gray-500 transition-colors">
                Services
                </Link>

            </div>

        </nav>
    )
}