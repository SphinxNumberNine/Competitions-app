module.exports = app => {
  app.use("/test", (req, res) => {
    res.send({ message: "This is still in development" });
  });
};
