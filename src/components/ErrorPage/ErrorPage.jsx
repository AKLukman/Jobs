import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center space-y-5">
      <h1>OOps!!</h1>
      <div>
        {" "}
        <Link to="/">
          <button className="btn btn-outline btn-info">Go Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
