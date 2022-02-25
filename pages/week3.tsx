import type { NextPage } from "next";

const Week3: NextPage<PageProps> = (props) => {
  return (
    <div>
      <main className="flex m-3">
        All pages are using default layout where Page Title Home and Back
        buttons are rendered using Layout component.
      </main>
    </div>
  );
};

interface PageProps {}

export default Week3;
