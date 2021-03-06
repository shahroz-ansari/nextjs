import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";

const OnDemandISR: NextPage<PageProps> = (props) => {
  const regerateMe = useCallback(async () => {
    const response = await fetch("/api/revalidate_isr_ondemand");
    const data = await response.json();
    console.log(data);
    alert("Revalidated " + (data.revalidated ? "Done" : `ERROR:${data.error}`));
  }, []);
  return (
    <div>
      <section>This page regenerated itself on demand only</section>
      <section>
        To regerate this page{" "}
        <button onClick={regerateMe} className="text-blue-600 font-semibold">
          click here
        </button>{" "}
        and refresh or navigate to this page again.
      </section>
      <section>
        Last Regerated timestamp: <span className="italic">{props.time}</span>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { time: new Date().toString() },
  };
};

interface PageProps {
  time: string;
}

export default OnDemandISR;
