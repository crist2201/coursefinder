import react from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import SearchBar from './components/search_bar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
