import app from "./app"

const main = () => {
    app.listen(app.get("port"));
    console.log(`Server ON http://127.0.0.1:${app.get("port")}`);
};

main();