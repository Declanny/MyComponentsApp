import './App.css';
import Navbar1 from './components/NavbarPage/Navbar';
import ProductList from './components/HomePage/ProductList';
import Sidebar from './components/SidebarPage/Sidebar';

function App() {
  return (
    
      <div>
        <Navbar1 />
        <Sidebar />
        <ProductList />
      </div>
  
  );
}

export default App;
