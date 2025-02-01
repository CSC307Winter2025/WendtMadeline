import Link from 'next/link';

export default function Job({params}) {
  let jobInfo = {
    1: {
        desc: "Walking Mountains- Assisted teaching students enrolled in the afterschool STEM program. Taught lessons ranging from introductory physics to coding Python."
    }, 
    2: {
        desc: "Capitol Theater- Served food and sold concessions and tickets, while providing  a welcoming and clean environment. Learned valuable customer service skills and how to give customers a positive experience. "
    },
    3: {
        desc: "Remix Consigment- Learned general business management and how to interact with clients and customers. Tasks included;  pricing and tagging clothes, making sales, organizing and cleaning the store. Often left with the responsibility to operate the store alone for up to a week at a time.  "
    },
    4: {
        desc: "Rose Petals- In this role I learned the principles of floral design along with the techniques on how to handle different types of flowers and foliage. I followed along while others designed and prepared the equipment and flowers necessary. My role also included setting up and breaking down events with floral arrangements and furniture within the given time frame. "
    },
    5: {
        desc: "Patagonia- I learned the technology and use of Patagonia clothing and how the company is able to maintain sustainable business practices. I repaired garments through the worn wear program. I learned how to give guests the experience of a lifetime through the training of Vail Resorts. *Employment ended due to seasonal work "
    },
    6: {
        desc: "Newest Job"
    }
  };

  return (
    <div>
      This is more information about: {jobInfo[params?.id].desc}
      <br/>
      <Link href="/">Home</Link>
    </div>
  );
}