import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobApplications } from "../../utils/localstorage";
import Job from "../Job/Job";

const Applied = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      console.log(remoteJobs);
      setDisplayJobs(remoteJobs);
    } else if (filter === "on-site") {
      const onSiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onSiteJobs);
    }
  };

  useEffect(() => {
    const storedJobsId = getJobApplications();
    if (jobs.length > 0) {
      const appliedJobs = jobs.filter((job) => storedJobsId.includes(job.id));
      setAppliedJobs(appliedJobs);
      setDisplayJobs(appliedJobs);
    }
  }, [jobs]);
  return (
    <div>
      <h4 className="text-xl">Applied Jobs: {appliedJobs.length}</h4>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Pick the best fantasy franchise</span>
          <span className="label-text-alt">Alt label</span>
        </div>
        <select className="select select-bordered">
          <option disabled selected>
            Pick one
          </option>
          <option value="all" onClick={() => handleJobsFilter("all")}>
            Star Wars
          </option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
        <div className="label">
          <span className="label-text-alt">Alt label</span>
          <span className="label-text-alt">Alt label</span>
        </div>
      </label>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter("remote")}>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>

      <div>
        {displayJobs.map((job) => (
          <li key={job.id} job={job}>
            {job.job_title} {job.company_name}
            {job.remote_or_onsite}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Applied;
