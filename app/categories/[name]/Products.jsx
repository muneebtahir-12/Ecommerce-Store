import Card from "./ProductCard";
import data from "../../components/data/data";

export default function AllProducts({ category }) {
  const prds = data.details;

  // 🔹 Filter products for the current category
const filteredProducts = prds.filter(p => p.cat.includes(category.name));

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2">
        {filteredProducts.map((p) => (
          <Card
            id={p.id}
            catName={category.name}
            key={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>
    </>
  );
}
