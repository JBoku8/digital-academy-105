import { Header } from './components/header';
import { Footer } from './components/footer';
import { Layout } from './components/layout';

// import { Home } from './pages/home';
import { Products } from './pages/products';

import './App.css';
// Tree Shaking

function App() {
  return (
    <Layout className="App">
      <Header />
      <Products />
      <Footer />
    </Layout>
  );
}

export default App;
