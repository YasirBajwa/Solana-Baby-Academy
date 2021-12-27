import "./../css/intro.css";
import "./../css/responsive.css";
import "./../css/home.css";

import HeroImage from "./../images/s-11.jpg";
import LogoImage from "./../images/s-7.png";
import Logo2 from "./../images/s-2.png";
import { useNavigate } from "react-router-dom";
import Blink from "react-blink-text";
function Intro() {
  const history = useNavigate();
  function homePage() {
    history("/home");
  }
  return (
    <div>
      <div className="m-85">
        <div className="header-icons">
          <div className="nav_link">
            <i class="fab fa-youtube" aria-hidden="true"></i>
          </div>
          <div className="nav_link">
            <i class="fab fa-instagram" aria-hidden="true"></i>
          </div>
          <div className="nav_link">
            <a href="https://discord.com/invite/YYJpvNcB">
              <i class="fab fa-discord" aria-hidden="true"></i>
            </a>
          </div>
          <div className="nav_link">
            <a href="https://twitter.com/solbabyacademy?s=21">
              <i class="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="m-85 banner-section">
        <div className="i-logo">
          <img src={LogoImage} alt="" />
        </div>
        <div className="b_img">
          <img class="img-fluid" src={HeroImage} alt="" />
        </div>
      </div>
      <div className="bt-wrapper">
        <div className=" banner-text">
          <div className="blinker-wrapper">
            <h3>WELCOME TO SOLANA BABY ACADEMY</h3>
          </div>
          <div className="wrapper-container">
            <div className="e-btn" onClick={() => homePage()}>
              Enter
            </div>
            <div className="bl-text">
              <Blink color="white" text="← Enter to Proceed" fontSize="20">
                ← SCROLL DOWN
              </Blink>
            </div>
          </div>

          <div className="b-hr">
            <hr />
          </div>

          <div className="s-text">
            The Solana Baby Academy is the first Boarding school on the Solana
            blockchain. The Academy is own and operated by the Headmaster Dr.
            Vladimir Roosevelt.
          </div>

          <div>
            <hr />
          </div>
        </div>
      </div>
      <div className=" footer-section">
        <div className="email-section">
          <p>GET ON THE LIST</p>
          <div className="input-email">
            <input type="text" placeholder="Enter Email" />
            <button name="subscribe" class="email-submit" type="submit">
              →
            </button>
          </div>
        </div>
        <div className="f-logo">
          <img class="l-300" src={Logo2} alt="" />
        </div>
        <div className="f-social-list">
          <div className="f-list">
            <span>
              <i class="fab fa-youtube" aria-hidden="true"></i>
            </span>
            <span>
              <i class="fab fa-instagram" aria-hidden="true"></i>
            </span>
            <span className="a">
              <a href="https://discord.com/invite/YYJpvNcB">
                <i class="fab fa-discord" aria-hidden="true"></i>
              </a>
            </span>
            <span className="a">
              <a href="https://twitter.com/solbabyacademy?s=21">
                <i class="fab fa-twitter" aria-hidden="true"></i>
              </a>
            </span>
          </div>
          <div className="copy-right">
            ©Copyright reserved by Solana Baby Academy
          </div>
          <div className="terms">Terms and conditions</div>
        </div>
      </div>
      <div className="f-line"></div>
    </div>
  );
}

export default Intro;
