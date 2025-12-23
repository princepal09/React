import Card from "./components/Card";
import "./App.css";
import UserCard from "./components/UserCard";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
      companyName: "Meta",
      datePosted: "2 days ago",
      post: "Frontend Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: 85,
      location: "Menlo Park, USA",
    },
    {
      brandLogo:
        "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: 120,
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://i.pinimg.com/1200x/0a/06/60/0a06600cc3cedeb49280b54114c88ce6.jpg",
      companyName: "Amazon",
      datePosted: "1 day ago",
      post: "Data Analyst",
      tag1: "Part-time",
      tag2: "Junior-level",
      pay: 45,
      location: "Seattle, USA",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdEdZutLGhFalA274yXkte5G2gFp2ShGrOw&s",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: 95,
      location: "Cupertino, USA",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdEdZutLGhFalA274yXkte5G2gFp2ShGrOw&s",
      companyName: "Netflix",
      datePosted: "7 days ago",
      post: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: 110,
      location: "Los Gatos, USA",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEsx0cmENacsYu8Z3kwcrZJRqc8oFsWe2n3Q&s",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Architect",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: 130,
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://assets.designhill.com/design-blog/wp-content/uploads/2024/02/4.jpg",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software QA Engineer",
      tag1: "Full-time",
      tag2: "Junior-level",
      pay: 55,
      location: "Austin, USA",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ElMRej_tZSPz4ZtWCf-P81yy6_yWGEp2uQ&s",
      companyName: "NVIDIA",
      datePosted: "8 days ago",
      post: "AI Research Scientist",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: 140,
      location: "Santa Clara, USA",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-7cp-XgH4R63l3X63DWb0fkZzyioOC9rIw&s",
      companyName: "Adobe",
      datePosted: "2 days ago",
      post: "UX Designer",
      tag1: "Part-time",
      tag2: "Mid-level",
      pay: 60,
      location: "San Jose, USA",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRYLOAmiSD3lJmkgGsJASmq_qBNzb7BTLWA&s",
      companyName: "OpenAI",
      datePosted: "1 day ago",
      post: "Research Engineer",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: 150,
      location: "San Francisco, USA",
    },
  ];
  const userProfiles = [
  {
    id: "@princepal",
    img : "./assets/IMG_8737.JPG",
    name: "Aarav Sharma",
    gmail: "aarav.sharma@gmail.com",
    country: "India",
    messagesCount: 42,
    followersCount: 1280,
    followingCount: 540,
    dollarCount: 250,
    description: "Tech enthusiast and UI/UX designer.",
    role: "UI Designer",
    qualification: "B.Des in Interaction Design"
  },
  {
    id: "@rahul",
    img : './assets/IMG_8712.JPG',
    name: "Sophia Martinez",
    gmail: "sophia.martinez@gmail.com",
    country: "United States",
    messagesCount: 67,
    followersCount: 2310,
    followingCount: 1020,
    dollarCount: 480,
    description: "Creative front-end developer with passion for clean design.",
    role: "Front-End Developer",
    qualification: "B.Sc in Computer Science"
  },
  {
    id: '@shubhali',
    img : './assets/IMG_8716.JPG',
    name: "Liam Brown",
    gmail: "liam.brown@gmail.com",
    country: "United Kingdom",
    messagesCount: 31,
    followersCount: 910,
    followingCount: 650,
    dollarCount: 180,
    description: "Full-stack dev who loves solving complex problems.",
    role: "Full Stack Developer",
    qualification: "M.Sc in Software Engineering"
  },
  {
    id: '@santosh',
    img : './assets/IMG_8737.JPG',
    name: "Noah Kim",
    gmail: "noah.kim@gmail.com",
    country: "South Korea",
    messagesCount: 89,
    followersCount: 3150,
    followingCount: 1880,
    dollarCount: 750,
    description: "Product designer focused on delightful user experiences.",
    role: "Product Designer",
    qualification: "BFA in Visual Communication"
  },
  {
    id: '@khrgoshh',
    img: './assets/IMG_8763.JPG',
    name: "Emma Rossi",
    gmail: "emma.rossi@gmail.com",
    country: "Italy",
    messagesCount: 53,
    followersCount: 1450,
    followingCount: 970,
    dollarCount: 320,
    description: "Digital marketer and content strategist.",
    role: "Marketing Specialist",
    qualification: "MBA in Digital Marketing"
  },
  {
    id: "@bhaskarBhai",
    img : './assets/IMG_8700.JPG',
    name: "Lucas Anderson",
    gmail: "lucas.anderson@gmail.com",
    country: "Canada",
    messagesCount: 25,
    followersCount: 830,
    followingCount: 420,
    dollarCount: 200,
    description: "Data analyst who turns numbers into stories.",
    role: "Data Analyst",
    qualification: "B.Sc in Data Science"
  }
];


  return (
    <div className="parent">
      {/* {jobOpenings.map((elem, idx) => {
        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              brand={elem.brandLogo}
              date={elem.datePosted}
              postname={elem.post}
              tagFirst={elem.tag1}
              tagSecond={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })} */}

      {userProfiles.map((elem,idx) =>{
           return (
            <div key={idx}>

              <UserCard
               id = {elem.id} 
               img = {elem.img}
               name = {elem.name}
               gmail = {elem.gmail}
               country = {elem.country}
               messagesCount = {elem.messagesCount}
               followersCount = {elem.followersCount}
               followingCount = {elem.followingCount}
               dollarCount = {elem.dollarCount}
               description = {elem.description}
               role = {elem.role}
               qualification = {elem.qualification}
               />

            </div>

           )
      })}

      
      
      
    </div>
  );
};

export default App;
