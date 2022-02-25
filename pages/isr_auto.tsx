import type { GetStaticProps, NextPage } from "next";

const AutoISR: NextPage<PageProps> = (props) => {
  return (
    <div>
      <section>
        This page regenerated itself after every minute on following req and
        serve updated at next req, so refresh 2 times.
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
    revalidate: 60,
  };
};

interface PageProps {
  time: string;
}

export default AutoISR;
