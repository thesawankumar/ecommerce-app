import "./About.css";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import YouTube from "@mui/icons-material/YouTube";
import Instagram from "@mui/icons-material/Instagram";
import profile from "../../../images/profile1.png";
const About = () => {
  // const visitInstagram = () => {
  //   window.location = "https://instagram.com/meabhisingh";
  // };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={profile}
              alt="Founder"
            />
            <Typography>Sawan Kumar</Typography>
            <br />
            <span>This is a sample wesbite made by Sawan Kumar.</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <Instagram className="instagramSvgIcon" />
            <YouTube className="youtubeSvgIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
