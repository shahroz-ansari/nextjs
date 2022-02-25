import Link from "next/link";
import { FC, ReactNode } from "react";
import { useRouter } from "next/router";

const AppLayout: FC<PageProps> = ({ children, title }) => {
  const router = useRouter();
  return (
    <div>
      <div className="flex">
        <div className="mx-2 text-blue-600">
          <Link href="/">Home</Link>
        </div>
        <button className="mx-2 text-blue-600" onClick={router.back}>
          Back
        </button>
      </div>
      <header className="flex">
        <h1 className="text-3xl w-full flex justify-center my-3 font-bold">
          {title}
        </h1>
      </header>
      {children}
    </div>
  );
};
interface PageProps {
  title: string | ReactNode;
}

export default AppLayout;
