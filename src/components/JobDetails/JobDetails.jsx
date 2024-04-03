import { AiOutlineDollar } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";
import { MdWorkOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utils/localstorage";

const JobDetails = () => {
  const { id } = useParams();
  const jobs = useLoaderData();

  const intId = parseInt(id);
  const job = jobs.find((job) => job.id === intId);
  const { salary, job_title } = job;

  const handleApplyJob = () => {
    saveJobApplication(intId);
    toast("apply successfully");
  };
  return (
    <div>
      <h3 className="text-2xl font-extrabold text-center py-9">Job Details</h3>
      <div className="grid gap-4 md:grid-cols-3 mt-5 mb-5">
        <div className="border md:col-span-2 p-5 space-y-6">
          <p>
            <span className="font-extrabold">Job Description:</span> A UI/UX
            (User Interface/User Experience) designer is responsible for
            designing and creating engaging and effective interfaces for
            software and web applications. This includes designing the layout,
            visual design, and interactivity of the user interface.
          </p>
          <p>
            <span className="font-extrabold">Job Responsibility:</span>{" "}
            Collaborating with cross-functional teams: UI/UX designers often
            work closely with other teams, including product management,
            engineering, and marketing, to ensure that the user interface is
            aligned with business and technical requirements. You will need to
            be able to effectively communicate your design ideas and gather
            feedback from other team members.
          </p>
          <p className="font-extrabold">Educational Requirements:</p>
          <p>Bachelor degree to complete any reputational university.</p>
          <p className="font-extrabold">Experiences:</p>
          <p>2-3 Years in this field.</p>
        </div>
        <div className="border">
          <div className="bg-gradient-to-r from-purple-100 to-purple-300 pl-2 pb-16">
            <h4 className="text-xl font-extrabold py-7">Job Details</h4>
            <h2 className="flex items-center mb-2">
              <AiOutlineDollar className="mr-1 text-2xl" />
              Salary: {salary} (per month)
            </h2>
            <h2 className="flex items-center">
              <MdWorkOutline className="mr-1 text-2xl" />
              {job_title}
            </h2>

            <h4 className="text-xl font-extrabold py-8">Contact Information</h4>
            <p className="flex items-center mb-2">
              <FaPhoneAlt className="mr-1 " /> Phone: 01750-00 00 00
            </p>
            <p className="flex items-center mb-2">
              <MdOutlineMailOutline className="mr-1" /> Email: info@gmail.com
            </p>
            <p className="flex items-center">
              <CiLocationOn className="mr-1" /> Address: Dhanmondi 32, Sukrabad
              Dhaka
            </p>
          </div>
          <div>
            <button
              onClick={handleApplyJob}
              className="w-full bg-primary rounded-lg text-white py-2 mt-6"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
