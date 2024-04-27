const Helmet = (props) => {
  return (
    <div className={`w-10/12 mx-auto max-w-[1400px] sm:w-[90%] ${props.style}`}>
      {props.children}
    </div>
  );
};

export default Helmet;
