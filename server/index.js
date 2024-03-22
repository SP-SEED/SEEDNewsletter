require("dotenv").config();

const app = require("./controller/app");

const PORT = process.env.PORT || 8081; // truthy (process.env.PORT or 8081)

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
