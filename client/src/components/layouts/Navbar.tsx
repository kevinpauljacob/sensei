import Image from "next/image";
import Link from "next/link";
import logo from "/public/assets/logo.png";
import { playfair } from "@/utils/fonts";

export default function Navbar() {
    const links = [
        { name: 'Explore Tutors', href: '#tutors' },
        { name: 'What We Offer', href: '#services' },
      ]; 

    return (
        <nav className="flex justify-between items-center">
            <p className={`${playfair.className} flex items-center text-3xl font-bold`}>
                <span>
                    <Image className="brightness-0 mr-2" src={logo} alt="" width={40} height={40}/>
                </span>
                sensei
            </p>

            <ul className="flex text-xl">
                {links.map((link, index) => (
                <li key={index} className="font-bold mx-2">
                    <Link href={link.href} className='transition ease-in-out duration:300 hover:transition hover:ease-in-out hover:duration-300 hover:text-accent-1'>{link.name}</Link>
                </li>
                ))}
            </ul>

            <div className="flex items-center">
                <p className="text-md font-bold">Kevin Paul</p>
                <div className="bg-accent-1 rounded-full p-5 ml-3">
                    <Image src="" alt="" />
                </div>
            </div>
        </nav>
  )
}
