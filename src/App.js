import { Header } from './components/header';
import { Footer } from './components/footer';
import { Layout } from './components/layout';

// import { Home } from './pages/home';
import { Products } from './pages/products';
import { CartProvider } from './providers/CartProvider';

import './App.css';
// Tree Shaking

function App() {
  return (
    <CartProvider>
      <Layout className="App">
        <Header />
        <Products />
        <Footer />
      </Layout>
    </CartProvider>
  );
}

export default App;
