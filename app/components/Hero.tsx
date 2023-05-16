"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BsArrowRight,
  BsChevronLeft,
  BsChevronRight,
  BsInstagram,
  BsTwitch,
  BsTwitter,
  BsFacebook,
  BsWhatsapp,
} from "react-icons/bs";

type Props = {};

interface Article {
  title: string;
  desc: string;
  imgUrl: string;
  id: number;
}
let currentYear: number = new Date().getFullYear();

const heroArticles: Article[] = [
  {
    title: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    imgUrl: "/desktop-image-hero-1.jpg",
    id: 1,
  },
  {
    title: "We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    imgUrl: "/desktop-image-hero-2.jpg",
    id: 2,
  },
  {
    title: "Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    imgUrl: "/desktop-image-hero-3.jpg",
    id: 3,
  },
];

const Hero = (props: Props) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index === 0) {
      return setIndex(heroArticles.length - 1);
    }
    setIndex(index - 1);
  };
  const handleNext = () => {
    if (index === heroArticles.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  };

  return (
    <main>
      {/* // we are using fr units to make the hero section responsive to the viewport without using media queries or cal functions */}
      <section className="grid grid-cols-4 grid-rows-[6fr_.75fr_10fr] bg-white md:grid-cols-7 md:grid-rows-[10fr_1fr]">
        <div className="col-start-1 col-end-5 row-start-1 row-end-3 ">
          <Image
            src={heroArticles[index].imgUrl}
            alt="hero-img"
            width={600}
            height={600}
            className="h-full w-full object-cover object-center"
            priority
          />
        </div>
        <article className="col-start-1 col-end-5 row-start-3 row-end-4 px-8 py-14 md:col-start-5 md:col-end-8 md:row-start-1 md:row-end-3 md:px-36 md:py-24">
          <h1 className="mb-8 text-4xl font-bold">
            {heroArticles[index].title}
          </h1>
          <p className="mb-8 text-lg text-darkGray">
            {heroArticles[index].desc}
          </p>
          <button className="flex text-xl items-center gap-3 hover:text-darkGray">
            shop now
            <BsArrowRight />
          </button>
        </article>
        <div className="col-start-4 col-end-5 row-start-2 row-end-3 flex bg-black text-white md:col-start-5 md:col-end-6 md:row-start-2 md:row-end-3">
          <button
            className="flex h-full w-full cursor-pointer items-center justify-center hover:bg-almostBlack"
            onClick={handlePrev}
          >
            <BsChevronLeft />
          </button>
          <button
            className="flex h-full w-full cursor-pointer items-center justify-center hover:bg-almostBlack"
            onClick={handleNext}
          >
            <BsChevronRight />
          </button>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-7">
        <div className="md:col-start-1 md:col-end-3">
          <Image
            src="/image-about-dark.jpg"
            alt="img-about-dark"
            width={600}
            height={600}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <article className="bg-white px-8 py-14 md:col-start-3 md:col-end-6 md:px-24 md:py-20">
          <h2 className="mb-5 text-xl font-bold tracking-widest">
            About our Furniture
          </h2>
          <p className="text-lg text-darkGray">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </article>
        <div className="md:col-start-6 md:col-end-8">
          <Image
            src="/image-about-light.jpg"
            alt="img-about-dark"
            width={800}
            height={800}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-7">
        <div className="bg-white px-12 py-14 md:col-start-1 md:col-end-3 md:px-28 md:py-20">
          <h3 className="pb-4 text-xl font-bold">Features</h3>
          <ol className="list-disc text-lg font-light text-darkGray">
            <li>Durability</li>
            <li>Recicled Materials</li>
            <li>Green Processed</li>
            <li>Lorem, ipsum.</li>
            <li>Tenetur unde vero</li>
          </ol>
        </div>
        <div className="md:col-start-3 md:col-end-6">
          <div className="grid h-full w-full grid-cols-6 ">
            <div className="col-start-1 col-end-3">
              <Image
                src="/desktop-image-hero-1.jpg"
                alt="img"
                height={250}
                width={250}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="col-start-3 col-end-5 bg-stone-700"></div>
            <div className="col-start-5 col-end-7 bg-stone-800"></div>
            <div className="col-start-1 col-end-3 bg-stone-500"></div>
            <div className="col-start-3 col-end-5 bg-stone-400"></div>
            <div className="col-start-5 col-end-7 bg-gray-900">
              {" "}
              <Image
                src="/desktop-image-hero-2.jpg"
                alt="img"
                height={250}
                width={250}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="bg-white px-12 py-14 md:col-start-6 md:col-end-8 md:px-24 md:py-20">
          <h3 className="pb-4 text-xl font-bold">Contact</h3>
          <p className="text-darkGray">1270 Runolfsdottir Neck</p>
          <p className="text-darkGray">25363-2595</p>
          <p className="mb-4 text-darkGray">Kingview</p>
          <div className="mb-4 flex gap-5">
            <BsInstagram className="hover:underline cursor-pointer" />
            <BsTwitch className="hover:underline cursor-pointer" />
            <BsTwitter className="hover:underline cursor-pointer" />
            <BsFacebook className="hover:underline cursor-pointer" />
            <BsWhatsapp className="hover:underline cursor-pointer" />
          </div>

          <p className="text-xs font-light">
            All Rights Reserved &copy; {currentYear}.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Hero;
