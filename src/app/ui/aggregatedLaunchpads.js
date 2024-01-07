import Link from "next/link";
import Image from "next/image";
import pinksaleImage from "../../assets/PINKSALE.png";
import gempadImage from "../../assets/GEMPAD.png";
import uncxImage from "../../assets/UNCX.png";
import dxsaleImage from "../../assets/DXSALE.png";
import kingpadImage from "../../assets/KINGPAD.png";
import cookiesaleImage from "../../assets/CookieSale.png";

export default function AggregatedLaunchpads() {
  return (
    <section className="mt-40 mb-20">
      <h1 className="cont text-[2.1em] md:text-4xl blue-text text-center">Integrated Launchpads</h1>
      <div className="flex-center flex-col xl:flex-row gap-5 md:gap-20 mt-10 max-w-[1200px] w-[95%] mx-auto">
        <div className="flex-center md:gap-20">
          <LaunchpadItem image={pinksaleImage} title="Pinksale" />
          <LaunchpadItem image={gempadImage} title="Gempad" />
          <LaunchpadItem image={uncxImage} title="UNCX" />
        </div>
        <div className="flex-center md:gap-20">
          <LaunchpadItem image={dxsaleImage} title="DXSALE" isNew />
          <LaunchpadItem image={kingpadImage} title="KINGPAD" isNew />
          <LaunchpadItem image={cookiesaleImage} title="COOKIESALE" isNew />
        </div>
      </div>
      <div className="flex-center flex-col mt-20 gap-5">
        <p className="nunito text-lg mx-5 md:text-xl text-center opacity-80 text-white">
          Integrate your launchpad with GrokGPT <br /> for enhanced performance and expand your reach.
        </p>
        <Link href="https://www.grokgpt.com/integrate.html"  className="blue-grad px-10 py-5 rounded-lg cont link-btn text-lg turner">
            <p className="turn-child text-xl">Get Started</p>
        
        </Link>
      </div>
    </section>
  );
}

function LaunchpadItem({ image, title, isNew = false }) {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" className="flex-center flex-col gap-3 m-2 w-[100px] md:w-[50%] sm:w-auto aos-init">
      <Image src={image} alt={title} className="h-[90px] md:h-[130px] object-contain" />
      <p className="cont text-center text-xs md:text-sm text-gray-200 uppercase">{title}</p>
      {isNew && <p className="absolute top-0 right-0 text-[8px] md:text-sm bg-blue text-black p-1 rounded-full">NEW</p>}
    </div>
  );
}
