import React from "react";
import { doctors } from "../data/doctors";
import DoctorCard from "../ui/DoctorCard";

const DoctorGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorGrid;
