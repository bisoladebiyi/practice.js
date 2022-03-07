import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/button";
import Navbar from "../components/navbar";
import element from "../images/Vector 4.svg";
import js from "../images/javascript-js-seeklogo.com.svg";
import ts from "../images/typescript-seeklogo.com.svg";
import react from "../images/react-seeklogo.com.svg";

const Home: NextPage = () => {
  return (
    <div className="container home relative">
      <Head>
        <title>Practice.js - Home</title>
      </Head>
      <Navbar />
      <div className="flex items-center justify-between w-9/12 mx-auto mt-12">
        <div>
          <h1 className="text-4xl font-extrabold leading-relaxed mb-6">
            Sharpen your <br />
            Javascript, Typescript and <br />
            React.js skills!
          </h1>
          <div className="py-1 border-l pl-3 text-gray-400 border-gray-700 flex items-center">
            <p>Let&apos;s help you practice.</p>
          </div>
          <Button size="big" className="mt-10 btn">
            Get Started
          </Button>
        </div>

        <div className="grid grid-cols-2 place-items-center gap-10 relative">
          <Image src={ts} alt="typescript logo" width={170} />
          <Image src={js} alt="javascript logo" width={170} />
          <div className="col-span-2 -mt-20">
            <Image src={react} alt="react logo" width={170} />
          </div>
          <p className="absolute top-0 -left-10 font-bold text-purp -rotate-12">
            <del>var</del> let{" "}
            <span className="text-gray-700">x:number = 5</span>
          </p>
          <p className="absolute -right-40 font-bold text-purp rotate-90">
            (<span className="text-orange-400"> message </span>) ={">"}
            <span className="text-gray-700 ">
              {" "}
              {"{ console.log( message ) }"}
            </span>
          </p>
          <p className="absolute -left-2 bottom-14 font-bold text-purp rotate-12">
            {"<jsx stuffs!>"}
          </p>
        </div>
      </div>

      <div className="absolute -bottom-5 left-0">
        <Image src={element} alt="element" />
      </div>
    </div>
  );
};

export default Home;
