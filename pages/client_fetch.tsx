import type { GetStaticProps, NextPage } from "next";
import useSWR from "swr";
import { __get } from "../utils/fetcher";

const ClientFetch: NextPage<PageProps> = (props) => {
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
