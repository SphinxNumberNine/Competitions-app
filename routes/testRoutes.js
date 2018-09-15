module.exports = app => {
  app.use("/", (req, res) => {
    res.send({ message: "This is still in development" });
  });
};
