import "./Contact.css";
import { Button } from "@material-ui/core";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import BusinessIcon from "@mui/icons-material/Business";
import IosShareIcon from "@mui/icons-material/IosShare";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="box">
        <h2 className="boxHeader">
          <EmailIcon />
          Contact Us
        </h2>
        <div className="emailBox">
          <a className="mailBtn" href="mailto:mewHelp@gmail.com">
            <Button>
              sawanaec.1@gmail.com <IosShareIcon />
            </Button>
          </a>
        </div>
      </div>

      <div className="box">
        <h2 className="boxHeader">
          <SendIcon />
          Follow Us
        </h2>
        <div className="followBox">
          <a href="https://www.youtube.com" target="blank">
            <YouTubeIcon className="youtubeSvgIcon" />
          </a>
          <a href="https://instagram.com" target="blank">
            <InstagramIcon className="instagramSvgIcon" />
          </a>
          <a href="https://facebook.com" target="blank">
            <FacebookIcon className="facebookSvgIcon" />
          </a>
          <a href="https://twitter.com" target="blank">
            <TwitterIcon className="twitterSvgIcon" />
          </a>
        </div>
      </div>

      <div className="box">
        <h2 className="boxHeader">
          <BusinessIcon />
          Address
        </h2>
        <div className="addressBox">
          <h3>Patna, India</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
