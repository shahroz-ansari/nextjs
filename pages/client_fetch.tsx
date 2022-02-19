import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import { __get } from "../utils/fetcher";

const ClientFetch: NextPage<PageProps> = (props) => {
  const router = useRouter();
  const { data, error } = useSWR("/api/country?name=india", __get);
  const appError = (() => {
    try {
      return JSON.parse(error);
    } catch (error) {
      return { message: "Internal Server Error", error: true };
    }
  })();

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
          Fetching at client
        </h1>
      </header>

      <main>
        <section>
          This generates at build time and fetch data at client side only
        </section>
        <div className="border border-green-400 p-4 m-2">
          {!data && !error && (
            <span className="font-bold text-2xl">Loading...</span>
          )}
          {error && (
            <span className=" text-red-600">{appError.message || "Error"}</span>
          )}
          {data && (
            <div>
              <div>{data.name}</div>
              <div>{data.description}</div>
            </div>
          )}
        </div>
      </main>
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

export default ClientFetch;
