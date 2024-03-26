import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";
const JobDetails = () => {

    const jobs=useLoaderData();
    const {id}=useParams()
    const Intid=parseInt(id)
    const job=jobs.find(job=>job.id===Intid)
    console.log(job)
    const handleApplied=()=>{

        saveJobApplication(Intid)
        toast('You have Applied successfully')
    }
    
    return (
        <div>
            <h2>
                Job details of:{id}

            </h2>
            <div className="grid grid-cols-4 gap-4 border">
                <div className="grid col-span-3">
                    <h2>Details coming here</h2>
                </div>
                <div className="border ">
                  <h2>  Side things</h2>
                    <button onClick={handleApplied} className="btn btn-primary w-full">Apply now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;