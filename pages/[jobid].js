import { useRouter } from "next/router";

const Job = () => {
  const router = useRouter();
  const { jobid } = router.query;

  return <p>Job: {jobid}</p>;
};

export default Job;
