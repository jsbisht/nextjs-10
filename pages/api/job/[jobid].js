import { connectToDatabase } from "../../../utils/mongodb";

export default async function handler(req, res) {
  const {
    query: { jobid }
  } = req;

  const { db } = await connectToDatabase();

  const job = await db
    .collection("jobs")
    .find({ jobid })
    .sort({ timestamp: -1 })
    .limit(20)
    .toArray();

  res.status(200).json({ ...job[0] });
}
