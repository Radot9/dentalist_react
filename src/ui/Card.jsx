const Card = ({ title, heading, description, image, day, month }) => {
  return (
    <>
      <div>
        <div>
          <img src={image} />
          <div>
            <p>{day}</p>
            <p>{month}</p>
          </div>
        </div>

        <div>
          <h6>{title}</h6>
          <h4>{heading}</h4>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
