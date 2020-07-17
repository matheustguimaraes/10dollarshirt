import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "cart2" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        shutup: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "obama_icecream" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>Not a real online store</h2>
              <p>
                This website idea came up as a joke, when my friend said that
                creating a website requires a lot of options about technology
                stack, marketing and more. I then remembered this quote from
                Obama and said that we should build this. He takes it as a joke,
                I don't.{' '}
              </p>
            </div>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.shutup.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Barack Obama would use</h2>
              <p>
                The 44th president of the United States{' '}
                <ExternalLink href="https://www.businessinsider.com/obama-hawaii-t-shirt-shop-2016-7">
                  once joked
                </ExternalLink>{' '}
                About when he did must make the toughest decicions, he would
                imagine moving to Hawaii to open a T-shirt shack that sold only
                one size (medium) and one color (white). So I build a online
                shack to do that.{' '}
              </p>
            </div>
          </Grid>
          {/* <Grid>
            <div>
              <h2>Grow and build your ideas</h2>
              <p>
                Waste no more time on tooling and performance. Focus on the the
                site you want to build and nothing more.
                <br />
                <br />
                Gatsby is fast in every way that matters.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid> */}
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
