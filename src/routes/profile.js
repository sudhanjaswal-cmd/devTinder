const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../middlewares/auth");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      throw new Error("User doesn't exist");
    }

    res.send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = profileRouter;
