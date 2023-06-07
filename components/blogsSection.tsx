import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import RecentBlogPosts from "./RecentBlogPosts"

const blogs = [
  // {
  //   name: "Thankful Thoughts",
  //   description:
  //     "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
  //   image: "/thankfulthoughts.png",
  //   github: "https://github.com/hqasmei/thankful-thoughts",
  //   link: "https://thankfulthoughts.io/",
  // },
  {
    // name: "PlatoIO",
    // description: "PlatoIO is a to do list app that built using the PERN stack.",
    image: "/platoio.jpg",
    github: "https://github.com/2006-sk",
    link: "https://shresthk4.wordpress.com",
  },
  
  // {
  //   name: "Kator Family Photos",
  //   description:
  //     "Kator Family Photos is a photos and video digitization service in the LA area.",
  //   image: "/familyphotos.png",
  //   github: "https://github.com/hqasmei/katorfamilyphotos",
  //   link: "https://katorfamilyphotos.com/",
  // },
]

const BlogsSection = () => {
  return (
    <section id="blogs">
      <h1 className="my-10 text-center font-bold text-4xl">
        To read my Blogs
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {blogs.map((blog, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={blog.link}>
                      <Image
                        src={blog.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{blog.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {blog.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={blog.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={blog.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default BlogsSection
