import React from "react";
import ViewAllComponent from "../components/View-All";

const ViewAll = ({ dogList }) => {
  return (
    <div className="Home">
      <ViewAllComponent dogList={dogList}/>
    </div>
  );
}

export default ViewAll;
