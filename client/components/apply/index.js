import styles from "../../../styles/Home.module.css";
import { useInput } from "../../hooks/useInput";

export default function Apply(props) {
  const { jobid } = props.job;
  const { value, bind, reset } = useInput("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/api/job/apply", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: value, jobid })
    }).then((res) => {
      if (res.status === 200) {
        reset();
      }
    });
  }

  return (
    <div className={styles.grid}>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" {...bind} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
