export default function Video() {
  return (
    <section className="relative flex flex-col text-center justify-center items-center ml-5 mr-5 mb-15 sm:ml-9 sm:mr-9">
      <img src="/video.png" alt="Video Thumbnail" className="h-50 sm:h-auto"/>

      <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="font-poppins text-white sm:text-[25px] hidden sm:block md:text-[30px] lg:text-[36px] font-semibold leading-[120%] align-center mb-1">We’re the Best Organic <br /> Farm in the World</h3>
        <img src="/Play.png" alt="Play Button" className="cursor-pointer w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-16 lg:h-16" />
      </div>
      
    </section>
  );
}
