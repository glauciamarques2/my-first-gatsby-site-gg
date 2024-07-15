import Greeting from "../components/greeting" // Importing the Greeting component
import React from 'react' // Importing React

// Defining the SayHello functional component
const SayHello = () => {
  return (
    <div>
      <Greeting name="Megan" />   
      <Greeting name="Obinna" /> 
      <Greeting name="Generosa" /> 
    </div>
  )
}

export default SayHello // Exporting SayHello as the default export