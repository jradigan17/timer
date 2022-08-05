const readline = require('readline');

//Global Variable Color List
const conColorCyan = "\x1b[36m", conColorRed = '\x1b[91m', conColorGreen = '\x1b[92m', conColorGrey = '\x1b[90m', conColorReset = "\x1b[0m", conColorMagenta = `\x1b[95m`, conColorOrange = "\u001b[38;5;208m", conColorYellow = '\x1b[93m';
const conColorBright = "\x1b[1m", conColorDim = "\x1b[2m", conColorItalics = "\x1b[3m", conColorReverse = "\x1b[7m";
const consoleLine = '-'.repeat(process.stdout.columns);
const consoleHalfLine = '-'.repeat((process.stdout.columns)/2);

console.log(`\n${conColorOrange}   -------------------[LHL Interactive Timer]-------------------${conColorReset}`)

console.log(`${conColorMagenta}    USAGE Options:\n\t${conColorGreen}Press "b"${conColorCyan} to set off alarm\n\tEnter number between ${conColorGreen}1 ${conColorCyan}& ${conColorGreen}9${conColorCyan} to set a timer for # seconds\n\tUse ${conColorRed}CTRL-C${conColorCyan} or ${conColorRed}x${conColorCyan} to exit if needed${conColorReset}`);

console.log(`${conColorOrange}   -------------------------------------------------------------${conColorReset}\n`)


function grabKeys() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  // UNICODE character reference: https://www.rapidtables.com/code/text/unicode-characters.html
  stdin.on('data', function myHandler(key)  {
 
    if (key === '\u0078' || key === '\u0003') { // x or ctrl-c to exit
      process.stdout.write(`${conColorYellow}\n\n\tThanks for using me, ciao!\n\n${conColorReset}`);
      process.exit();
    }
    if (key === '\u0062') {  // 'b'
      process.stdout.write('\x07');
    }
    if (key > 0 && key < 10) {
      //if (key === '\u0033') {  // '3'
    console.log(`${conColorGreen}     ⏲️ Setting timer for ${key} seconds...${conColorReset}`);
      setTimeout(() => {
        process.stdout.write(`${'\x07'}${conColorRed} \t🔔 Your ${key} second timer is up! 🔔\n`);
      }, (key * 1000));
    }
  }); 
}
grabKeys();