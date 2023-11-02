import BlocStock from "../components/BlocStock";
import PendingProducts from "../components/PendingProducts";

function Admin() {
  return (
    <div>
      <BlocStock />
      {/* j'ai mis une ligne p ici qui n'est que pour faire jolie. */}
      <p className="row"></p> 
      <PendingProducts />
    </div>
  );
}

export default Admin;
