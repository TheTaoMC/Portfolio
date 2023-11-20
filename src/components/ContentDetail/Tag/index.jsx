const Tag = ({ ishoverin, datain }) => {
  //console.log("Tag ishover:", ishoverin)

  return (
    <div className="flex gap-2 text-sm">
      {datain.map((e, i) => (
        <div
          key={`${e}-Tag-${i}`}
          className={`bg-colortext4 p-1 mb-2 rounded-md ${
            ishoverin ? "text-colortext1" : "text-colortext2"
          }`}
        >
          {e}
        </div>
      ))}
    </div>
  )
}

export default Tag

/* const Tag = ({ ishoverin, datain }) => {
  console.log("tag: ", ishoverin)
  return (
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
  )
}

export default Tag */
