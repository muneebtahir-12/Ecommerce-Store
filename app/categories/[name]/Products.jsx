import Card from "./ProductCard";
import data from "../../components/data/data";

export default function AllProducts({ category, selectedCategory }) {
  const prds = data.details;
  
  // Get the selected category object
  const catToFilter = selectedCategory ? data.types.find(t => t.id === selectedCategory) : category;

  // 🔹 Filter products for the selected category
  const filteredProducts = prds.filter(p => p.cat.includes(catToFilter?.name));

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2">
        {filteredProducts.map((p) => (
          <Card
            id={p.id}
            catName={catToFilter?.name}
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
