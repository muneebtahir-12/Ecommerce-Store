export default function CategoriesCard({ id, image, name }) {
    return (
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                <img src={image} alt={name} className="w-[80px] h-[80px] object-contain sm:w-[100px] sm:h-[100px]" />
                <p className="text-[14px] sm:text-[16px] font-medium text-gray-800 text-center">
                    {name}
                </p>
            </div>
    );
}
