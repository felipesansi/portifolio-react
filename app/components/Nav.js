import Link from "next/link";
import { Github } from "lucide-react";

function Nav() {
  return (
    <nav className="bg-white text-gray-800 m-13">
      <ul className="flex space-x-4 justify-end">
        <li>
          <Link href="/about" className="hover:underline px-10">
            Sobre
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:underline px-10">
            Projetos
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline px-10">
            Contato
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            <Github className="text-sky-800 font-bold font" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;