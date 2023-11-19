const Img = ({ imgin, title }) => {
  if (!imgin || imgin === "" || imgin === undefined) {
    return null
  }

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
  )
}

export default Img
