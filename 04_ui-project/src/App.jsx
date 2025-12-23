import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
      intro: "",
      tag: "Satisified",
      color: "blue",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1686244745026-98fc15ad3400?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro: "",
      tag: "UnderServed",
      color: "lightseagreen",
    },
    {
      img: "https://images.unsplash.com/photo-1627577328166-15e6320ad321?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=749",
      intro: "",
      tag: "UnderBanked",
      color: "amber",
    },
    {
      img: "https://images.unsplash.com/photo-1627577328166-15e6320ad321?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=749",
      intro: "",
      tag: "UnderBanked",
      color: "pink",
    },
  ];
  return (
    <>
      <Section1 users={users} />
      <Section2 />
    </>
  );
};

export default App;
