import React from "react";
// Import your blog post component if you have one
// import BlogPost from '../components/BlogPost';

// Placeholder for blog data - replace with actual data fetching logic
const blogPosts = [
    {
        id: 1,
        title: "5 Ways to Improve Your Wellness Journey",
        excerpt:
            "Discover the key strategies for enhancing your personal wellness journey...",
        // Truncated for brevity
    },
    {
        id: 5,
        title: "Understanding Nutrition: Beyond Calories",
        excerpt:
            "Explore the importance of micronutrients and how they affect your health...",
        // Truncated for brevity
    },
    {
        id: 3,
        title: "Understanding Nutrition: Beyond Calories",
        excerpt:
            "Explore the importance of micronutrients and how they affect your health...",
        // Truncated for brevity
    },
    {
        id: 4,
        title: "Understanding Nutrition: Beyond Calories",
        excerpt:
            "Explore the importance of micronutrients and how they affect your health...",
        // Truncated for brevity
    },
    // ... more blog posts
];

const Blog = () => {
    return (
        <section className="bg-[#f2e1f2] py-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-[#c10891] mb-4">
                        Insights Hub
                    </h1>
                    <p className="text-lg text-gray-700">
                        Dive into our latest blogs and articles to gain deeper
                        insights into health and wellness.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Map over the blogPosts array to render individual blog posts */}
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-lg shadow-lg p-6 shadow-2xl transition-transform duration-1000 transform hover:scale-110 duration-300 hover:"
                        >
                            <h2 className="text-2xl text-[#c10891] font-bold mb-3">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            {/* Replace with a link to the blog post */}
                            <a
                                href={`/blog/${post.id}`}
                                className="text-[#c10891] hover:underline"
                            >
                                Read more
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
