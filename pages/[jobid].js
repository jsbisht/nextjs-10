import Head from "next/head";
import styles from "../styles/Home.module.css";

function Job(props) {
  const { job } = props;
  const { jobid, jobTitle, jobDesc } = job;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          JobId: <a href={`/${jobid}`}>{jobid}</a>
        </h1>
        <p>{jobTitle}</p>
        <p>{jobDesc}</p>
        <div>
          <input type="text" placeholder="Enter email id here" />
          <button type="submit">Apply</button>
        </div>
        <br />
        <a href="/">&lt;&lt; Back</a>
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
  const res = await fetch("http://localhost:3000/api/jobs");
  const jobs = await res.json();

  return {
    // Add all possible values of jobid
    paths: jobs.map(({ jobid }) => `/${jobid}`),
    fallback: true
  };
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/api/job/reed");
  const job = await res.json();

  return {
    props: {
      job
    }
  };
}

export default Job;
