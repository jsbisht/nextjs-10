import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/Home.module.css";

function Job(props) {
  const {
    job: { id }
  } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          JobId: <a href="https://nextjs.org">{id}</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      `/123`
    ],
    fallback: true
  };
}

// This function gets called at build time
export async function getStaticProps(context) {
  console.log(context.params);
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/api/job/123");
  const job = await res.json();

  return {
    props: {
      job
    }
  };
}

export default Job;
