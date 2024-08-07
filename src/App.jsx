import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductList from "./components/ProductList";
import ProductsPhoneView from "./components/ProductsPhoneView";
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
        <ProductList />
        <ProductsPhoneView />
        <Reference />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
