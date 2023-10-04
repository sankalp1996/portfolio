import footData from "../data/footerData";

const Footer = () => {
  // console.log("data",footData)
  return (
    <div>
{   
  footData.map((item)=>(
    <footer class="bg-dark text-light text-center py-3">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <p>&copy;  {item.content} </p>
            </div>
            <div class="col-md-6">
                <ul class="list-inline">
                    <li class="list-inline-item"><a href="#">Home</a></li>
                    <li class="list-inline-item"><a href="#">About</a></li>
                    <li class="list-inline-item"><a href="#">Services</a></li>
                    <li class="list-inline-item"><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>

  )

  )
}
</div>
  

   

  );
};

export default Footer;

{footData.map((item) => (
  <p>{item.content}</p>
))}