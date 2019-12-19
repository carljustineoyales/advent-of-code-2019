<h1>PART ONE</h1>

<p>On the way to your gravity assist around the Moon, your ship computer beeps angrily about a "1202 program alarm". On the radio, an Elf is already explaining how to handle the situation: "Don't worry, that's perfectly norma--" The ship computer bursts into flames.</p>

<p>You notify the Elves that the computer's magic smoke seems to have escaped. "That computer ran Intcode programs like the gravity assist program it was working on; surely there are enough spare parts up there to build a new Intcode computer!"</p>

<p>An Intcode program is a list of integers separated by commas (like 1,0,0,3,99). To run one, start by looking at the first integer (called position 0). Here, you will find an opcode - either 1, 2, or 99. The opcode indicates what to do; for example, 99 means that the program is finished and should immediately halt. Encountering an unknown opcode means something went wrong.</p>

<p>Opcode 1 adds together numbers read from two positions and stores the result in a third position. The three integers immediately after the opcode tell you these three positions - the first two indicate the positions from which you should read the input values, and the third indicates the position at which the output should be stored.</p>

<p>For example, if your Intcode computer encounters 1,10,20,30, it should read the values at positions 10 and 20, add those values, and then overwrite the value at position 30 with their sum.</p>

<p>Opcode 2 works exactly like opcode 1, except it multiplies the two inputs instead of adding them. Again, the three integers after the opcode indicate where the inputs and outputs are, not their values.</p>

<p>Once you're done processing an opcode, move to the next one by stepping forward 4 positions.</p>

<p>For example, suppose you have the following program:</p>
<p>
<strong>1,9,10,3,2,3,11,0,99,30,40,50</strong>
For the purposes of illustration, here is the same program split into multiple lines:
</p>
<p><strong>1,9,10,3,<br>
    2,3,11,0,<br>
    99,30,40,50<br></strong>



The first four integers, <strong>1,9,10,3</strong>, are at positions <strong>0</strong>, <strong>1</strong>, <strong>2</strong>, and <strong>3</strong>. Together, they represent the first opcode <strong>(1, addition)</strong>, the positions of the two inputs <strong>(9 and 10)</strong>, and the position of the <strong>output (3)</strong>. To handle this opcode, you first need to get the values at the input positions: position <strong>9</strong> contains <strong>30</strong>, and position <strong>10</strong> contains <strong>40</strong>. Add these numbers together to get <strong>70</strong>. Then, store this value at the output position; here, the output position <strong>(3)</strong> is at position 3, so it overwrites itself. Afterward, the program looks like this:

<p><strong>1,9,10,70,<br>
2,3,11,0,<br>
99,<br>
30,40,50<br></strong></p>

Step forward <strong>4</strong> positions to reach the next opcode, <strong>2</strong>. This opcode works just like the previous, but it multiplies instead of adding. The inputs are at positions <strong>3 and 11</strong>; these positions contain <strong>70 and 50</strong> respectively. Multiplying these produces <strong>3500</strong>; this is stored at position <strong>0</strong>:

<p><strong>3500,9,10,70,<br>
2,3,11,0,<br>
99,<br>
30,40,50<br></strong></p>
<p>Stepping forward <strong>4</strong> more positions arrives at opcode <strong>99</strong>, halting the program.</p>

<p>Here are the initial and final states of a few more small programs:</p>
<p>
<strong>
1,0,0,0,99 becomes 2,0,0,0,99 (1 + 1 = 2). <br>
2,3,0,3,99 becomes 2,3,0,6,99 (3 * 2 = 6). <br>
2,4,4,5,99,0 becomes 2,4,4,5,99,9801 (99 * 99 = 9801).<br>
1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99.<br>
</strong>
</p>

<p>Once you have a working computer, the first step is to restore the gravity assist program (your puzzle input) to the "1202 program alarm" state it had just before the last computer caught fire. To do this, before running the program, replace position <strong>1</strong> with the value <strong>12</strong> and replace position <strong>2</strong> with the value <strong>2</strong>. What value is left at position 0 after the program halts?</p>

<strong>Your puzzle answer was 4484226.</strong>

<h1>PART TWO</h1>
<p>
"Good, the new computer seems to be working correctly! Keep it nearby during this mission - you'll probably use it again. Real Intcode computers support many more features than your new one, but we'll let you know what they are as you need them."
</p>

<p>"However, your current priority should be to complete your gravity assist around the Moon. For this mission to succeed, we should settle on some terminology for the parts you've already built."</p>

<p>Intcode programs are given as a list of integers; these values are used as the initial state for the computer's memory. When you run an Intcode program, make sure to start by initializing memory to the program's values. A position in memory is called an address (for example, the first value in memory is at "address 0").</p>

<p>Opcodes </strong>(like 1, 2, or 99)</strong> mark the beginning of an instruction. The values used immediately after an opcode, if any, are called the instruction's parameters. For example, in the instruction <strong>1,2,3,4</strong>, <strong>1</strong> is the opcode; <strong>2, 3, and 4</strong> are the parameters. The instruction <strong>99 </strong>contains only an opcode and has no parameters.</p>

<p>The address of the current instruction is called the instruction pointer; it starts at <strong>0</strong>. After an instruction finishes, the instruction pointer increases by the number of values in the instruction; until you add more instructions to the computer, this is always <strong>4 (1 opcode + 3 parameters)</strong> for the add and multiply instructions. (The halt instruction would increase the instruction pointer by <strong>1</strong>, but it halts the program instead.)</p>

<p>"With terminology out of the way, we're ready to proceed. To complete the gravity assist, you need to determine what pair of inputs produces the output <strong>19690720</strong>."</p>

<p>The inputs should still be provided to the program by replacing the values at addresses <strong>1 and 2</strong>, just like before. In this program, the value placed in address <strong>1</strong> is called the <strong>noun</strong>, and the value placed in address <strong>2</strong> is called the <strong>verb</strong>. Each of the two input values will be between <strong>0 and 99</strong>, inclusive.</p>

<p>Once the program has halted, its output is available at address <strong>0</strong>, also just like before. Each time you try a pair of inputs, make sure you first reset the computer's memory to the values in the program (your puzzle input) - in other words, don't reuse memory from a previous attempt.</p>

<p>Find the input noun and verb that cause the program to produce the output <strong>19690720</strong>. What is <strong>100 * noun + verb?</strong> (For example, if <strong>noun=12</strong> and<strong> verb=2</strong>, the answer would be <strong>1202</strong>.)</p>

<strong>Your puzzle answer was 5696.</strong>
