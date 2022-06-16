import react, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import SearchBar from './components/search_bar';
import Courses from './components/courses';

function App() {
  const [courses, setCourses] = useState({});
  const getCourses = (() => {
    const URL = 'http://127.0.0.1:8000/courses'
    // console.log('Clicked')
    fetch(URL + '?' + new URLSearchParams({
      title: 'web',
    }))
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setCourses(data['data'][0])
      })
  })
  return (
    < div className="App" >
      <Header />
      <SearchBar getCourses={getCourses} />
      <h1>{courses.title}</h1>
      <Courses />
      <Footer />
    </div >
  );
}

export default App;
