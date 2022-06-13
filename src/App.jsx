import React from 'react';
import './App.css';

function App() {

  const [date, setDate] = React.useState()
  const [time, setTime] = React.useState()


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(date);
    console.log(time);
  }

  return (
    <>

    <form onSubmit={handleSubmit}>
      <input
      type="text"
      placeholder='username'
      onChange={(e) => setDate(e.target.value)}
      />
      <input
      type="date"
      placeholder='birnima'
      onChange={(e) => setTime(e.target.value)}
      />

      <button>button</button>
    </form>


    </>
  );
}

export default App;
