import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/s-m-imtiaz-rubayet-50885b23a/2nd"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://github.com/Imtiaz4530">
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61559853774895"
        >
          <FaFacebook />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://www.instagram.com/imtiaz__lx">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
