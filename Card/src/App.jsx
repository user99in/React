import Card from "./components/Card.jsx";

export default function App() {
  const profiles = [
    {
      name: "Mark Johnson",
      title: "Frontend Developer",
      bio: "I like to work with different frontend technologies and play video games."
    },
    {
      name: "Tiffany Williams",
      title: "Engineering Manager",
      bio: "I have worked in tech for 15 years and love to help people grow in this industry."
    },
    {
      name: "Alex Brown",
      title: "UI/UX Designer",
      bio: "I enjoy designing clean user interfaces and creating great user experiences."
    },
    {
      name: "Doug Miller",
      title: "Backend Developer",
      bio: "I have been a software developer for over 20 years and I love working with Go and Rust."
    },
    {
      name: "Rahul Sharma",
      title: "Java Full Stack Developer",
      bio: "I work with Spring Boot, React, and SQL to build scalable web applications."
    },
    {
      name: "Priya Verma",
      title: "Software Tester",
      bio: "I focus on automation testing and ensuring high-quality software delivery."
    }
  ];

  return (
    <>
    <h1>Team Members</h1>
    <div className="flex-container">
      
      {profiles.map((person, index) => (
        <Card
          key={index}
          name={person.name}
          title={person.title}
          bio={person.bio}
        />
      ))}
    </div>
    </>
  );
}
