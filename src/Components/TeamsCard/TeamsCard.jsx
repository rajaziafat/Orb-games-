const TeamsCard = (props) => {
  return (
    <div className={`w-[202px] h-[237px] flex flex-col items-center`}>
      <div
        className={`border-2 rounded-lg border-[#FF5310] w-[192px] h-[192px] p-4 ${props.parentTilt}`}
      >
        <img
          src={props.img}
          className={`w-full h-full ${props.imgTilt}`}
          alt=""
        />
      </div>
      <h3 className="font-popins text-lg mt-4 text-white uppercase font-semibold">
        {props.title}
      </h3>
    </div>
  );
};

export default TeamsCard;
