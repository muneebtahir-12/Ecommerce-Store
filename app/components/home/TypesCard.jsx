import Link from "next/link";

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\u00A0\u200B\u200C\u200D]+/g, "-") 
    .replace(/[^\w-]+/g, "");
}


export default function TypesCard({ name, image }) {
  const url = slugify(name);

  return (
    <Link href={`/categories/${url}`} className="flex items-center hover:bg-[#00B207] cursor-pointer hover:text-white transition duration-300 gap-2 sm:w-[312px] h-[56px] py-2 pr-7 pl-5 items-end gap-3">
      <img className="w-[23px] h-[23px]" src={image} alt={name} />
      <span className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">{name}</span>
    </Link>
  );
}
