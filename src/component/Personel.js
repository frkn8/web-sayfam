import React from "react";
import { Link } from "react-scroll";
export default function Personel({ language }) {
  return (
    <div className="personel-container">
      <div className="personel">
        <div className="personel-left">
          <div className="name">
            <div className="name-underline">
              <h5 className="underline">___________</h5>
              <h5>Furkan Özkan</h5>
            </div>
          </div>
          {language === "en" ? (
            <h1 className="my-slogan">
              Creative thinker <br />
              Minimalism lover
            </h1>
          ) : (
            <h1 className="my-slogan">
              Yaratıcı Düşünür <br />
              Minimalist Sever
            </h1>
          )}
          {language === "en" ? (
            <p className="introduction">
             Merhaba, ben Furkan. Web yazılım geliştirme uzmanıyım. 
             Etkili iletişim yöntemleri, takım çalışması, uyum ve motivasyon gibi 
             yeterliliklere sahip bir Developer arıyorsanız iletişime geçin!
            </p>
          ) : (
            <p className="introduction">
             Hi I am Furkan. I am a web software developer. 
             If you are looking for a Developer with competencies such as effective 
             communication methods, teamwork, harmony and motivation, get in touch!
            </p>
          )}
          <div className="buttons">
            <div className="contact-button">
              <Link to="contactScroll" smooth={true} duration={1500}>
                {language === "en" ? (
                  <p className="whiteText">Contact</p>
                ) : (
                  <p className="whiteText">İletişim</p>
                )}
              </Link>
            </div>
            <div className="github-button">
              <img src="github.png" alt="github" />
              <a
                href="https://github.com/frkn8"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
            <div className="linkedin-button">
              <img src="LinkedIn.png" alt="linkedin" />
              <a
                href="https://www.linkedin.com/in/frknozkan8/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <img className="bio-image" src="personel.png" alt="personel.png" />
      </div>
    </div>
  );
}