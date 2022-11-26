
/*

This is a staircase of size "N = 4":

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, , denoting the size of the staircase.


*/

const staircase = (value) => {
  const step = new Array(value).fill().map((_, index) => ' '.repeat(value - index - 1) + '#'.repeat(index + 1)).join('\n')
  return step
}


const response = staircase(3)

console.log(response)