import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useState } from "react";
import styled from "styled-components";
import { Category } from "../utils/Data";
import DefaultCard from "../components/DefaultCard";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import TopResult from "../components/TopResult";

const SearchMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 20px 9px;
  }
`;

const SearchBar = styled.div`
  max-width: 700px;
  display: flex;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.text_secondary};
  border-radius: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary};
  padding: 12px 16px;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
`;

const Categories = styled.div`
  margin: 20px 10px;
`;

const Heading = styled.div`
  align-items: flex-start;
  color: ${({ theme }) => theme.text_primary};
  font-size: 22px;
  font-weight: 600;
  margin: 10px 14px;
`;

const BrowseAll = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 14px;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const OtherResults = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 6px;
  padding: 4px 4px;
  @media (max-width: 768px) {
    height: 100%;
    padding: 4px 0px;
  }
`;

const Results = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Search = () => {
  const [searched, setSearched] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearched = async (e) => {
    setSearched(e.target.value);
    // setLoading(true);
  };

  return (
    <SearchMain>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <SearchBar>
          <SearchOutlinedIcon sx={{ color: "inherit" }} />
          <input
            type="text"
            placeholder="Search Artists/Podcasts"
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              background: "inherit",
            }}
            value={searched}
            onChange={(e) => handleSearched(e)}
          />
        </SearchBar>
      </div>
      {searched.length === 0 ? (
        <Categories>
          <Heading>Browse All</Heading>
          <BrowseAll>
            {Category.map((category) => (
              <Link
                to={`/showpodcasts/${category.name.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <DefaultCard category={category} />
              </Link>
            ))}
          </BrowseAll>
        </Categories>
      ) : (
        <>
          {loading === true ? (
            <Loader>
              <CircularProgress />
            </Loader>
          ) : (
            <>
              {searched.length === 0 ? (
                <>No Podcasts found</>
              ) : (
                <Results>
                  <TopResult />
                  <TopResult />
                  <TopResult />
                  <TopResult />
                  <TopResult />

                  <OtherResults></OtherResults>
                </Results>
              )}
            </>
          )}
        </>
      )}
    </SearchMain>
  );
};

export default Search;
