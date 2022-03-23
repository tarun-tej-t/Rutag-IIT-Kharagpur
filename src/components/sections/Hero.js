import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses} style={{ paddingTop: "20px" }}>
      <div className="container-xl">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              The Rural Technology Action Group
              <span className="text-color-primary" style={{ color: "red" }}>
                {" "}
                (RuTAG)
              </span>
            </h1>
            <div >
              <p
                className=" reveal-from-bottom"
                data-reveal-delay="400"
                style={{textAlign:"justify",padding:'40px',display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}
              >
                 <p style={{width:"60vw"}}>
                   <small>
                     Rural
                                     Technology Action Groups (RuTAG) have been set up by the office
                                     of the PSA(the brainchild of Dr. R. Chidamberam, the Principal
                                     Scientific Advisor to the Government of India) to act as
                                     application oriented Research and Development (R&D) nuclei in
                                     order to provide much-needed Science and Technology (S&T)
                                     backups to promote potential technologies for rural
                                     entrepreneurs and the users. With incremental technological
                                     inputs to existing practices and exploitation of local
                                     resources, the initiative aims to substantially improve the
                                     rural economy. In this sequence, RuTAG-EI, IIT Kharagpur was
                                     started in the year 2008 under Prof. P. B. S. Bhadoria as
                                     Principal Investigator and it has been successfully operating
                                     ever since with the mentorship and guidance of Prof. P. P.
                                     Chakrabarti, Director, IIT Kharagpur, with the objective to
                                     identify the technological problems, develop and design
                                     processes and products to overcome them and to ensure that the
                                     developed technologies should be easily available and affordable
                                     with minimal drudgery to the rural artisans and also to conduct
                                     training programmes on rural technologies. Since then, it has
                                     been actively interacting with the NGOs in the adjoining regions
                                     of West Bengal including the states of Odisha, Jharkhand and
                                     Bihar to contribute to the needy. During the last ten years,
                                     RuTAG-EI has been able to connect with more than 60 NGOs and
                                     took up several technological initiatives aiming to improve
                                      the livelihood of masses of rural population; several
                                     technologies emerging from RuTAG-EI initiative are
                                     presently being explored by people across the four states.
                   </small>
                 </p><p>&nbsp;&nbsp;</p>
                 <p>&nbsp;<img src="https://raw.githubusercontent.com/tarun-tej-t/rutag-imgs/main/intro-1.png" width={400} style={{width:"40vw"}}/></p>
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="400">
                {/* <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                    Get started
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    View on Github
                    </Button>
                </ButtonGroup> */}
              </div>
            </div>
          </div>
          {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div> */}
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
