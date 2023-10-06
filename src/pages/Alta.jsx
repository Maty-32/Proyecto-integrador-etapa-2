import { useState } from "react";
import "./Alta.scss";
import Formulario from "../components/Formulario";
import Tabla from "../components/Tabla";

const Alta = () => {
  const [productoAEditar, setProductoAEditar] = useState(null);

  return (
    <main>
      <div className="Alta">
        <h1>Formulario de alta de productos</h1>
        <Formulario
          productoAEditar={productoAEditar}
          setProductoAEditar={setProductoAEditar}
        />
        <hr />
        <Tabla setProductoAEditar={setProductoAEditar} />
      </div>
    </main>
  );
};

export default Alta;
