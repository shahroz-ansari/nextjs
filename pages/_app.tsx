import "../styles/globals.css";
import AppLayout from "../components/layout/app";
import { AppPropsExtended } from "../types";
import { useRouter } from "next/router";
import pageconfig from "../utils/pageconfig";

function MyApp({ Component, pageProps }: AppPropsExtended) {
  const router = useRouter();
  console.log(router);
  return (
    <AppLayout
      title={
        pageProps?.pageTitle?.toUpperCase() ||
        pageconfig[router.pathname]?.title ||
        ""
      }
    >
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
