import Header from "./header";
import "./../css/home.css";
import "./../css/responsive.css";

import HeroImage from "./../images/s-3.jpg";
import SideImage from "./../images/s-8.jpg";
import SideImage2 from "./../images/s-11.jpg";
import Logo from "./../images/s-10.png";
import Logo2 from "./../images/s-2.png";

function Home() {
  return (
    <div>
      <Header />
      <div className="hero-image">
        <img class="img-fluid" src={HeroImage} alt="" />
      </div>
      <div className="detail-section">
        <div className="d_1">
          <h1>
            WELCOME TO THE
            <br />
            Solana baby Academy
          </h1>
          <p>
            The Solana Baby Academy is the first Boarding school on the Solana
            blockchain. The Academy is own and operated by the Headmaster Dr.
            Vladimir Roosevelt. He also is accompanied by a cast of teachers
            that are masters in their respected disciplines. We are known for
            the most prestigious and academically intellegient gifted babies in
            the metaverse. We teach different curriculums depending on the baby
            strengths and weaknesses. The areas of study are, business,
            psychology, rocket science, culinary arts, as well as physical
            fitness and an array of health courses. The goal at Solana Baby
            Academy is to help babies learn and be ready to help impact the
            world threw knowledge and technological advancement. The babies will
            all have top of the line food, optimal sleeping quarters, and the
            best learning facilities money can buy. Our goal is to raise the
            future leaders of the world from birth to adulthood.
          </p>
        </div>
        <div className="d_2">
          <div className="img_wrapper">
            <img class="img-fluid" src={SideImage} alt="" />
          </div>
        </div>
      </div>
      <div className="m_85" id="mint">
        <hr />
      </div>
      <div className="m_85 dist_heading">
        <h1>FAIR DISTRIBUTION</h1>
        <h3>
          (There are 5000 babies to be generated. 60 traits to guarantee they
          all will be unique. There also will be airdropped 6 1/1s a principal
          and 5 teachers. Holding the Genesis Solana Baby Academy also guarantee
          you future drops with this project and future collaborations. There
          have been talks about a dao and/ or a token but that is something we
          would like for the community to decide)
        </h3>
      </div>

      <div className="m_85">
        <hr />
      </div>
      <div className="m_85 spec-detail">
        <div>
          <p className="spec-p">
            Each solana baby is unique and generated from over 60 possible
            <br />
            traits. Each of the 50000 solana Babies act as a genesis token
            <br />
            stored on the Solana block chain. Will be necessary for all future
            <br />
            airdrops and prize give aways.
          </p>
        </div>
        <div>
          <div className="img_wrapper">
            <img class="img-fluid" src={SideImage2} alt="" />
          </div>
        </div>
      </div>
      <div className="m_85">
        <hr />
      </div>

      <div className="m_85 images_section">
        <div>
          <div className="b-img">
            <img className="img-fluid" src={Logo} alt="" />
          </div>
          <div className="text-center">
            10,000 Provably-rare
            <br /> Bored Ape tokens
          </div>
        </div>
        <div>
          <div className="b-img">
            <img className="img-fluid" src={Logo} alt="" />
          </div>
          <div className="text-center">
            10,000 Provably-rare
            <br /> Bored Ape tokens
          </div>
        </div>
        <div>
          <div className="b-img">
            <img className="img-fluid" src={Logo} alt="" />
          </div>
          <div className="text-center">
            10,000 Provably-rare
            <br /> Bored Ape tokens
          </div>
        </div>
        <div>
          <div className="b-img">
            <img className="img-fluid" src={Logo} alt="" />
          </div>
          <div className="text-center">
            10,000 Provably-rare
            <br /> Bored Ape tokens
          </div>
        </div>
        <div>
          <div className="b-img">
            <img className="img-fluid" src={Logo} alt="" />
          </div>
          <div className="text-center">
            10,000 Provably-rare
            <br /> Bored Ape tokens
          </div>
        </div>
      </div>

      <div className="m_85" id="roadmap">
        <hr />
      </div>

      <div className="m_85 roadmap">
        <h1>ROAD MAP</h1>
        <p> We’re in this for the long haul.</p>
        <p>
          We’ve set up some goalposts for ourselves. Once we hit a target sell
          through percentage, we will <br /> begin to work on realizing the
          stated goal.
        </p>
        <div className="roadmap-section">
          <div className="roadmap-points">
            <div className="r-color">1</div>
            <div className="ml-80 sm-10">Sellout project</div>
          </div>
          <div className="roadmap-points">
            <div className="r-color">2</div>
            <div className="ml-80"> Airdrop the 1/1’s</div>
          </div>
          <div className="roadmap-points">
            <div className="r-color">3</div>
            <div className="ml-80">
              Make a game for the kids playable via apple, android and computer.
            </div>
          </div>
          <div className="roadmap-points">
            <div className="r-color">4</div>
            <div className="ml-80">
              Can’t put everything in roadmap don’t want other projects to front
              run us.
            </div>
          </div>
        </div>
      </div>

      <div className="m_85" id="team">
        <hr />
      </div>

      <div className="detail-section m-80">
        <div className="d_1">
          <h1>THE TEAM</h1>
          <div>
            <ul>
              <li>
                Developer/ social media -
                <a href="https://twitter.com/solbabyacademy?s=21">@K3n_eth</a>{" "}
              </li>
              <li>
                Co developer/ social media -
                <a href="https://twitter.com/solbabyacademy?s=21">@Lavishlss</a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="d_2">
          <div className="img_wrapper">
            <img class="img-fluid" src={SideImage} alt="" />
          </div>
        </div>
      </div>

      <div className="m_85">
        <hr />
      </div>

      <div className=" footer-section">
        <div className="email-section">
          <p>GET ON THE LIST</p>
          <div className="input-email">
            <input type="text" placeholder="Enter Email" />
            <div class="email-submit">→</div>
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

export default Home;
