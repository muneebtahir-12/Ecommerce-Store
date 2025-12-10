export default function Footer() {
  return (
    <section className="ml-5 mr-5 mt-15 sm:ml-9 sm:mr-9">
      <div className="flex bg-black flex-col lg:flex-row justify-between items-center gap-6 px-5 sm:px-9 py-10">

        {/* Newsletter Text */}
        <div className="flex items-center gap-1 sm:gap-3 text-center lg:text-left">
          <img src="/mail.png" alt="Mail" className="sm:w-[53px] hidden md:block sm:h-[53px] w-[45px] h-[45px]" />
          <div className="flex flex-col gap-1">
            <h5 className="text-white font-poppins font-semibold text-[20px] lg:text-[23px] leading-[150%]">
              Subscribe our Newsletter
            </h5>
            <p className="text-[#666] font-poppins text-[12px] lg:text-[13px] leading-[150%]">
              Pellentesque eu nibh eget mauris congue mattis matti.
            </p>
          </div>
        </div>

        {/* Input + Button */}
        <div className="flex w-full sm:w-auto justify-center">
          <input
            type="text"
            className="px-5 py-[8px] sm:py-[10px] border border-transparent rounded-[46px] bg-[#333] text-white focus:outline-none focus:ring-0 focus:border-none w-[60%] sm:w-auto"
            placeholder="Your email address"
          />
          <button className="bg-[#00B207] text-white font-poppins rounded-[46px] px-2 sm:px-5 py-[8px] sm:py-[10px] -ml-15  text-[12px] sm:text-[14px] font-semibold leading-[125%]">
            Subscribe
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <img src="/fb.png" alt="Facebook" className="w-[36px] h-[36px] cursor-pointer" />
          <img src="/twitter.png" alt="Twitter" className="w-[36px] h-[36px] cursor-pointer" />
          <img src="/p.png" alt="Pinterest" className="w-[36px] h-[36px] cursor-pointer" />
          <img src="/insta.png" alt="Instagram" className="w-[36px] h-[36px] cursor-pointer" />
        </div>

      </div>

      <div className="bg-[#F2F2F2] pt-10 pb-10 px-5 sm:px-10 flex flex-col lg:flex-row lg:flex-wrap lg:justify-between gap-6">
        {/* Column 1 */}
        <div className="flex flex-col gap-5 lg:w-[20%]">
          <div className="flex gap-2 items-center">
            <img src="/plant.png" alt="Plant" className="w-8 h-8 sm:w-10 sm:h-10" />
            <h1 className="text-[#1A1A1A] font-poppins text-2xl sm:text-3xl font-medium leading-tight tracking-tight">Ecobazar</h1>
          </div>
          <p className="text-[#808080] font-poppins text-sm sm:text-base leading-relaxed">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
          <p className="font-poppins text-[14px] font-medium leading-[150%] text-[#1A1A1A]">
            <span className="border-b-2 border-[#00B207] pb-1">(219) 555-0114</span>
            <span className="text-[#808080] px-2">or</span>
            <span className="border-b-2 border-[#00B207] pb-1">Proxy@gmail.com</span>
          </p>

        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2 lg:w-[12%]">
          <h4 className="mb-2 sm:mb-4 text-[#1A1A1A] font-semibold font-poppins text-base sm:text-[16px] leading-[150%]">My Account</h4>
          <p className="text-[#666666] font-poppins text-sm sm:text-[14px] leading-[150%]">My Account</p>
          <p className="text-[#666666] font-poppins text-sm sm:text-[14px] leading-[150%]">Order History</p>
          <p className="text-[#666666] font-poppins text-sm sm:text-[14px] leading-[150%]">Shoping Cart</p>
          <p className="text-[#666666] font-poppins text-sm sm:text-[14px] leading-[150%]">Wishlist</p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2 lg:w-[12%]">
          <h4 className="mb-2 sm:mb-4 text-[#1A1A1A] font-semibold font-poppins text-base sm:text-[16px] leading-[150%]">Helps</h4>
          <p className="text-[#666666] font-poppins text-sm sm:text-[14px] leading-[150%]">Contact</p>
          <p className="text-[#666666] font-poppins text-sm sm:text-[14px] leading-[150%]">Faqs</p>
          <p className="text-[#666666] font-poppins text-sm sm:text-[14px] leading-[150%]">Terms & Conditions</p>
          <p className="text-[#666666] font-poppins text-sm sm:text-[14px] leading-[150%]">Privacy Policy</p>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-2 lg:w-[12%]">
          <h4 className="mb-2 sm:mb-4 text-[#1A1A1A] font-semibold font-poppins text-base sm:text-[16px] leading-[150%]">Proxy</h4>
          <p className="text-[#666666] font-poppins text-sm sm:text-[14px] leading-[150%]">About</p>
          <p className="text-[#666666] font-poppins text-sm sm:text-[14px] leading-[150%]">Shop</p>
          <p className="text-[#666666] font-poppins text-sm sm:text-[14px] leading-[150%]">Product</p>
          <p className="text-[#666666] font-poppins text-sm sm:text-[14px] leading-[150%]">Track Order</p>
        </div>

        {/* Column 5 */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <h4 className="mb-2 sm:mb-6 text-[#1A1A1A] font-semibold font-poppins text-base sm:text-[16px] leading-[150%]">Download Mobile App</h4>
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <div className="flex bg-white items-center p-2 sm:p-3 gap-2 w-full sm:w-auto">
              <img src="/appstore.png" alt="App Store" className="w-7 h-7 sm:w-8 sm:h-8" />
              <div className="flex flex-col">
                <p className="text-[#4D4D4D] font-poppins text-[11px] sm:text-xs font-normal leading-[130%]">Download On The</p>
                <h3 className="text-[#1A1A1A] font-poppins text-sm sm:text-[16px] font-medium leading-[150%]">App Store</h3>
              </div>
            </div>

            <div className="flex bg-white items-center p-2 sm:p-3 gap-2 w-full sm:w-auto">
              <img src="/googleplay.png" alt="Google Play" className="w-6 h-6 sm:w-6 sm:h-6" />
              <div className="flex flex-col">
                <p className="text-[#4D4D4D] font-poppins text-[11px] sm:text-xs font-normal leading-[130%]">Download On The</p>
                <h3 className="text-[#1A1A1A] font-poppins text-sm sm:text-[16px] font-medium leading-[150%]">Google Play</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-col sm:flex-row gap-3 sm:gap-0 items-center p-7 py-7">
        <p className="text-[#808080] font-poppins text-sm font-normal leading-[150%]">Ecobazar eCommerce © 2021. All Rights Reserved</p>
        <div className="flex gap-1">
          <img src="/applepay.png" alt="" className="w-[45px] h-[31px]" />
          <img src="/visapay.png" alt="" className="w-[45px] h-[31px]" />
          <img src="mastercard.png" alt="" className="w-[45px] h-[31px]" />
          <img src="/discoverpay.png" alt="" className="w-[45px] h-[31px]" />
        </div>
      </div>

    </section>
  );
}
