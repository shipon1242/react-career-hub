import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";


const AppliedJobs = () => {
    const [appliedJobs,setAppliedJobs]=useState([])
    const jobs=useLoaderData()
    useEffect(()=>{
        const storedJobsIds=getStoredJobApplication();
        if(jobs.length>0){
            // const jobApplied=jobs.filter(job=>storedJobsIds.includes(job.id));
            const jobsApplied=[];
            for(const id of storedJobsIds){
                const job=jobs.find(job=>job.id === id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied)
            // console.log(jobs,storedJobsIds,jobApplied)
        }
       
    },[])
    return (
        <div>
            <h3>Jobs i Applied:{appliedJobs.length}</h3> 
        </div>
    );
};

export default AppliedJobs;