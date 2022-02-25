import type { NextPage } from "next";
import Link from "next/link";

const Week2: NextPage<PageProps> = (props) => {
  return (
    <div>
      <main className="m-3">
        <div>
          <span className="font-bold">getStaticProps</span> runs on build time
          and is used to prepopulate page, getStaticPaths can only be used with
          getStaticProps
        </div>
        <div>
          <span className="font-bold">getStaticPaths</span> tells getStaticProps
          what pages needs to be statically generated
        </div>
        <div className="border-b py-4">
          Here we have route{" "}
          <span className="italic text-gray-500">/country/[name]</span>, where{" "}
          <span className="italic text-gray-500">
            <Link href="/country/india">
              <a className="text-blue-600">India</a>
            </Link>
          </span>{" "}
          and{" "}
          <span className="italic text-gray-500">
            <Link href="/country/usa">
              <a className="text-blue-600">USA</a>
            </Link>
          </span>{" "}
          are generated at build setTimeout but{" "}
          <span className="italic text-gray-500">
            <Link href="/country/england">
              <a className="text-blue-600">England</a>
            </Link>
          </span>{" "}
          will be generated only on request.
        </div>
        <div className="border-b py-4">
          <span className="font-bold">Incremental Static Regeneration</span>
          <div>
            This page auto generate itself{" "}
            <span className="font-semibold">every minute on upcoming req</span>.{" "}
            <Link href="/isr_auto">
              <a className="text-blue-600">goto page</a>
            </Link>
          </div>
          <div>
            This page auto generate itself{" "}
            <span className="font-semibold">on demand</span> only.{" "}
            <Link href="/isr_ondemand">
              <a className="text-blue-600">goto page</a>
            </Link>
          </div>
        </div>
        <div className="border-b py-4">
          <span className="font-bold">Client Side fetching</span>
          <div>
            This page fetch data at client side only{" "}
            <Link href="/client_fetch">
              <a className="text-blue-600">goto page</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

interface PageProps {}

export default Week2;
