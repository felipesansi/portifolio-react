function Stack() {
    return (
      <>
        <h1 className="flex text-5xl font-bold leading-tight justify-center mb-3 text-sky-700">
          Minhas Stack
        </h1>
        <p className="flex text-1xl font-light justify-center">
          Tecnologias que eu uso
        </p>
        <div className="grid grid-cols-3 gap-4 mt-5 justify-items-center">
          <img src="/logos_react.png" alt="React" className="w-20 h-auto" />
          <img src="/vscode-icons_file-type-js-official.png" alt="JavaScript" className="w-20 h-auto" />
          <img src="/vscode-icons_file-type-html.png" alt="HTML" className="w-20 h-auto" />
          <img src="/.png" alt="CSS" className="w-20 h-auto" />
          <img src="/logos_tailwind.png" alt="Tailwind CSS" className="w-20 h-auto" />
          <img src="/logos_node.png" alt="Node.js" className="w-20 h-auto" />
          <img src="/logos_next.png" alt="Next.js" className="w-20 h-auto" />
          <img src="/logos_git.png" alt="Git" className="w-20 h-auto" />
          <img src="/logos_figma.png" alt="Figma" className="w-20 h-auto" />
        </div>
      </>
    );
  }
  
  export default Stack;