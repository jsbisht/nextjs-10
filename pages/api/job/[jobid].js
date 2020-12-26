import { connectToDatabase } from "../../../utils/mongodb";
import { SUBMISSIONS, JOBS } from "../../../utils/constants";

export default async function handler(req, res) {
  const {
    query: { jobid }
  } = req;

  const { db } = await connectToDatabase();

  if (req.method === "POST" && jobid === "apply") {
    try {
      await db.collection(SUBMISSIONS).insertOne(req.body);
      res.send(200).json({ msg: "Successfully applied" });
    } catch (e) {
      res.send(500).json({ msg: "Failed to apply" });
    }
  } else {
    const job = await db
      .collection(JOBS)
      .find({ jobid })
      .sort({ timestamp: -1 })
      .limit(20)
      .toArray();

    res.status(200).json({ ...job[0] });
  }
}
