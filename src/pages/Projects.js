import { useState, useEffect } from "react";

function Projects(props) {
  const imgStyle = {
    width: "80%",
    display: "block",
    margin: "0 auto",
    marginBottom: "20px"
  };
  
  const btnStyle = {
    background: "#fff",
    border: "0",
    padding: "9px 14px",
    borderRadius: "5px",
    marginRight: "5px",
    marginLeft: "5px"
  }
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "projects");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getProjectsData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (
      <div>
        <h1>{project.name}</h1>
        <img style={imgStyle} src={project.image} />
        <a href={project.git}>
          <button style={btnStyle}>Github</button>
        </a>
        <a href={project.live}>
          <button style={btnStyle}>Live Site</button>
        </a>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;