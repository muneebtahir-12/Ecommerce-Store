"use client"
import ReviewsCard from "./ReviewsCard"
import data from "../data/data.json";
export default function Reviews(){
    const reviews = data.reviews;
    return(
        <>
          <section className="bg-[#F2F2F2] ml-5 mr-5 sm:ml-9 sm:mr-9 mb-15">
            <div className="flex flex-col">
                    <p className="text-[#00B207] mt-10 text-center font-poppins text-sm font-medium leading-none tracking-[0.28px] uppercase">Client Testiomial</p>
                    <h3 className="text-[#1A1A1A] mb-10 text-center font-poppins text-4xl font-semibold leading-[120%]">What Our Client Says</h3>
                </div>
            <div className="grid md:grid-cols-3 gap-3">
                {reviews.map((review) => (
                <ReviewsCard key={review.id} id={review.id} name={review.name} image={review.image} review={review.review} />
            ))}
            </div>
        </section>
        </>
    )
}