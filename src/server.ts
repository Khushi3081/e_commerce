import App from "./app";
import ProductsRoute from "./routes/Products/product.routes";
import IndexRoute from "./routes/index.route";

const app = new App({
    apiRoutes:[
        new IndexRoute(),
        new ProductsRoute()
    ],
    generalRoutes:[]
})

app.listen()