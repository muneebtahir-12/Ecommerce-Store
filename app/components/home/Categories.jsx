import CategoriesCard from "./CategoriesCard";
import data from "../data/data.json";

export default function Categories() {
  const category = data.categories;

  return (
    <section className="sm:ml-9 mt-15 sm:mr-9 ml-5 mr-5 ">
        <div className="flex flex-col mb-5">
            <p className="text-[#00B207] text-center font-poppins text-sm font-medium leading-none tracking-[0.28px] uppercase">Categories</p>
            <h3 className="text-[#1A1A1A] text-center font-poppins text-4xl font-semibold leading-[120%]">Shop By Top Categories</h3>
        </div>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {category.map((item) => (
          <CategoriesCard key={item.id} id={item.id} name={item.name} image={item.image}/>
        ))}
      </div>
    </section>
  );
}
