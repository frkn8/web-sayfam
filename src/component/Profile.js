import React from "react";

export default function Profile({ language }) {
  return (
    <div className="my-profile-container">
      <div className="my-profile">
        <div className="my-profile-infoCol">
          <h1 className="my-profile-heading">Profile</h1>
          <div></div>
          <div className="my-profile-infoText">
            <div className="my-profile-box">
              <div className="my-right">
                <h3 className="my-content-heading">Profile</h3>
                <div className="other-part">
                  <div className="my-keys">
                    {language === "en" ? (
                      <p>Birth Date</p> 
                    ) : (
                      <p>Doğum Tarihi</p>
                    )}
                    {language === "en" ? (
                      <p>City</p>
                    ) : (
                      <p>Şehir</p>
                    )}
                    {language === "en" ? (
                      <p>Education Status</p>
                    ) : (
                      <p>Eğitim Durumu</p>
                    )}
                    {language === "en" ? (
                      <p>Position</p>
                    ) : (
                      <p>Pozisyon</p>
                    )}
                  </div>
                  <div className="my-infos">
                    <p>13/07/1995</p>
                    <p>İstanbul</p>
                    {language === "en" ? (
                      <p>Near East University</p>
                    ) : (
                      <p>Yakın Doğu Üniversitesi</p>
                    )}
                    <p>Information Systems Enginering</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-about-box">
              {language === "en" ? (
                <h3 className="my-content-heading">About Me</h3>
              ) : (
                <h3 className="my-content-heading">Hakkımda</h3>
              )}
              {language === "en" ? (
                <p>
                  Creating and updating websites, managing CRM and Databases
                  and Testing are among the subjects that I have competence, as
                  well as these technical skills brought by the field of
                  Information and Systems Engineering. I care about having
                  competencies such as teamwork, harmony and motivation, and I
                  take advantage of opportunities that I believe can contribute
                  to my development.{" "}
                </p>
              ) : (
                <p>
                  {" "}
                  Web sitesi oluşturma ve güncelleme, CRM ve Veritabanlarını
                  yönetme ve Testing yetkinliğimin olduğu konular arasında yer
                  alırken Bilişim ve Sistem Mühendisliği alanının getirdiği bu
                  teknik becerilerin yanı sıra takım çalışması, uyum ve
                  motivasyon gibi yeterliliklere sahip olmayı önemsiyor ve
                  gelişimime katkı sunabileceğini inandığım fırsatları
                  değerlendiriyorum.{" "}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}