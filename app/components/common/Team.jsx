"use client"
import TeamCard from "./TeamCard"
import data from "../data/data.json";
export default function Team() {
    const teamMembers = data.team;
    return (
        <>

      <section className="ml-5 mr-5 mb-15 sm:ml-9 sm:mr-9">
          <div className="flex flex-col mb-5">
                    <p className="text-[#00B207] text-center font-poppins text-sm font-medium leading-none tracking-[0.28px] uppercase">Team</p>
                    <h3 className="text-[#1A1A1A] text-center font-poppins text-4xl font-semibold leading-[120%]">Our Professional Members</h3>
                </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                {teamMembers.map((member) => (
                    <TeamCard key={member.id} id={member.id} name={member.name} image={member.image} position={member.position} />
                ))}
            </div>
      </section>
        </>
    )
}