const Tag = ({ ishoverin, datain }) => {
  return (
    <>
      <div className="flex gap-2 text-sm">
        {datain.map((data, index) => (
          <div
            key={`${data}-Tag-${index}`}
            className={`bg-colortext4  p-1 mb-2 rounded-md ${
              ishoverin ? "text-colortext1" : "text-colortext2"
            }`}
          >
            {data}
          </div>
        ))}
      </div>
    </>
  )
}

export default Tag
