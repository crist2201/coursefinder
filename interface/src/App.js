import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import SearchBar from './components/search_bar';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='course-container'>
        <SearchBar />
      </div>
      <Footer />




    </div>
  );
}

export default App;
