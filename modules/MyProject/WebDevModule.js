import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import Card from "../../components/Card";
import { FcNext, FcPrevious } from "react-icons/fc";
const items = [
  { title: "Web", type: "Professional Work", desc: "do it" },
  { title: "Web", type: "Professional Work", desc: "do it" },
  { title: "Web", type: "Professional Work", desc: "do it" },
  { title: "Web", type: "Professional Work", desc: "do it" },
  { title: "Web", type: "Professional Work", desc: "do it" },
  { title: "Web", type: "Professional Work", desc: "do it" },
  { title: "Web", type: "Professional Work", desc: "do it" },
  { title: "Web", type: "Professional Work", desc: "do it" },
  { title: "Web", type: "Professional Work", desc: "do it" },
  { title: "Web", type: "Professional Work", desc: "do it" },
  { title: "Web", type: "Professional Work", desc: "do it" },
  { title: "Web", type: "Professional Work", desc: "do it" },
  { title: "Web", type: "Professional Work", desc: "do it" },
  { title: "Web", type: "Professional Work", desc: "do it" },
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            type={item.type}
            desc={item.desc}
          />
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
      <CardContainer data-aos="fade-up">
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
          nextClassName="pagination-link"
          activeClassName="pagination-active"
        />
      </div>
    </div>
  );
}

export default function WebDevModule() {
  return <PaginatedItems itemsPerPage={6} />;
}

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;
