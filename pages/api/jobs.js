// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from "../../utils/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const jobs = await db
    .collection("jobs")
    .find({})
    .sort({ timestamp: -1 })
    .limit(20)
    .toArray();

  res.statusCode = 200;
  res.json(jobs);
};
