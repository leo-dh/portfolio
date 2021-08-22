import { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import { Layout } from "@components";

const App = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.div
          key={router.pathname}
          initial="initial"
          animate="animate"
          exit="initial"
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default App;
