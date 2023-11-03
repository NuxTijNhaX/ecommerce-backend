const app = require("./src/app");

const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
    server.close(() => console.log(`\n~ Closing server ~`));
});