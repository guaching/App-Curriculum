import express  from "express";
import morgan from "morgan";
import path from "path";
import indexRoutes from "./routes/index.routes.js";
 import formRoutes from "./routes/form.routes.js";

const __dirname = path.resolve();
const app = express();

//settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));


//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extends: false}))
app.use(indexRoutes);
app.use("/api", formRoutes);

//routes
app.use((req, res, next) => {
  res.status(404).json({message: "Not Found"})
});



app.listen(3000);
console.log(__dirname)
console.log("Server running on port 3000");