import styles from "../../../styles/Home.module.css";

export function Card(props) {
  const {
    job: { jobid, jobTitle, jobDesc }
  } = props;
  return (
    <a href={`/${jobid}`} className={styles.card}>
      <h3>{jobTitle} &rarr;</h3>
      <p>{jobDesc}</p>
    </a>
  );
}

export default function Cards(props) {
  const { jobs } = props;

  return (
    <div className={styles.grid}>
      {jobs && jobs.map((job, index) => <Card job={job} key={index} />)}
    </div>
  );
}
