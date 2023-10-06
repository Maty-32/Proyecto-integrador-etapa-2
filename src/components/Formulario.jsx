import { useContext, useEffect, useState } from "react";
import ProductoContext from "../contexts/ProductoContext";
import "./Formulario.scss";
import { useForm } from "../hooks/useForm";

const formInicial = {
  id: null,
  nombre: "",
  precio: "",
  stock: "",
  marca: "",
  categoria: "",
  detalles: "",
  foto: "",
  envio: false,
};

const Formulario = ({ productoAEditar, setProductoAEditar }) => {
  const [form, setForm, handleChange] = useForm(formInicial);
  const { crearProductoContext, actualizarProductoContext } =
    useContext(ProductoContext);

  useEffect(() => {
    productoAEditar ? setForm(productoAEditar) : setForm(formInicial);
  }, [productoAEditar, setProductoAEditar]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Se detuvo el comporamiento por defecto del formulario");

    try {
      if (form.id === null) {
        await crearProductoContext(form);
      } else {
        await actualizarProductoContext(form);
      }

      handleReset();
    } catch (error) {
      console.error("Algo ocurrió en el handleSubmit", error);
    }
  };

  const handleReset = () => {
    setForm(formInicial);
  };

  return (
    <>
      <h2>Agregar (Editar) producto</h2>
      <form onSubmit={handleSubmit} className="row g-3 addproduct">
        <div className="col-md-3">
          <label htmlFor="lbl-nombre" className="form-label">
            Nombre
          </label>
          <input
            className="form-control"
            type="text"
            name="nombre"
            id="lbl-nombre"
            placeholder="Ingrese un nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="lbl-precio" className="form-label">Precio</label>
          <input
            type="text"
            name="precio"
            id="lbl-precio"
            className="form-control"
            placeholder="Ingrese un precio"
            value={form.precio}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="lbl-stock" className="form-label">Stock</label>
          <input
            type="text"
            name="stock"
            id="lbl-stock"
            className="form-control"
            placeholder="Ingrese un stock"
            value={form.stock}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="lbl-marca" className="form-label">Marca</label>
          <input
            type="text"
            name="marca"
            id="lbl-marca"
            className="form-control"
            placeholder="Ingrese un marca"
            value={form.marca}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="lbl-categoria" className="form-label">Categoría</label>
          <input
            type="text"
            name="categoria"
            id="lbl-categoria"
            className="form-control"
            placeholder="Ingrese un categoria"
            value={form.categoria}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="lbl-detalles" className="form-label">Detalles</label>
          {
            <input
              type="text"
              name="detalles"
              id="lbl-detalles"
              className="form-control"
              placeholder="Ingrese un detalles"
              value={form.detalles}
              onChange={handleChange}
            />
          }
        </div>
        <div className="col-md-4">
          <label htmlFor="lbl-foto" className="form-label">Foto</label>
          <input
            type="file"
            name="foto"
            id="lbl-foto"
            className="form-control" 
            placeholder="Ingrese un foto"
            value={form.foto}
            onChange={handleChange}
             multiple
          />
        </div>
        <div>
          <label htmlFor="lbl-envio" className="form-check-label">Envío</label>
          <input
            type="checkbox"
            name="envio"
            id="lbl-envio"
            className="form-check-input m-1" 
            placeholder="Ingrese un envio"
            checked={form.envio}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary col-md-1 m-3">Enviar</button>
        <button type="reset" className="btn btn-secondary col-md-1 m-3" onClick={handleReset}>
          Limpiar
        </button>
      </form>
    </>
  );
};

export default Formulario;
