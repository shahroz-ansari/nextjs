import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { getCountryData } from "../api/country";

const CountryInfo: NextPage<PageProps> = (props) => {
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
          {props.name}
        </h1>
      </header>
      <section>{props.description}</section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { name: "india" } }, { params: { name: "usa" } }],
    fallback: true, // false or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params;
  const name = params?.name;
  const data = await getCountryData(name);
  return {
    props: data,
  };
};

interface PageProps {
  name: string;
  description: string;
}

export default CountryInfo;
