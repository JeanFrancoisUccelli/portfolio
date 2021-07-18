import photojeff from "./Images/photojeff.jpg";
import "./App.css";
import resumeData from "./resumeData";
import React, { useState } from "react";
function App() {
  let [data, setData] = useState({ name: "", url: "", imgurl: "", descrption: "", githuburl: "" });
  return (
    <div class="page">
      <div class="card" id="person">
        <img id="person-picture" src={photojeff} alt="portrait" />
        <img
          id="person-country"
          src="https://image.flaticon.com/icons/svg/197/197560.svg"
          alt="drapeau"
        />
        <section>
          <h1 id="person-fullname">Jeff Uccelli</h1>
          <h2 id="person-job">Developpeur front-end</h2>
          <p>
            Hello, je suis <strong id="person-firstname">Jeff Uccelli</strong>,{" "}
            <strong id="person-position"></strong> Développeur front-end
            spécialisé(e) en React/Node <strong id="person-speciality"></strong>{" "}
            actuellement <strong id="person-company"></strong> dans la région de{" "}
            <strong id="person-city">Aix-Marseille</strong>.
          </p>
          <div>
            <a
              class="button"
              target="_blank"
              id="person-email"
              href="mailto:jeanfrancoisuccelli@gmail.com"
              rel="noreferrer"
            >
              M'envoyer un email
            </a>
            <span class="or">  </span>
            <a
              target="_blank"
              class="button"
              href="https://drive.google.com/file/d/1g-zsYpCWHcoRWS1PFsixk3goAE4xcVv6/view?usp=sharing"
              rel="noreferrer"
            >
              Mon CV
            </a>
            <span class="or">  </span>
            <a
              target="_blank"
              class="button"
              href="https://www.linkedin.com/in/jeff-uccelli/"
              rel="noreferrer"
            >
              Mon LinkedIn
            </a>
          </div>
          <hr />
        </section>
        <section>
          <h3>Compétences</h3>
          <ul class="list">
            <li>
              <div class="skill-box">
                <span class="skill-favorite fa fa-bolt"></span>
                HTML/CSS
                <div class="box-well">Langage</div>
              </div>
            </li>
            <li>
              <div class="skill-box">
                <span class="skill-favorite fa fa-bolt"></span>
                Javascript
                <div class="box-well">Langage</div>
              </div>
            </li>
            <li>
              <div class="skill-box">
                <span class="skill-favorite fa fa-bolt"></span>
                ReactJS
                <div class="box-well">Librairie</div>
              </div>
            </li>
            <li>
              <div class="skill-box">
                <span class="skill-favorite fa fa-bolt"></span>
                Typecript
                <div class="box-well">Langage</div>
              </div>
            </li>
            <li>
              <div class="skill-box">
                Bootstrap
                <div class="box-well">CSS</div>
              </div>
            </li>
            <li>
              <div class="skill-box">
                Styled Component
                <div class="box-well">CSS</div>
              </div>
            </li>
            <li>
              <div class="skill-box">
                Git gitlab/github
                <div class="box-well">Versioning</div>
              </div>
            </li>
            <li>
              <div class="skill-box">
                Heroku / Netlify
                <div class="box-well">Cloud</div>
              </div>
            </li>
          </ul>
          <hr />
        </section>
        <section>
          <h3>Réalisations</h3>
          {resumeData.portfolio.map((item) => {
            return (
              <>
                <div class="thumbnail" key={item.name}>
                  <div
                    class="thumbnail-cover"
                    style={{ backgroundImage: `url(${item.imgurl})` }}
                  ></div>
                  <div class="thumbnail-content">
                    <span class="badge">{item.style}</span>
                    <p class="thumbnail-title">{item.name} </p>
                    <p class="thumbnail-description">{item.description}</p>
                    <div class="thumbnail-footer">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => {
                          setData({
                            name: item.name,
                            url: item.url,
                            imgurl: item.imgurl,
                            description: item.description,
                            githuburl: item.githuburl,
                          });
                        }}
                      >
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          {data.name}
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div
                          class="thumbnail-cover"
                          style={{ backgroundImage: `url(${data.imgurl})` }}
                        ></div>
                        <hr />
                        {data.description}
                        <hr />
                        <br />
                          <a class="btn btn-info btn-sm"
                          style= {{marginRight: "10px"}}
                            href={data.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Démo
                          </a>
                          <a class="btn btn-info btn-sm"
                          style= {{marginLeft: "10px"}}
                            href={data.githuburl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Repo github
                          </a>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary btn-sm"
                          data-bs-dismiss="modal"
                        >
                          Fermer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          {/* <div class="thumbnail">
            <div
              class="thumbnail-cover"
              style={{backgroundImage: "url(https://source.unsplash.com/random/800*600?code)"}}
            ></div>
            <div class="thumbnail-content">
              <span class="badge">Game Jam</span>
              <p class="thumbnail-title">Pac-Man </p>
              <p class="thumbnail-description">
                Une version de pac-man avec une surprise en plus...
              </p>
              <div class="thumbnail-footer">
                <a href="google.fr" target="_blank">
                  En savoir plus
                </a>
              </div>
            </div>
          </div> */}
          {/* <div class="thumbnail">
            <div
              class="thumbnail-cover"
              style={{backgroundImage: "url(https://source.unsplash.com/random/800*600?shop)"}}
            ></div>
            <div class="thumbnail-content">
              <span class="badge">Application</span>
              <p class="thumbnail-title">Shop'n Go </p>
              <p class="thumbnail-description">
                Application d'achat en ligne sécurisé from scratch
              </p>
              <div class="thumbnail-footer">
                <a href="google.fr" target="_blank">
                  En savoir plus
                </a>
              </div>
            </div>
          </div> */}
          <hr />
        </section>
        <section>
          <h3>Parcours</h3>
          <div class="path">
            <div class="step">
              <p class="step-title">
                Travail personnel - Avril 21 à aujourd'hui
              </p>
              <p>
                Développement d'application web responsives pour continuer
                d'apprendre et de me former sur des projets personnels.
              </p>
            </div>
            <div class="step">
              <p class="step-title">
                CDD Développeur front-end - Sept 20 à Mars 21
              </p>
              <p>
                Création du site vitrine de la société selon la charte ux/ui
                fournie
              </p>
            </div>
            <div class="step">
              <p class="step-title">Wild code school - 2020</p>
              <p>
                Dîplomé d'un titre professionnel de développeur web et web
                mobile obtenu en Février 2021
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
