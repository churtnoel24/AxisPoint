import Link from "next/link";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "../ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

export async function Navbar() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <nav className="py-5 flex items-center justify-between">
            <div className="flex items-center gap-6">
                <Link href="/" className="relative w-36 h-20">
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
                        About Us
                    </Link>
                    <Link href="/services" className="text-md font-medium hover:text-gray-500 transition-colors">
                        Services
                    </Link>
                    {user ? (
                        <Link href="/dashboard" className="text-sm font-medium hover:text-gray-500 transition-colors">
                            Dashboard
                        </Link>
                    ) : (
                        <p className="invisible">Dashboard</p>
                    )}
                </div>
            </div>

            {user ? (
                <div className="flex items-center gap-4">
                    <p>Hi, {user.given_name}!</p>
                    <LogoutLink className={buttonVariants()}>Logout</LogoutLink>
                </div>
            ) : (
                <div className="flex items-center gap-4">
                    <LoginLink className={buttonVariants()}>Login</LoginLink>
                    <RegisterLink className={buttonVariants({ variant: "secondary" })}>Sign Up</RegisterLink>
                </div>
            )}
        </nav>
    );
}
