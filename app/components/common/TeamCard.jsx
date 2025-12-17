export default function TeamCard({ id, name, image, position }) {
  return (
    <div className="relative flex flex-col items-center w-auto group">
      
      {/* Card */}
      <div className="flex flex-col w-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
        <img src={image} alt={name} className="w-full h-auto" />

        <div className="ml-5 mt-2 mb-2">
          <p className="text-[#1A1A1A] font-poppins text-sm sm:text-lg font-medium leading-[150%]">{name}</p>
          <p className="text-[#808080] font-poppins text-[13px] sm:text-sm font-normal leading-[150%]">{position}</p>
        </div>
      </div>

      {/* Social Media Overlay (hidden by default, appears on hover) */}
      <div className="absolute inset-0 flex items-center justify-center gap-2  opacity-0 bg-[#00000022] group-hover:opacity-100 transition-opacity duration-300  bg-opacity-30 rounded-lg">
        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-green-500 cursor-pointer">
          <img src="/fb11.png" alt="Facebook" className="w-[35px] h-[35px]" />
        </div>
        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-green-500 cursor-pointer">
          <img src="/tw1.png" alt="Twitter" className="w-[18px] h-[18px]" />
        </div>
        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-green-500 cursor-pointer">
          <img src="/pinterest 1.png" alt="Pinterest" className="w-[18px] h-[18px]" />
        </div>
        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-green-500 cursor-pointer">
          <img src="/inst1.png" alt="Instagram" className="w-[18px] h-[18px]" />
        </div>
      </div>
    </div>
  );
}
