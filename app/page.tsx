import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Goal from "./components/Goal";
import Classes from "./components/Classes";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="bg-[#101213] font-poppins">
      <Navbar/>
      <Hero/>
      <Service/>
      <Goal/>
      <Classes/>
      <Contact/>
    </div>
  );
}
