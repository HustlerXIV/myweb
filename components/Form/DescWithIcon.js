import React from "react";
import styled from "styled-components";

export default function DescWithIcon({ icon, title, className, href }) {
  return (
    <>
      {href ? (
        <Link href={href}>
          <ListContainer className={className}>
            <div style={{ marginRight: "10px" }}>{icon}</div>
            <List>{title}</List>
          </ListContainer>
        </Link>
      ) : (
        <ListContainer className={className}>
          <div style={{ marginRight: "10px" }}>{icon}</div>
          <List>{title}</List>
        </ListContainer>
      )}
    </>
  );
}

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-top: 5px;
`;

const List = styled.div``;

const Link = styled.a`
  text-decoration: none;
`;
