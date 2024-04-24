const Helmet = (props) => {
  return (
    <div className={`w-10/12 mx-auto max-w-[1400px] ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Helmet;
