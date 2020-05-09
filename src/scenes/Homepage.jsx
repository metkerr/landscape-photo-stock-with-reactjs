import React from "react";

import Header from "parts/Header";
import Section from "elements/Section";
import Fade from "react-reveal/Fade";
import Clients from "parts/Clients";
import Feature from "parts/Feature";

import FeatureTile01 from "assets/images/feature-tile-icon-01.svg";
import FeatureTile02 from "assets/images/feature-tile-icon-02.svg";
import FeatureTile03 from "assets/images/feature-tile-icon-03.svg";
import Card from "elements/Card";
import Lists from "elements/Lists";
import Button from "elements/Button";
import Footer from "parts/Footer";

const feature = [
  {
    imgSrc: FeatureTile01,
    imgAlt: "Feature tile icon 01",
    title: "Join the community",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, minus!",
  },
  {
    imgSrc: FeatureTile02,
    imgAlt: "Feature tile icon 02",
    title: "Join the event",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, minus!",
  },
  {
    imgSrc: FeatureTile03,
    imgAlt: "Feature tile icon 03",
    title: "Join the awesomeness",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, minus!",
  },
];

const pricingList = [
  {
    price: 12,
    currencySymbol: "$",
    description: "Lite user package",
    features: [
      {
        isChecked: true,
        content: "Consectetur, adipisicing elit. Minima, minus!",
      },
      {
        isChecked: true,
        content: "Consectetur, adipisicing elit. Minima, minus!",
      },
      {
        isChecked: true,
        content: "Consectetur, adipisicing elit. Minima, minus!",
      },
      {
        isChecked: false,
        content: "Consectetur, adipisicing elit. Minima, minus!",
      },
      {
        isChecked: false,
        content: "Consectetur, adipisicing elit. Minima, minus!",
      },
    ],
  },
  {
    price: 55,
    currencySymbol: "$",
    description: "Standard user package",
    features: [
      {
        isChecked: true,
        content: "Consectetur, adipisicing elit. Minima, minus!",
      },
      {
        isChecked: true,
        content: "Consectetur, adipisicing elit. Minima, minus!",
      },
      {
        isChecked: true,
        content: "Consectetur, adipisicing elit. Minima, minus!",
      },
      {
        isChecked: true,
        content: "Consectetur, adipisicing elit. Minima, minus!",
      },
      {
        isChecked: false,
        content: "Consectetur, adipisicing elit. Minima, minus!",
      },
    ],
  },
  {
    price: 65,
    currencySymbol: "$",
    description: "Premium user package",
    features: [
      {
        isChecked: true,
        content: "Consectetur, adipisicing elit. Minima, minus!",
      },
      {
        isChecked: true,
        content: "Consectetur, adipisicing elit. Minima, minus!",
      },
      {
        isChecked: true,
        content: "Consectetur, adipisicing elit. Minima, minus!",
      },
      {
        isChecked: true,
        content: "Consectetur, adipisicing elit. Minima, minus!",
      },
      {
        isChecked: true,
        content: "Consectetur, adipisicing elit. Minima, minus!",
      },
    ],
  },
];

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
              <div className="hero-figure">
                <Fade bottom delay={600}>
                  <img
                    className="has-shadow"
                    src="https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Hero"
                    width="896"
                    height="504"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </Section>
        <Clients />
        <Section className="feature-tiles">
          <div className="container">
            <div className="features-tiles-inner section-inner">
              <div className="tiles-wrap">
                {feature.map((data) => {
                  return (
                    <Feature
                      key={data.imgAlt}
                      delayInMS={500}
                      data={{
                        imgSrc: data.imgSrc,
                        imgAlt: data.imgAlt,
                        title: data.title,
                        description: data.description,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Section>
        <Section className="pricing">
          <div className="container">
            <div className="pricing-inner section-inner has-top-divider">
              <div className="section-header center-content">
                <div className="container-xs">
                  <h2 className="mt-0 mb-16">Best offer for everyone</h2>
                  <p className="m-0">
                    Lorem ipsum is common placeholder text used to demonstrate
                    the graphic elements of a document or visual presentation.
                  </p>
                </div>
              </div>
              <div className="tiles-wrap">
                {pricingList.map((data, index) => (
                  <Card key={index} hasShadow>
                    <div className="pricing-item-content">
                      <div className="pricing-item-header pb-24 mb-24">
                        <div className="pricing-item-price mb-4">
                          <span className="pricing-item-price-currency h2">
                            {data.currencySymbol}
                          </span>
                          <span
                            className="pricing-item-price-amount h1 pricing-switchable"
                            data-pricing-monthly="34"
                            data-pricing-yearly="27"
                          >
                            {data.price}
                          </span>
                        </div>
                        <div className="text-xs text-color-low">
                          {data.description}
                        </div>
                      </div>
                      <div className="pricing-item-features mb-40">
                        <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                          What’s included
                        </div>
                        <Lists
                          data={data.features}
                          isSmall
                          className="pricing-item-features-list mb-32"
                        ></Lists>
                      </div>
                    </div>
                    <div className="pricing-item-cta mb-8">
                      <Button isPrimary isBlock>
                        Start free trial
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
