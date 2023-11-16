const Img = ({ imgin, title }) => {
  return (
    <>
      <div>
        <img
          src={imgin}
          alt={title}
          className="w-5/6 rounded-md border-2 border-colortext4 "
        />
      </div>
    </>
  );
};

export default Img;
