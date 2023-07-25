import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/ecommer-font.png";
import project2 from "../../public/images/projects/ecommer-admin.png";
import project3 from "../../public/images/projects/account-mern.png";
import project4 from "../../public/images/projects/quiz-mern.png";
import project5 from "../../public/images/projects/blog-mern.png";
import project6 from "../../public/images/projects/youtube-clone.png";
import nodeimge from "../../public/images/projects/node-express.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, 
                (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col item-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] sx:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

function projects() {
  return (
    <>
      <Head>
        <title>Danupol | Projects Page</title>
        <meta
          name="description"
          content="full stack developer React|NextJs|NodeJs"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Ecommerce using NextJS"
                img={project1}
                summary="Fullstack ecommerce app using next.js, mongo database, Tailwind CSS and Stripe. "
                link="https://ecommerce-front-nextjs.vercel.app/"
                github="https://github.com/DanupolDev/ecommerce-front-nextjs"
                type="NextJs Project"
              />
            </div>

            <div className="col-span-12 ">
              <FeaturedProject
                title="Admin Ecommerce using NextJS"
                img={project2}
                summary={`Admin dashboard ecommerce app.
                Try to login admin 
                E-mail:danupol.dev.test@gmail.com 
                Password:danupoldev8835*`}
                link="https://ecommerce-admin-nextjs-six.vercel.app/"
                github="https://github.com/DanupolDev/ecommerce-admin-nextjs"
                type="NextJs Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Account App using React"
                img={project3}
                link="https://login-mern-client.onrender.com"
                github="https://github.com/DanupolDev/account-mern-client"
                type="React Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="API for Account App "
                img={nodeimge}
                link="https://login-mern-server.onrender.com"
                github="https://github.com/DanupolDev/account-mern-server"
                type="NodeJs"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Quiz App using React"
                img={project4}
                link="https://quiz-mern.onrender.com"
                github="https://github.com/DanupolDev/quiz-mern-client"
                type="React Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="API for Quiz App "
                img={nodeimge}
                link="https://quiz-api-86ou.onrender.com"
                github="https://github.com/DanupolDev/quiz-mern-server"
                type="NodeJs"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Blog App using React"
                img={project5}
                link="https://blog-mern-974z.onrender.com"
                github="https://github.com/DanupolDev/blog-mern-client"
                type="React Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="API for Blog App "
                img={nodeimge}
                link="https://blog-mern-api-6g7f.onrender.com"
                github="https://github.com/DanupolDev/blog-mern-server"
                type="NodeJs"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Youtube clone RapidAPI"
                img={project6}
                link="https://youtube-clone-gz60.onrender.com"
                github="https://github.com/DanupolDev/youtube-clone-RapidAPI"
                type="React Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects;
