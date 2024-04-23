import App from "./app";
import IndexRoute from "./routes/index.route";

const app = new App({
    apiRoutes:[
        new IndexRoute()
    ],
    generalRoutes:[]
})

app.listen()