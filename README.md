# WinAuto-node.js
WinAuto node.js
This is a JavaScript code that defines a set of functions to simulate keyboard inputs using the Windows Script Host. Each function executes a command in the terminal that creates a temporary Visual Basic script that sends the desired key combination to the active window using the SendKeys method. After sending the key combination, the temporary script is deleted.

# Here is a brief description of each function:

<ul>
<li><b>cmd:</b> receives a string representing a command to execute in the terminal, and sends its output to the console.
</li><br><li>setaParaCima: simulates the up arrow key.
</li><br><li>setaParaBaixo: simulates the down arrow key.
</li><br><li>setaParaDireita: simulates the right arrow key.
</li><br><li>setaParaEsquerda: simulates the left arrow key.
</li><br><li>pressione: simulates a single key press, receives a string representing the key to press. If the key is "enter", it simulates an Enter key press.
</li><br><li>pressioneControl: simulates a key press with the Control key held down, receives a string representing the key to press.
</li><br><li>pressioneAlt: simulates a key press with the Alt key held down, receives a string representing the key to press.
</li><br><li>pressioneAltShift: simulates a key press with the Alt and Shift keys held down, receives a string representing the key to press.
</li><br><li>pressioneControlShift: simulates a key press with the Control and Shift keys held down, receives a string representing the key to press.
</li><br><li>pressioneControlAlt: simulates a key press with the Control and Alt keys held down, receives a string representing the key to press.
</li><br><li>pressioneWindowsR: simulates the Windows+R key combination to open the "Run" dialog box.
</li><br><li>pressioneWindowsD: simulates the Windows+D key combination to show the desktop.
</li><br><li>tab: simulates a Tab key press.
</li><br><li>del: simulates a Delete key press.
</li><br><li>delete_: simulates a Delete key press.
</li><br><li>enter: simulates an Enter key press.
</li><br><li>espaco: simulates a space key press.
</li><br><li>printscript: simulates the Print Screen key press.
</li><br><li>f1 to f12: simulate the corresponding function key press.
</li></ul>
