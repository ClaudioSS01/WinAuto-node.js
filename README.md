# WinAuto-node.js
WinAuto node.js
This is a JavaScript code that defines a set of functions to simulate keyboard inputs using the Windows Script Host. Each function executes a command in the terminal that creates a temporary Visual Basic script that sends the desired key combination to the active window using the SendKeys method. After sending the key combination, the temporary script is deleted.

Here is a brief description of each function:

cmd: receives a string representing a command to execute in the terminal, and sends its output to the console.
setaParaCima: simulates the up arrow key.
setaParaBaixo: simulates the down arrow key.
setaParaDireita: simulates the right arrow key.
setaParaEsquerda: simulates the left arrow key.
pressione: simulates a single key press, receives a string representing the key to press. If the key is "enter", it simulates an Enter key press.
pressioneControl: simulates a key press with the Control key held down, receives a string representing the key to press.
pressioneAlt: simulates a key press with the Alt key held down, receives a string representing the key to press.
pressioneAltShift: simulates a key press with the Alt and Shift keys held down, receives a string representing the key to press.
pressioneControlShift: simulates a key press with the Control and Shift keys held down, receives a string representing the key to press.
pressioneControlAlt: simulates a key press with the Control and Alt keys held down, receives a string representing the key to press.
pressioneWindowsR: simulates the Windows+R key combination to open the "Run" dialog box.
pressioneWindowsD: simulates the Windows+D key combination to show the desktop.
tab: simulates a Tab key press.
del: simulates a Delete key press.
delete_: simulates a Delete key press.
enter: simulates an Enter key press.
espaco: simulates a space key press.
printscript: simulates the Print Screen key press.
f1 to f12: simulate the corresponding function key press.
