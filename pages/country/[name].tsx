import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getCountryData } from "../api/country";

const CountryInfo: NextPage<PageProps> = (props) => {
  return (
    <div>
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
    props: { ...data, pageTitle: name },
  };
};

interface PageProps {
  name: string;
  description: string;
}

export default CountryInfo;
