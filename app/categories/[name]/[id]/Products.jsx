import Card from "../../ProductCard"
import data from "../../components/data/data"
export default function Products() {
    const prds = data.details.slice(0, 4);
    return (
        <>
        <h3 className="text-[#1A1A1A] text-center mb-10 font-poppins text-[32px] font-semibold leading-[38.4px]">Related Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-15 gap-2">
            {prds.map((p) => (
                <Card id={p.id} key={p.id} name={p.name} price={p.price} image={p.image} />
            ))}
        </div>
        </>
    )
}