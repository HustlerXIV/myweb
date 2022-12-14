import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import Card from "@components/Card";
import { FcNext, FcPrevious } from "react-icons/fc";

export default function WebDevModule({ webData }) {
  const items = webData.filter((i) => i.isPort === true);
  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, index) => (
            <a href={item.link} key={index}>
              <eachCard>
                <Card
                  title={item.title}
                  type={item.type}
                  desc={item.desc}
                  img={item.img}
                  isPort={item.isPort}
                />
              </eachCard>
            </a>
          ))}
      </>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <CardContainer>
          <Items currentItems={currentItems} />
        </CardContainer>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <ReactPaginate
            breakLabel="..."
            nextLabel={<FcNext />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<FcPrevious />}
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            previousClassName="pagination-link"
            nextLinkClassName=""
            previousLinkClassName=""
            nextClassName="pagination-link"
            activeClassName="pagination-active"
          />
        </div>
      </div>
    );
  }

  return <PaginatedItems itemsPerPage={6} />;
}

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const eachCard = styled.div`
  width: 320px;
`;
