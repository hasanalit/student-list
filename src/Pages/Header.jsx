import React from "react";
import styled from "styled-components";

function Header({modal, setModal}){
    return(
        <Wrapper>
        <header className="header">
            <h1 className="heading">Exam results</h1>
            <button className="btn" onClick={() => setModal(!modal)}>Add new student</button>
        </header>
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px auto;
    padding: 0 50px;
}

.heading {
    margin: 0;
}
`