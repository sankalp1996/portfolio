import contactData from "../data/contactData";

const Contact = () => {
  return (
      <div class="container mb-5 home1">

      {contactData.map((item) => (
        <div>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Contact;
