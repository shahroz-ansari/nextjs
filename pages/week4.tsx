import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";

const Week4: NextPage<PageProps> = (props) => {
  const [view, setView] = useState(400);

  useEffect(() => {
    setTimeout(() => {
      setView(800);
    }, 7000);
  }, []);
  return (
    <div>
      <main className="block m-3">
        {/* <div className="h-[600px] w-[200px] bg-red-400 relative">
          <Image
            src={img1}
            alt={"Static Image"}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div> */}
        <div className="h-[600px] w-[200px] bg-red-400 relative">
          <Image
            src={`https://picsum.photos/id/1/200/${view}`}
            alt={"Static Image"}
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* <div className="h-[800px] w-[1000px] bg-red-400 block">
          <Image
            src={img2}
            alt={"Static Image"}
            layout="responsive"
            placeholder="blur"
            priority
          />
        </div> */}
      </main>
    </div>
  );
};

interface PageProps {}

export default Week4;
