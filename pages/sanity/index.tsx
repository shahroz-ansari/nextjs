import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { query } from "../../utils/sanity";

const SanityDemo: NextPage<PageProps> = (props) => {
  useEffect(() => {
    console.log(props.products);
  }, [props.products]);
  return (
    <div>
      <ul>
        {props.products?.map((p) => (
          <li key={p._id}>{p.title}</li>
        ))}
      </ul>
      <hr />
      <Link href="/sanity/product1">
        <a className="text-blue-8">Product page 1</a>
      </Link>
      <Link href="/sanity/product2">
        <a className="text-blue-8">Product page 2</a>
      </Link>
    </div>
  );
};

interface PageProps {
  products: Array<any>;
}

export default SanityDemo;

// This gets called on every request
export async function getServerSideProps() {
  const data = await query('*[_type=="product"]');
  return { props: { products: data.result } };
}
