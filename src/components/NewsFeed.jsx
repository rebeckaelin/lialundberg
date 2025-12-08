import { useState, useEffect } from "react";
import UpdatePosts from "../components/UpdatePosts";
import { client } from "../client";
import { ChevronDown } from "lucide-react";
import DividerLine from "./DividerLine";

const query = `*[_type == "post"] | order(postDate desc) {
  postDate,
  title,
  description
}`;
const NewsFeed = () => {
  const [showAll, setShowAll] = useState(false);
  const [posts, setPosts] = useState("");

  useEffect(() => {
    client.fetch(query).then((data) => {
      setPosts(data);
    });
  }, []);

  if (!posts) return <div>Loading…</div>;

  return (
    <>
      <section className="py-10 bg-primary/20 relative overflow-hidden font-second">
        {/* Decorative circles - subtle background elements */}
        {/* <div className="absolute w-[400px] h-[400px] rounded-full bg-white/20 -top-[200px] -right-[100px]"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full bg-primary/5 -bottom-[150px] -left-[50px]"></div> */}

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className=" mb-16 flex flex-col items-center">
            <DividerLine />
            <h2 className="text-3xl sm:text-4xl py-4 font-semibold text-center">
              Aktuellt
            </h2>
            <p className="text-lg text-center text-black/80 max-w-2xl ">
              Håll dig uppdaterad med senaste nyheterna och kommande evenemang
            </p>
          </div>

          {/* Posts grid with overflow container */}
          <div className="relative">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12  ${
                showAll ? "max-h-none" : "max-h-[380px] overflow-hidden"
              }`}
            >
              {posts.map((post, index) => (
                <UpdatePosts
                  key={index}
                  postDate={post.postDate}
                  title={post.title}
                  description={post.description}
                />
              ))}
            </div>

            {/* Gradient overlay when not expanded */}
            {!showAll && posts.length > 3 && (
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/20 to-transparent"></div>
            )}
          </div>

          {posts.length > 3 && (
            <div className="text-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowAll(!showAll);
                }}
                className="w-[260px] inline-flex items-center justify-center px-8 py-4 bg-[#2c3e50] text-white font-second tracking-wider rounded-lg  hover:font-semibold cursor-pointer gap-1 text-lg"
              >
                {showAll ? "Visa färre nyheter" : "Visa fler nyheter"}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    showAll ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default NewsFeed;
