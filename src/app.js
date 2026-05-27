const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/requests");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);

// app.get("/user", async (req, res) => {
//   const userEmail = req.body.email;
//   try {
//     const user = await User.find({ email: userEmail });
//     if (user.length == 0) {
//       res.status(404).send("User not found");
//     } else {
//       res.send(user);
//     }
//   } catch (err) {
//     res.status(400).send("Somethiing went wrong");
//   }
// });

// app.get("/feed", async (req, res) => {
//   try {
//     const user = await User.find({});
//     res.send(user);
//   } catch (err) {
//     res.status(400).send("Somethiing went wrong");
//   }
// });

// app.delete("/user", async (req, res) => {
//   const userId = req.body.userId;
//   try {
//     const user = await User.findByIdAndDelete(userId);
//     res.send("User deleted successfully");
//   } catch (err) {
//     res.status(400).send("Somethiing went wrong");
//   }
// });

// app.patch("/user/:userId", async (req, res) => {
//   const userId = req.params.userId;
//   const data = req.body;

//   try {
//     const ALLOWED_UPDATES = [
//       "userId",
//       "photoUrl",
//       "about",
//       "gender",
//       "age",
//       "skills",
//     ];

//     const isUpdateAllowed = Object.keys(data).every((k) =>
//       ALLOWED_UPDATES.includes(k),
//     );

//     if (!isUpdateAllowed) {
//       throw new Error("Update not allowed");
//     }

//     if (data.skills?.length > 10) {
//       throw new Error("Skills cannot be more than 10");
//     }

//     await User.findByIdAndUpdate({ _id: userId }, data, {
//       returnDocument: "after",
//       runValidators: true,
//     });

//     res.send("Users updated successfully");
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// });

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(3000, () => {
      console.log("Server running successfully");
    });
  })
  .catch((err) => {
    console.error("Database connected failed");
  });
