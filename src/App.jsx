import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductDesktopView from "./components/ProductDesktopView";
import ProductPhoneView from "./components/ProductPhoneView";
import Reference from "./components/Reference";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="mt-16">
        <Hero />
        <About />
        <ProductDesktopView />
        <ProductPhoneView />
        <Reference />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
