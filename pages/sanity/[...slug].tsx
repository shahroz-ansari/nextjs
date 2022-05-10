import type { NextPage } from "next";
import { useEffect } from "react";
import { query } from "../../utils/sanity";

const SanityDemo: NextPage<PageProps> = (props) => {
  useEffect(() => {
    console.log(props.page);
  }, [props.page]);
  return (
    <ul>
      {props.page[0]?.variants?.map((p: any) => (
        <li key={p._key}>{p.title}</li>
      ))}
    </ul>
  );
};

interface PageProps {
  page: any;
}

export default SanityDemo;

// This gets called on every request
export async function getServerSideProps(context: { params: any }) {
  const params = context.params;
  const slug = params.slug;
  const data = await query(
    `*[_type=="pages" && path == "/sanity/${slug.join("/")}"]`
  );
  return { props: { page: data.result } };
}
