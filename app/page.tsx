import About from "@/components/About";
import Blog from "@/components/Blog";
import Brand from "@/components/Brand";
import CaseStudy from "@/components/CaseStudy";
import Consult from "@/components/Consult";
import FunFact from "@/components/FunFact";
import Hero from "@/components/Hero";
import Objective from "@/components/Objective";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <FunFact/>
      <Service/>
      <Consult/>
      <Objective/>
      <Brand/>
      <CaseStudy/>
      {/* <Testimonial/> */}
      <Blog/>
    </div>
  );
}
