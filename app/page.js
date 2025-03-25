import Nav from "./components/Nav";
import Stack from "./components/Stack";

import Hero from "./components/hero";

function Page() {
  return (
    <>
      <div className="bg-white text-gray-800 m-13">
        <Nav />
      </div>
      <div className="w-screen h-screen bg-white flex flex-col"> 
        <Hero />
      </div>
      <div className="w-screen h-screen bg-white flex flex-col"> 
        <Stack />
      </div>
    </>
  );
}

export default Page;