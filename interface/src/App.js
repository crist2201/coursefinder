import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Courses from './components/courses';



function App() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState('');
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const pageSize = 6;
  const totalPages = Math.ceil(count / pageSize);

  const getTitle = (e) => { setTitle(e.target.value) };

  const showPage = (p) => {
    setPage(p);

  }

  const nextPage = () => {
    if (page > totalPages) {
      setPage(totalPages);
    }
    setPage(page + 1);
  }

  const prevPage = () => {
    if (page < 1) {
      setPage(1);
    }
    setPage(page - 1);

  }

  useEffect(() => {

    if (page > 1) {
      getCourses();
    }
  }, [page]);


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
      <Header getCourses={getCourses} getTitle={getTitle} />
      <Courses courses={courses} currentPage={page} nextPage={nextPage} prevPage={prevPage} totalPages={totalPages} setPage={showPage} />
      <Footer />
    </div >
  );
}

export default App;
