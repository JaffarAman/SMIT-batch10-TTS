import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [jobData, setJobData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const response = await axios.get(
        "https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category="
      );
      console.log("response", response.data);
      setJobData(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log("jobData", jobData);

  return (
    <>
      <h1>Home</h1>

      {jobData?.map((job, index) => {
        console.log("job", job);
        return (
          <div className="jobCard">
            <h1
              onClick={() => {
                navigate(`/jobdetail/${job._id}`);
              }}
            >
              {" "}
              {job.designation}{" "}
            </h1>
            {/* <p
              dangerouslySetInnerHTML={{
                __html: job.desc,   
              }}
            ></p> */}
            <p>experience : {job.experience}</p>
          </div>
        );
      })}
    </>
  );
};

export default Home;
