const TeamsCard = (props) => {
  console.log(props);
  return (
    <a
      href={props.linkedinLink}
      target="_blank"
      className={`w-[202px] h-[237px] flex flex-col items-center ${props.className}`}
    >
      <div
        className={`border-2 rounded-lg overflow-hidden border-[#FF5310] w-[192px] min-h-[192px] p-4 ${props.parentTilt}`}
      >
        <img
          src={props.img}
          className={`w-full h-full object-cover object-center rounded-lg ${props.imgTilt}`}
          alt=""
        />
      </div>
      <h3 className="font-popins text-lg mt-4 text-white uppercase text-center font-semibold">
        {props.title}
      </h3>
    </a>
  );
};

export default TeamsCard;
