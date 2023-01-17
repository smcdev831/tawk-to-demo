import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tawk.to Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the testing space for Tawk.to!" />
        <p className="description"></p>
      </main>

      <Footer />
    </div>
  );
}
