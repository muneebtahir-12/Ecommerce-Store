import data from "../components/data/data.json"
import BlogCards from "./BlogsCards"
export default function Blog(){
    const blog=data.blogs;
    return(
        <section className="grid sm:grid-cols-2 grid-cols-1 gap-3">
            {blog.map((b)=>(
                <BlogCards key={b.id} id={b.id} description={b.description} image={b.image}/>
            ))}
        </section>
    )
}