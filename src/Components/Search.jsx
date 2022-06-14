import React from "react";
import styled from "styled-components";

function Search(){
    return(
        <Wrapper>
            <h2 className="search-heading">Filter</h2>

            <form>
                <div className='form-search-section'>
                    <label className="label">Search</label>
                    <input
                    className="search-input"
                    type="text"
                    placeholder="Username"
                    />
                </div>

                <div className='form-search-section'>
                    <label className="label">From</label>
                    <input
                    className="search-input"
                    type="text"
                    placeholder="From"
                    />
                </div>

                <div className='form-search-section'>
                    <label className="label">To</label>
                    <input
                    className="search-input"
                    type="text"
                    placeholder="To"
                    />
                </div>

                <div className='form-search-section'>
                    <label className="label">Sort by</label>
                    <select className="search-select">
                        <option value="bir">bir</option>
                        <option value="ikki">ikki</option>
                        <option value="uch">uch</option>
                    </select>
                </div>

                <button className="btn search-btn">Filter</button>
            </form>
        </Wrapper>
    )
}

export default Search;

const Wrapper = styled.div`
.search-heading {
    margin: 0;
}

.form-search-section {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 10px;
}

.label {
    margin-bottom: 5px;
    font-size: medium;
    font-weight: 400;
    line-height: 1.5;
}

.search-input {
    padding: 6px 12px;
    width: 300px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: medium;
    font-weight: 400;
    line-height: 1.5;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.search-select {
    padding: 10px 12px;
    width: 326px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: medium;
    font-weight: 400;
    line-height: 1.5;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.search-btn {
    margin-top: 20px;
    padding: 10px 12px;
    width: 326px;
    border-radius: 4px;
}
`