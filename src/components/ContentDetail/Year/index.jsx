const Year = ({ ishoverin, children }) => {
  return (
    <>
      {" "}
      <div>
        <span
          className={`${ishoverin ? "text-colortext3" : "text-colortext2"}`}
        >
          {children}
        </span>
      </div>
    </>
  );
};

export default Year;
