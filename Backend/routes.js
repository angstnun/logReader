module.exports = function (app) {

    app.get("/", (req, res) => {
        res.send("Let's try ");
    });
};