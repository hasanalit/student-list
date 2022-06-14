import React from "react";
import styled from "styled-components";

function Table(){
    return(
        <Wrapper>

            <div className="table-header">
                <h2>Student list</h2>
                <div>
                    <p>Count: </p>
                    {/* <p>Average mark: </p> */}
                </div>
            </div>
            <ul className="list">
                <li className="item">
                    <h4 className="usernames">Username</h4>
                    <h4 className="">Marked date</h4>
                    <h4 className="mark">Mark</h4>
                    <h4 className="status">Status</h4>
                    <h4 className="last-btn">Edit</h4>
                    <h4 className="last-btn">Delete</h4>
                </li>
                <li className="item">
                    <h4 className="username">Hasanali Tukhtayev</h4>
                    <p className="date">05.12.2002</p>
                    <p className="marks">94%</p>
                    <p className="statuss">Pass</p>
                    <div className="last-btn"></div>
                    <button className='btn last-btnn'>bir</button>
                </li>
                <li className="item">
                    <h4 className="username">Hasanalidfadfefewadf Tukhtayev</h4>
                    <p className="date">05.12.2222</p>
                    <p className="marks">94%</p>
                    <p className="statuss">Pass</p>
                    <button className='btn last-btn'>bir</button>
                    <button className='btn last-btnn'>bir</button>
                </li>
                <li className="item">
                    <h4 className="username">Tukhtayev</h4>
                    <p className="date">05.12.2002</p>
                    <p className="marks">94%</p>
                    <p className="statuss">Fail</p>
                    <button className='btn last-btn'>bir</button>
                    <button className='btn last-btnn'>bir</button>
                </li>
                <li className="item">
                    <h4 className="username">Hasanalidfadfefewadf dvsdvasdvasdTukhtayev</h4>
                    <p className="date">05.12.2222</p>
                    <p className="marks">94%</p>
                    <p className="statuss">Pass</p>
                    <button className='btn last-btn'>bir</button>
                    <button className='btn last-btnn'>bir</button>
                </li>
                <li className="item">
                    <h4 className="username">ds</h4>
                    <p className="date">05.12.2002</p>
                    <p className="marks">94%</p>
                    <p className="statuss">Fail</p>
                    <button className='btn last-btn'>bir</button>
                    <button className='btn last-btnn'>bir</button>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Table;

const Wrapper = styled.div`
.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.item {
    display: flex;
    align-items: center;
}

.usernames {
    margin: 0;
    margin-right: 250px;
}

.username {
    margin: 0;
    max-width: 180px;
    min-width: 180px;
    /* margin-right: 150px; */
}

.date {
    margin: 0;
    max-width: 75px;
    min-width: 75px;
    margin-left: 150px;
}

.mark {
    margin-left: 100px;
}

.marks {
    margin-left: 120px;
    min-width: 85px;
    max-width: 85px;
}

.status {
    margin-left: 100px;
}

.statuss {
    margin-left: 50px;
    min-width: 50px;
    max-width: 50px;
}

.last-btn {
    margin-left: 80px;
}

.last-btnn {
    margin-left: 100px;
    min-width: 30px;
    max-width: 30px;
    border: 1px solid #000;
    border-radius: 2px;
    background-color: #fff;
}
`