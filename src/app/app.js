// HackForge application entry point.

const app = {
  name: "HackForge",
  version: "0.1.0",
};

function startApp() {
  console.log(`${app.name} v${app.version} started`);
}

module.exports = { app, startApp };
