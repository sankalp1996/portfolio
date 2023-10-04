import homeData from "../data/homeData";

const Home = () => {
  return (
    <div class="container mb-5 home1">
     { console.log("hello")}
      {homeData.map((item) => (
        <div>
          
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};
export default Home;
