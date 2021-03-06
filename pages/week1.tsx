import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Week1: NextPage<PageProps> = (props) => {
  // setting name at server
  const [name, setName] = useState(props.name);

  useEffect(() => {
    // update the name at client
    setTimeout(() => {
      setName("Ansariiii");
    }, 5000);
  }, []);

  console.log("--------------", name);

  return (
    <div>
      <main className="flex m-3">
        <h1>
          Hello <span className="text-red-600">{name}</span>
        </h1>
      </main>
      <footer className="p-3 mt-5 text-gray-600">
        <p>
          When refreshed page will render at server with name Shahroz and
          served, then after 5 seconds it will change to Ansari at client side.
        </p>
        <p>
          When Navigating using next/link only props as a json will come from
          server and whole process is at client side.
        </p>
      </footer>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  /**
   * Do whatever you want to do on server and return props to component
   * your component render at server with passed props and served
   */

  return { props: { name: "Shahrozzzz" } };
}

interface PageProps {
  name: string;
}

export default Week1;
