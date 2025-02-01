'use client'
import JobItem from '@/components/jobItem';
import { useState } from "react";
import Job from './job/page';

export default function Home() {

   let[jobList, setJobList] = useState([{
     id: 1,
     name: "Walking Mountain STEM Intern",
     date: 2020,
     description: "Assisted teaching students enrolled in the afterschool STEM program. Taught lessons ranging from introductory physics to coding Python"
   }, {
     id: 2,
     name: "General Employee, Capitol Theater",
     date: 2021,
     description: "Served food and sold concessions and tickets, while providing  a welcoming and clean environment. Learned valuable customer service skills and how to give customers a positive experience. "
    }, {
     id: 3,
     name: "Sales Associate, Remix Consignment Store ",
     date: 2023,
     description: "Learned general business management and how to interact with clients and customers. Tasks included;  pricing and tagging clothes, making sales, organizing and cleaning the store. Often left with the responsibility to operate the store alone for up to a week at a time.  "
   }, {
    id: 4,
    name: "Floral Assistant Designer, Rose Petals",
    date: 2024,
    description: "In this role I learned the principles of floral design along with the techniques on how to handle different types of flowers and foliage. I followed along while others designed and prepared the equipment and flowers necessary. My role also included setting up and breaking down events with floral arrangements and furniture within the given time frame. "
  }, {
    id: 5,
    name: "Retail Associate, Patagonia",
    date: 2024,
    description: "I learned the technology and use of Patagonia clothing and how the company is able to maintain sustainable business practices. I repaired garments through the worn wear program. I learned how to give guests the experience of a lifetime through the training of Vail Resorts."
  }]);
  
  

  let jobHtml = jobList.map((job) => <JobItem job={job} key={job.id}></JobItem>);

  function addJob(formData){
     const newJobList = [...jobList, {
      id: Math.random(),
      name: formData.get('name'),
      description: formData.get('description'),
      date: formData.get('date')
    }];
     setJobList(newJobList);
   }

  return (
    <div>
    <center>
      <header>
        <h1>Madeline Wendt</h1>
        <p>phone: 970-306-9229, email: madawendt@gmail.com</p>
        <p>Relevant Course Work:  Systems Programming, Discrete Structures, Intro to Computer Organization,Object Oriented Programming, Data Structures 
        </p>
        <p>Skills: Github, VS Code, IntelliJ, RARS 
        </p>
      </header>
    </center>
    <ul>
      {jobHtml}
    </ul>
    <br/>
    <form action={addJob}>
      <label>Name</label>
      <input type="text" name="name"/>
      <br/>
      <label>Description</label>
      <input type="text" name="description"/>
      <br/>
      <label>Date</label>
      <input type="text" name="date"/>
      <input type="text" name="Click Me!"/>
    </form>
    
    
  </div>
  );
}
