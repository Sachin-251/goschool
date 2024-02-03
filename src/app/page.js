import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Featured from "@/components/featured/Featured";
import Landing from "@/components/landing/Landing";
import Loader from "@/components/loader/Loader";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="h-full w-full divide-y divide-green-500">
      <Suspense fallback={<Loader />}>
        <Landing />
        <Featured />
        <About />
        <Contact />
      </Suspense>
    </main>
  );
}
