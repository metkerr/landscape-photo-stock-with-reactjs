import React from "react";

import Header from "parts/Header";
import Section from "elements/Section";
import Fade from "react-reveal/Fade";
import Clients from "parts/Clients";
export default function Homepage() {
  return (
    <div>
      <Header />
      <main className="site-content">
        <Section className="hero illustration-section-01" isCenteredContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Fade bottom delay={200}>
                  <h1 className="mt-0 mb-16">Your favorite landscape</h1>
                </Fade>
                <div className="container-xs">
                  <Fade bottom delay={450}>
                    <p className="mt-0 mb-32">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nam minus, repellendus a repudiandae quae repellat.
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="hero-figure illustration-element-01">
                <Fade bottom delay={600}>
                  <img
                    className="has-shadow"
                    src="https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Hero"
                    width="800vw"
                    height="500vh"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </Section>
        <Clients />
      </main>
    </div>
  );
}
