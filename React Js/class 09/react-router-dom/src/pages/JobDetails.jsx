import React from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const params = useParams();
  console.log(params.jid, "params");

  return <h1>JobDetails {params.jid} </h1>;
};

export default JobDetails;
