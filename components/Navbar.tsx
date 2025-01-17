import Image from "next/image";
import Link from "next/link";
import Profile from '../img/profile_4.png';
import { Avatar, AvatarFallback, AvatarImage} from "./ui/avatar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import ThemeToggler from "./ThemeToggler";

  

const Navbar = () => {
    return ( 
        <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between" >
            <Link href = '/'>
                <Image src={Profile} alt="piyushImage" width={50}/>
            </Link>
            <div className="flex items-center">
                <ThemeToggler/>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                            <AvatarFallback className="text-black">oops!</AvatarFallback>
                            </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                        <Link href='/profile'>Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href='/auth'>Logout</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
            
        </div>
     );
}
 
export default Navbar;