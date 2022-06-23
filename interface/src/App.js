import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import SearchBar from './components/search_bar';
import Courses from './components/courses';


function App() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState('');

  const getTitle = (e) => { setTitle(e.target.value) };


  const getCourses = () => {
    const URL = 'http://127.0.0.1:8000/courses'
    fetch(URL + '?' + new URLSearchParams({ title }))
      .then(response => {
        return response.json()
      })
      .then(results => {
        console.log(results.data)
        setCourses(results.data)
      })
  };



  return (
    < div className="App" >
      <Header />
      <SearchBar getCourses={getCourses} getTitle={getTitle} />
      <Courses courses={courses} />
      <Footer />
    </div >
  );
}

export default App;
