import { About, Navbar } from "@/components/indez";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <About />
    </main>
  );
}
