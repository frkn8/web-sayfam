import React from "react";

export default function Footer({ language }) {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footerCol">
          {language === "en" ? (
            <h2 className="lets">
             Bir sonraki projenizde <br /> benimle çalışmak ister misiniz?
            </h2>
          ) : (
            <h2 className="lets">
              Bir sonraki projenizde <br /> benimle çalışmak ister misiniz?
            </h2>
          )}
          <div className="footerInfo">
            <a href="mailto:frknozkan8@gmail.com" className="mail">
              👉frknozkan8@gmail.com
            </a>

            <div className="links-footer">
            <a
                href="https://vercel.com/frkn8"
                className="vercelFooter"
                target="_blank"
                rel="noreferrer"
              >
                Vercel
              </a>
              <a
                href="https://github.com/frkn8"
                className="githubFooter"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/frknozkan8/"
                className="linkedinFooter"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}