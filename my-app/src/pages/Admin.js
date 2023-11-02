import BlocStock from "../components/BlocStock";
import PendingProducts from "../components/PendingProducts";

function Admin() {
  return (
    <div>
      <BlocStock />
      <p className="row"></p>
      <PendingProducts />
    </div>
  );
}

export default Admin;
