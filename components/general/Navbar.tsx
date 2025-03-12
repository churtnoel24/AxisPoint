import Link from "next/link";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "../ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function Navbar() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();  
    return (
        <nav className="py-5 flex items-center justify-between">
            <div className="flex items-center gap-6">
                <Link href="/">
                    <h1 className="text-3xl font-semibold">
                        <span className="text-red-500">Axis</span><span className="text-blue-500">Point</span>
                    </h1>
                </Link>
                <div className="hidden sm:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium hover:text-gray-500 transition-colors">
                        Home
                    </Link>
                    <Link href="/aboutUs" className="text-sm font-medium hover:text-gray-500 transition-colors">
                        About Us
                    </Link>
                    <Link href="/services" className="text-sm font-medium hover:text-gray-500 transition-colors">
                        Services
                    </Link>
                    <Link href="/dashboard" className="text-sm font-medium hover:text-gray-500 transition-colors">
                        Dashboard
                    </Link>
                </div>
            </div>

            {user ? (
                <div className="flex items-center gap-4">
                    <p>Hi, {user.given_name}!</p>
                    <LogoutLink className={buttonVariants()}>Logout</LogoutLink>
                </div>
            ): (
                <div className="flex items-center gap-4">
                <LoginLink className={buttonVariants()}>Login</LoginLink>
                <RegisterLink className={buttonVariants({variant: 'secondary'})}>Sign Up</RegisterLink>
            </div>
            )}


        </nav>
    )
}