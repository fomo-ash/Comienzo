import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-screen h-[120vh] bg-[url('/comienzo.png')] bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        marginTop: "-10vh", 
      }}
    ></section>
  );
}
