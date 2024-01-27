import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  return (
    <main className="bg-white px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">My Portfolio</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer">
              <BsFillMoonStarsFill />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 ">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            Ujjwal Singh
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl">Frontend Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
            Self-motivated front-end development technologies, including React,
            Tailwind, JavaScript, HTML, CSS, Bootstrap, Git, and GitHub, I am
            eager to contribute my skills and passion for creating interactive
            and responsive web applications. Seeking a challenging entry-level
            position in a growth-oriented organization where I can leverage my
            technical expertise.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillGithub />
          <AiFillLinkedin />
          <AiFillInstagram />
        </div>
        <div className="overflow-hidden relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto md:h-96 md:w-96">
          <Image src={deved} layout="fill" objectFit="cover" />
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">My Projects</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            Hi my projects are ...
            <span className="text-teal-500">developer</span>
            qafeqwfw deger dfgh<span className="text-teal-500">developer</span>
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className=" my-10 text-center shadow-lg p-10 rounded-xl">
            <Image className="mx-auto" src={design} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
            <p className="py-2">Creating elegant designds</p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
          <div className="my-10 text-center shadow-lg p-10 rounded-xl">
            <Image className="mx-auto" src={code} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
            <p className="py-2">Creating elegant designds</p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
        </div>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Hi my projects are ...
              <span className="text-teal-500">developer</span>
              qafeqwfw deger dfgh
              <span className="text-teal-500">developer</span>
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-grow">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                layout="responsive"
                height={"100%"}
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                layout="responsive"
                height={"100%"}
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                layout="responsive"
                height={"100%"}
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                layout="responsive"
                height={"100%"}
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                layout="responsive"
                height={"100%"}
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                layout="responsive"
                height={"100%"}
                src={web6}
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
