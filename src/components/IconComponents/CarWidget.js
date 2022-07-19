import './CarWidget.css'
import { FaShoppingCart } from "react-icons/fa";


function CarWidget({ counterItems }) {
  return (
    <div>
      
      <FaShoppingCart color="white" />
      { counterItems > 0 && <span className="counterItem">{counterItems}</span> }

    </div>
  );
}
export default CarWidget;
