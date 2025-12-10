import data from "../../components/data/data.json"
export default function CommentForm() {
    const comment = data.comments;
    return (
        <>
            <div className="max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-4">Leave a Comment</h3>

                <form className="space-y-4">
                    {/* Name and Email Row */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1" htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Zakir Hossen"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none " />
                        </div>

                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="zakirsoft.20@gmail.com"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            placeholder="Write your comment here..."
                            className="w-full border border-gray-300 rounded-md px-3 py-2 h-32 resize-none focus:outline-none "></textarea>
                    </div>

                    {/* Save Info Checkbox */}
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="saveInfo" className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                        <label htmlFor="saveInfo" className="text-sm text-gray-600">
                            Save my name and email in this browser for the next time I comment.
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="bg-green-600 text-white font-medium px-6 py-2 rounded-full hover:bg-green-700 transition-colors"> Post Comments</button>
                </form>
            </div>

            <div className=" mx-auto mt-10">
                <h2 className="text-xl font-semibold mb-4">Comments</h2>
                <div className="flex flex-col divide-y divide-gray-200">
                    {comment.map(comment => (
                        <div key={comment.id} className="flex gap-3 py-4">
                            <img
                                src={comment.avatar}
                                alt={comment.name}
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">{comment.name} <span className="font-normal text-gray-500">• {comment.date}</span></p>
                                <p className="text-gray-600 mt-1">{comment.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="mt-4 px-4 py-2 border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition">
                    Load More
                </button>
            </div>
        </>
    );
}
