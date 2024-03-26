
import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";


const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, } = job
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure className="w-40 h-20"><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex">
                    <button className="btn border border-indigo-600 mr-6">{remote_or_onsite}</button>
                    <button className="btn border border-indigo-600">{job_type}</button>
                </div>
                <div className="flex gap-4">
                    <h2 className="flex">
                        <CiLocationOn className="text-2xl mr-2"></CiLocationOn>{location}
                    </h2>
                    <h2 className="flex">
                        <CiDollar className="text-2xl mr-2" ></CiDollar>{salary}
                    </h2>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}>
                    <button className="btn btn-primary mt-6">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;