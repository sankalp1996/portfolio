import useState from "react";

const State = () => {
  const handleOnChange = () => {
    console.log("on change happened");
  }

  const handleOnClick = () =>{
    console.log("on click happened");
  }

  return (
    <div class="container">
      <div class="mb-3">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={handleOnChange}
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <button type="submit" class="btn btn-primary" onClick={handleOnClick}>
        Submit
      </button>
    </div>
  );
};

export default State;
