import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <main className="flex m-3">
        <ul>
          <li>
            <Link href="/week1">
              <a className="text-blue-600">Week 1</a>
            </Link>
            <p>Overview and getServerSideProps</p>
          </li>
          <li>
            <Link href="/week2">
              <a className="text-blue-600">Week 2</a>
            </Link>
            <p>
              getStaticProps, getStaticPaths, Incremental Static Regeneration
              and Client Side fetching
            </p>
          </li>
          <li>
            <Link href="/week3">
              <a className="text-blue-600">Week 3</a>
            </Link>
            <p>Handling Pages layouts</p>
          </li>
          <li>
            <Link href="/week4">
              <a className="text-blue-600">Week 4</a>
            </Link>
            <p>Image Handling</p>
          </li>
        </ul>
      </main>
      <footer className="mt-10 flex justify-end mr-3">
        <a
          href="https://github.com/shahroz-ansari/nextjs"
          className="text-blue-600"
        >
          Source Code
        </a>
      </footer>
    </div>
  );
};

export default Home;
