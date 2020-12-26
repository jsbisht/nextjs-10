export default function handler(req, res) {
  const {
    query: { jobid }
  } = req;

  res.status(200).json({ id: jobid });
}
