#!/usr/bin/node
/* "a script that prints a message depending of the number of arguments passed" */

const args = process.argv;

if 	(args.length <= 2) {
	console.log('no argument' );
}	else if (args.length === 3) {
	console.log('argument found' );
}	else {
	console.log('argument found');
}
