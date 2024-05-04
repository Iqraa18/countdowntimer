import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please Enter The Amount Of Second",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please Enter Valid Number";
        }
        else if (input > 60) {
            return "Seconds Must Be In 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDeff = differenceInSeconds(intervalTime, currentTime);
        if (timeDeff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const mint = Math.floor((timeDeff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDeff % 60);
        console.log(`${mint.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
