import aboutData from "../data/aboutData";

const About = () => {
  return (
    <div class="container mb-5 home1">

      {aboutData.map((item) => (
        <div>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}

       

    </div>


  );
};

export default About;
