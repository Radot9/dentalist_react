const DoctorCard = ({ doctor }) => {
  const { name, image, backgroundColor } = doctor;

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-full aspect-square rounded-3xl lg:rounded-4xl mb-2 overflow-hidden flex items-center justify-center"
        style={{ backgroundColor }}
      >
        <img
          src={image}
          alt={`Dr. ${name}`}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-center font-ubuntu text-body font-bold text-midnight-indigo">
        {name}
      </h3>
    </div>
  );
};

export default DoctorCard;
