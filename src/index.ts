
import chalk from "chalk";
import figlet from "figlet";
console.log( 
    chalk.cyan(
      figlet.textSync("\t\t Timer", {
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      })
    )
  );

function main(): void {
  let till: number = new Date("dec 4, 2023 12:00:00").getTime();

  let timer: NodeJS.Timer = setInterval(function(){ 

  let current: number = new Date().getTime();

  let difference: number = till - current;

  let days: number = Math.floor(difference / (1000 * 60 * 60 * 24));


  let hours: number = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


  let minutes: number = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));


  let seconds: number = Math.floor((difference % (1000 * 60)) / 1000);

    console.log(chalk.green(`---Time Left---`));
    console.log(`Days: ${days}
    Hours: ${hours}
    Minutes: ${minutes}
    Seconds: ${seconds} `)

  if (difference < 0) {
    clearInterval(timer);
  }
  }, 1000);
}

main();