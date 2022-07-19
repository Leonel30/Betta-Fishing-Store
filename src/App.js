
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Routes'
import { CartProvider } from './context/CartContex'



function App() {



  return <>

  <CartProvider>

   <Routes />

   </CartProvider>
  
   
  </>
}

export default App;
