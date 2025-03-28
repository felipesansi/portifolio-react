import Link from "next/link";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";  // Parece que você não está utilizando o Linkedin, se for o caso, remova essa importação
import Projetos from "../components/Projetos"; // Não é necessário importar aqui, pois não é utilizado neste componente

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
          <Link href="/Projetos" className="hover:underline px-10">
            Projetos
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline px-10">
            Contato
          </Link>
        </li>
        <li>
          <Link href="https://github.com/felipsansi" target="_blank" className="hover:underline">
            <Github className="text-sky-800 font-bold" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
