import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Courses from './components/courses';



function App() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState('');
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const pageSize = 6;
  const totalPages = Math.ceil(count / pageSize);

  const getTitle = (e) => { setTitle(e.target.value) };


  const nextPage = () => {
    if (page > totalPages) {
      setPage(totalPages);
    }
    else {
      setPage(page + 1);
    }

  }

  const prevPage = () => {
    if (page < 1) {
      setPage(1);
    }
    else {
      setPage(page - 1);
    }


  }

  useEffect(() => {
    getCourses();
  }, [page]);


  function clearData() {
    setPage(1);
  };


  const getCourses = () => {
    const URL = 'http://127.0.0.1:8000/courses';
    fetch(URL + '?' + new URLSearchParams({ title, page }))
      .then(response => {
        return response.json();
      })
      .then(results => {
        setCourses(results.data);
        setCount(results.count);
      })
  };


  return (
    < div className="App" >
      <Header getTitle={getTitle} clearData={clearData} />
      <Courses courses={courses} currentPage={page} nextPage={nextPage} prevPage={prevPage} totalPages={totalPages} setPage={setPage} />
      <Footer />
    </div >
  );
}

export default App;
