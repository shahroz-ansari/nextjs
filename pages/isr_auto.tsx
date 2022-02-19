import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

const AutoISR: NextPage<PageProps> = (props) => {
  const router = useRouter();
  return (
    <div>
      <header className="flex">
        <div className="flex flex-row">
          <button
            onClick={() => router.back()}
            className="text-blue-600 self-baseline mx-2"
          >
            Back
          </button>{" "}
          |
          <Link href="/">
            <a className="mx-2 text-blue-600">Home</a>
          </Link>
        </div>
        <h1 className="text-3xl w-full flex justify-center my-3 font-bold">
          Auto ISR
        </h1>
      </header>
      <section>
        This page regenerated itself after every minute on following req and
        serve updated at next req, so refresh 2 times.
      </section>
      <section>
        Last Regerated timestamp: <span className="italic">{props.time}</span>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { time: new Date().toString() },
    revalidate: 60,
  };
};

interface PageProps {
  time: string;
}

export default AutoISR;
