import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Table } from "reactstrap";
import styles from "./catalogue.module.css";
import {
  HiOutlineArrowNarrowUp,
  HiOutlineArrowNarrowDown,
} from "react-icons/Hi";

const Catalogue = () => {
  const response = useStaticQuery(catalog);
  const indexAsc = response.indexAsc.edges;
  const indexDesc = response.indexDesc.edges;
  const titleAsc = response.titleAsc.edges;
  const titleDesc = response.titleDesc.edges;
  const submissionDateAsc = response.submissionDateAsc.edges;
  const submissionDateDesc = response.submissionDateDesc.edges;
  const genreAsc = response.genreAsc.edges;
  const genreDesc = response.genreDesc.edges;
  const typeAsc = response.typeAsc.edges;
  const typeDesc = response.typeDesc.edges;

  const [table, setTable] = useState(indexAsc);

  //for showing the current tag
  const [tagHidden, setTagHidden] = useState(true);
  const [tagSelected, setTag] = useState(); //boolean or empty

  const [hoverModal, setModal] = useState(false);

  console.log(typeDesc[0].node.tags);

  //convert all const into CSS

  //tag filter function

  const tagFilter = (currentTag) => {
    setTagHidden(false);
    setTag(currentTag);
  };

  const closeTagFilter = () => {
    setTagHidden(true);
    setTag();
  };

  const onHover = (content) => {
    console.log("the row reacts: " + content);
  };

  //toggle sort categories

  let index = indexAsc;
  if (table === index) {
    index = indexDesc;
  } else {
    index = indexAsc;
  }

  let submissionDate = submissionDateAsc;
  if (table === submissionDate) {
    submissionDate = submissionDateDesc;
  } else {
    submissionDate = submissionDateAsc;
  }

  let title = titleAsc;
  if (table === title) {
    title = titleDesc;
  } else {
    title = titleAsc;
  }

  let genre = genreAsc;
  if (table === genre) {
    genre = genreDesc;
  } else {
    genre = genreAsc;
  }

  let type = typeAsc;
  if (table === type) {
    type = typeDesc;
  } else {
    type = typeAsc;
  }

  //toggle
  const toggle = (sortTitle) => {
    setTable(sortTitle);
  };

  //tags

  const tagStatus = (currentTag) => {
    //default is on
    if (tagHidden === true) {
      setTagHidden(false);
      console.log("tag is here!");
    } else if (tagHidden === false) {
      setTagHidden(true);
      setTag(currentTag);
    }
  };

  return (
    <div>
      <h1>Catalogue Page</h1>
      <h3>Index</h3>

      {!tagHidden && (
        <span
          onClick={() => closeTagFilter()}
          className={styles.filterStatusStyle}
        >
          <p>Filter: [X] {tagSelected}</p>
        </span>
      )}

      <Container>
        <Table borderless className={styles.tableStyle}>
          <thead>
            <tr className={styles.tableHeaderStyle}>
              <th onClick={() => toggle(index)} className={styles.columnStyle}>
                #
              </th>
              <th
                onClick={() => toggle(submissionDate)}
                className={styles.columnStyle}
              >
                date
              </th>
              <th onClick={() => toggle(title)} className={styles.columnStyle}>
                filename
              </th>
              <th onClick={() => toggle(type)} className={styles.columnStyle}>
                type
              </th>
              <th onClick={() => toggle(genre)} className={styles.columnStyle}>
                genre
              </th>
            </tr>
          </thead>
          <tbody>
            {table.map((item) => {
              return (
                <tr>
                  <td className={styles.columnStyle}>{item.node.submission}</td>
                  <td className={styles.columnStyle}>
                    {item.node.submissionDate}
                  </td>
                  <td
                    onMouseOver={() => onHover(item.node.title)}
                    className={styles.columnStyle}
                  >
                    {item.node.title}
                  </td>
                  <td className={styles.columnStyle}>{item.node.filetype}</td>
                  <td className={styles.columnStyle}>
                    {typeDesc[0].node.tags.map((tag, i) => {
                      if (typeDesc[0].node.tags.length === i + 1) {
                        return (
                          <td
                            className={styles.typeFilter}
                            onClick={() => tagFilter(tag.content)}
                          >
                            {tag.content}
                          </td>
                        );
                      } else {
                        return (
                          <td
                            className={styles.typeFilter}
                            onClick={() => tagFilter(tag.content)}
                          >
                            {tag.content},
                          </td>
                        );
                      }
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

//all the Contentful CMS queries
export const catalog = graphql`
  query {
    indexAsc: allContentfulJlmt(sort: { order: ASC, fields: [submission] }) {
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
    indexDesc: allContentfulJlmt(sort: { order: DESC, fields: [submission] }) {
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
    titleAsc: allContentfulJlmt(sort: { order: ASC, fields: [title] }) {
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
    titleDesc: allContentfulJlmt(sort: { order: DESC, fields: [title] }) {
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
    submissionDateAsc: allContentfulJlmt(
      sort: { order: ASC, fields: [submissionDate] }
    ) {
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
    submissionDateDesc: allContentfulJlmt(
      sort: { order: DESC, fields: [submissionDate] }
    ) {
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
    typeAsc: allContentfulJlmt(sort: { order: ASC, fields: [filetype] }) {
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
    typeDesc: allContentfulJlmt(sort: { order: DESC, fields: [filetype] }) {
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
    genreAsc: allContentfulJlmt(sort: { order: ASC, fields: [genre] }) {
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
    genreDesc: allContentfulJlmt(sort: { order: DESC, fields: [genre] }) {
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

export default Catalogue;
