import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Goal from "./components/Goal";
import Classes from "./components/Classes";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="bg-[#101213] font-poppins overflow-hidden">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="service"><Service /></section>
      <section id="goal"><Goal /></section>
      <section id="classes"><Classes /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

