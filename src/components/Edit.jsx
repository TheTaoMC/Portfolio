import React, { useState, useEffect } from "react"
import Skills from "../Data/SKILLS.json"
import fs from "fs"

const Edit = () => {
  const [jsonData, setJsonData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Skills)

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        setJsonData(data)
      } catch (error) {
        console.error("Error reading JSON file:", error)
        setError(error.message || "Error reading JSON file")
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : jsonData ? (
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      ) : (
        <p>Loading JSON data...</p>
      )}
    </div>
  )
}

export default Edit
