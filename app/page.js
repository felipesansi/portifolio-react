import Nav from "./components/Nav";
import Stack from "./components/Stack";
import Hero from "./components/Hero";
import Projetos from "./components/Projetos";

function Page() {
  const limit = 6;
  return (
    <>
      <div className="bg-white text-gray-800">
        <Nav />
      </div>
      <div className="w-screen min-h-screen bg-white flex flex-col">
        <Hero />
      </div>
      <div className="w-screen min-h-screen bg-white flex flex-col">
        <Stack />
      </div>
      <div className="w-screen min-h-screen bg-white flex flex-col">
        <Projetos limit={limit} />
      </div>
    </>
  );

    
  }


export default Page;
