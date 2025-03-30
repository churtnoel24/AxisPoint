import Link from "next/link";
// import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
// import { buttonVariants } from "../ui/button";
import Image from "next/image";

export async function Navbar() {
    
    

    return (
        <nav className="z-50 py-5 flex items-center justify-center">
            <div className="flex items-center gap-6">
                <Link href="/" className="relative w-32 h-16">
                    <Image 
                        src="/logo.png"
                        alt="Axis Point Logo"
                        fill
                        className="object-contain"
                    />
                </Link>
                
                <div className="hidden sm:flex items-center gap-6">
                    <Link href="/" className="text-md font-medium hover:text-gray-500 transition-colors">
                        Home
                    </Link>
                    <Link href="/projects" className="text-md font-medium hover:text-gray-500 transition-colors">
                        Projects
                    </Link>
                    <Link href="/aboutus" className="text-md font-medium hover:text-gray-500 transition-colors">
                        About
                    </Link>
                    <Link href="/services" className="text-md font-medium hover:text-gray-500 transition-colors">
                        Services
                    </Link>
                    <Link href="/successlist" className="text-md font-medium hover:text-gray-500 transition-colors">
                        Success List
                    </Link>
                    <Link href="/supportedtechnology" className="text-md font-medium hover:text-gray-500 transition-colors">
                        Supported Technology
                    </Link>
                    <Link href="/permits" className="text-md font-medium hover:text-gray-500 transition-colors">
                        Permits
                    </Link>
                    <Link href="/contacts" className="text-md font-medium hover:text-gray-500 transition-colors">
                        Contacts
                    </Link>
                    {/* {user ? (
                        <Link href="/dashboard" className="text-sm font-medium hover:text-gray-500 transition-colors">
                            Dashboard
                        </Link>
                    ) : (
                        <p className="invisible">Dashboard</p>
                    )} */}
                </div>
            </div>

            {/* {user ? (
                <div className="flex items-center gap-4">
                    <p>Hi, {user.given_name}!</p>
                    <LogoutLink className={buttonVariants()}>Logout</LogoutLink>
                </div>
            ) : (
                <div className="flex items-center gap-4">
                    <LoginLink className={buttonVariants()}>Login</LoginLink>
                    <RegisterLink className={buttonVariants({ variant: "secondary" })}>Sign Up</RegisterLink>
                </div>
            )} */}
        </nav>
    );
}
