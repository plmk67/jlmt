import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Container,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

import Img from "gatsby-image";
import styles from "./main.module.css";

const Main = () => {
  const response = useStaticQuery(catalog);
  const data = response.allContentfulJlmt.edges;

  console.log(data);

  return (
    <div>
      <h1>Main page</h1>
      <h3>Header</h3>
      <h3>Gallery</h3>

      <Container className={styles.container}>
        <div className={styles.gallery}>
          {data.map((art, index) => {
            let cardIndex = index + 1;
            let card = cardIndex.toString().padStart(4, "0");

            return (
              <div>
                <Card className={styles.card}>
                  <Img
                    className={styles.image}
                    fluid={art.node.image[0].fluid}
                  />
                  <CardBody>
                    <CardText>{card}</CardText>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export const catalog = graphql`
  query {
    allContentfulJlmt {
      edges {
        node {
          containsVideo
          contentful_id
          createdAt
          filetype
          genre
          id
          image {
            contentful_id
            title
            description
            fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid
            }
          }
          spaceId
          submission
          submissionDate
          title
          updatedAt
          workerId
          tags {
            content
          }
        }
      }
    }
  }
`;

export default Main;
