import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from './component/Home'
import Products from "./component/Products";
import Product from "./component/Product";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route exact path='/' component={Home} />
            <Route  path='/products' component={Products} />
            <Route  path='/products/:id' component={Product} />
       </BrowserRouter>
   )
}

export default Routes;