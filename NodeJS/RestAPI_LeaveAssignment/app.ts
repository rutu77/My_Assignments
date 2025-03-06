import express from "express";
import { leaveRoute } from "./routes/LeaveRoutes";
import { managerRoute } from "./routes/ManagerRoutes";
import { adminRoute } from "./routes/AdminRoutes";

const app = express();
app.use(express.json());

app.use("/leaves", leaveRoute);
app.use("/manager", managerRoute);
app.use("/admin", adminRoute);


const PORT = 7400;
app.listen(PORT, () => {
    console.log("Server Running");
});
// http://localhost:3000/report
// http://localhost:3000/pending
