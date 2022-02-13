import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <header className="flex">
        <h1 className="text-3xl w-full flex justify-center my-3 font-bold">
          Welcome to <span className="text-blue-600"> Next.js</span>
        </h1>
      </header>
      <main className="flex m-3">
        <ul>
          <li>
            <Link href="/week1">
              <a className="text-blue-600">Week 1</a>
            </Link>
            <p>Overview and getServerSideProps</p>
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
