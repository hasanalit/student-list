import React from 'react';
import './App.css';
import CreateForm from './Components/CreateForm';
import Search from './Components/Search';
import Table from './Components/Table';
import Header from './Pages/Header';

function App() {

  const [modal, setModal] = React.useState(false)

  const [date, setDate] = React.useState()
  const [time, setTime] = React.useState()


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(date);
    console.log(time);
  }

  return (
    <>


    <Header setModal={setModal} modal={modal}/>


    <CreateForm handleSubmit={handleSubmit} modal={modal} setDate={setDate} setTime={setTime} />

    <main className='main'>
      <Search />
      <Table />
    </main>


    </>
  );
}

export default App;
