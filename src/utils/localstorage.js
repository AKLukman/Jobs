// is it stored or not
const getJobApplications = () => {
  const storedJobApplication = localStorage.getItem("job-applocation");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedJobApplication = getJobApplications();
  const exist = storedJobApplication.find((jobId) => jobId === id);
  if (!exist) {
    storedJobApplication.push(id);
    localStorage.setItem(
      "job-applocation",
      JSON.stringify(storedJobApplication)
    );
  }
};

export { saveJobApplication, getJobApplications };
