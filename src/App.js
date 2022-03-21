import './style.css';
import Image from "./imageInSrc.jpg"


function Jsx() {
  return (
    <div>
    <div style={{"border":"solid 1px black","max-width":"100vw"}}>
      <h1 className="titlered">Besma Abidi</h1>
      <br />
      <img src={Image} />
      <br />
      <img src="/imageInPublic.jpg" />
    </div>
    <video width={320} height={240} controls>
      <source src="myVideo.mp4" type="video/mp4" />
    </video>
  </div>
  );
}

export default Jsx;
