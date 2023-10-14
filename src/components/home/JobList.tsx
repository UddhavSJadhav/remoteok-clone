import JobCard from "./JobCard";

const JobList = () => {
  return (
    <div>
      {new Array(5).fill(null).map((_, i) => (
        <JobCard key={i} />
      ))}
    </div>
  );
};

export default JobList;
