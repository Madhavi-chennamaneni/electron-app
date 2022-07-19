const vm = require('vm');
const util = require('util');
//import {unhook_stdout , unhook_stderr} from './logOutput.js';
const { unhook_stdout , unhook_stderr } = require('./logOutput.js')
const sandbox = { console: console };
vm.createContext(sandbox); // Contextify the sandbox.

//const code = 'x += 40; var y = 17;';
// `x` and `y` are global variables in the sandboxed environment.
// Initially, x has the value 2 because that is the value of sandbox.x.
//vm.runInContext(code, sandbox);

//console.log(sandbox.x); // 42
//console.log(sandbox.y); // 17

//console.log(x); // 1; y is not defined.

//require('child_process').fork('code.js');
//vm.runInContext('function sayhello(){console.log("hello");}\nsayhello()', sandbox);
//vm.runInContext('console.log("x")', sandbox);
//console.log(util.inspect(sandbox));

// console.stdlog = console.log.bind(console);
// console.logs = [];
// console.log = function(){
//     console.logs.push(Array.from(arguments));
//     console.stdlog.apply(console, arguments);
// }

const code = '(function test() {console.log("hello")})';
vm.runInContext(code, sandbox)();
//console.log(util.inspect(sandbox));
unhook_stdout()
unhook_stderr()



