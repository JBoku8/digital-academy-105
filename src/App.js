import { Header } from './components/header';
import { Footer } from './components/footer';

// import { Home } from './pages/home';
import { Products } from './pages/products';

import './App.css';
// Tree Shaking

function App() {
  return (
    <div className="App container">
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
