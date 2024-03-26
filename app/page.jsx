import Path from "./components/Path";
import Product from "./components/Product";

export default function Home() {
  return (
    <section className="flex flex-col gap-8 py-8 px-6">
      <Path />
      <Product />
    </section>
  );
}
