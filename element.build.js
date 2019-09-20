const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
    // NOTE: Have changed angular.json file, 'outputPath' to 'dist' rather than 'dist/<application-name>'. If you are using default angular.json then for file paths below, add <application-name> in file path. Example - './dist/my-medium/runtime.js', do the same for all.
    const files = [
        "dist/runtime-es5.js",
        "dist/polyfills-es5.js",
        "dist/scripts.js",
        "dist/main-es5.js"
    ];
    await fs.ensureDir("elements");
    await concat(files, "elements/chat-bot.js"); // NOTE: Below lines are for testing, update the path according to your test application or comment/remove the below code before running the 'npm run build:elements' command.

    fs.copyFileSync("dist/styles.css", "./elements/styles.css");
})();
