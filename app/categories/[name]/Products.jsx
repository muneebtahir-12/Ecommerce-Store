import Card from "./ProductCard";
import data from "../../components/data/data"
export default function AllProducts({category}) {
    const prds = data.details;
    return (
        <>
        <p>{category.name}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">
            {prds.map((p) => (
                <Card id={p.id} catName={category.name} key={p.id} name={p.name} price={p.price} image={p.image} />
            ))}
        </div>
        </>
    )
}