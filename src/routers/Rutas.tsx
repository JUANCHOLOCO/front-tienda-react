import {
    Switch,
    Route
  } from "react-router-dom";
import Home from "../page/Home";
import DetalleProducto from "../components/DetalleProducto";

const Router = () => {
  return (
    <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/detalle">
        <DetalleProducto />
        </Route>
        <Route path="*">
        <h1>404</h1>
          </Route>
    </Switch>
  )
}

export default Router
