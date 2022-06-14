import React from "react";
import styled from "styled-components";

function CreateForm({handleSubmit, modal, setDate, setTime}){

    // const [theme, setTheme] = React.useState()
    return(
        <Wrapper>

    {
        modal &&
        <form className="form" onSubmit={handleSubmit}>
        <div className="form_section">
            <label>Username</label>
            <input
            type="text"
            placeholder='username'
            onChange={(e) => setDate(e.target.value)}
            />
        </div>

        <div className="form_section">
            <label>Date</label>
            <input
            type="date"
            onChange={(e) => setTime(e.target.value)}
            />
        </div>

        <div className="form_section">
            <label>Mark</label>
            <input
            type="text"
            placeholder='150'
            onChange={(e) => setTime(e.target.value)}
            />
        </div>


        </form>
      }

{/*
        <select onChange={(e) => setTheme(e.target.value)}>
            <option value="light">light</option>
            <option value="dark">dark</option>
        </select>
        <header className={theme}>CreateForm</header> */}
        </Wrapper>
    );
}

export default CreateForm;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px auto;
    padding: 0 50px;

.form_section {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

/* .light {
    background-color: #ccc;
    color: red;
}
.dark {
    background-color: #000;
    color: gold;
} */
`