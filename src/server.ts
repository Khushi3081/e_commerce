import App from "./app";
import CartProductsRoute from "./routes/CartProducts/cartProduct.routes";
import ProductsRoute from "./routes/Products/product.routes";
import IndexRoute from "./routes/index.route";

const app = new App({
    apiRoutes:[
        new IndexRoute(),
        new ProductsRoute(),
        new CartProductsRoute()
    ],
    generalRoutes:[]
})

app.listen()