// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: "remote-api",
      jobTitle: "Remotive Job API",
      description:
        "Returns the list of all active remote job listings on Remotive job board."
    },
    {
      id: "graphql-jobs",
      jobTitle: "GraphQL Jobs",
      description:
        "Jobs with GraphQL. This API lets you retrieve information in GraphQL."
    },
    {
      id: "freelancer",
      jobTitle: "Freelancer",
      description:
        "Use the Freelancer API to access a cloud workforce of skilled freelancers."
    },
    {
      id: "reed",
      jobTitle: "Reed",
      description:
        "Job board aggregator. API lets you create you own job search with."
    }
  ]);
};
