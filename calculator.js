
var args = message.slice(commandPrefix.length).replace(/\s+/g,'')

var msg = args.replace(/plus|sum|add|\++/gi,"+").replace(/minus|sub|-+/gi,"-").replace(/multiply|multi|x+|\*+/gi,"*").replace(/divide|÷+|\/+/gi,"/")

var regex = /([-+]?[0-9]*\.?[0-9]+[\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)/g

var match = msg.match(regex)

// toggles

// boolean => true/false
// number => 0-9
// string => "something"

var mention = true; // boolean
var ignoreLast = true; // boolean
var raw = false; // boolean
var rawDecimalPlace = 2; // number
var numberSeparator = true; // boolean
var separator = ","; // string

// You can configure the stuffs above.


if(match) {

 try {

var answer = eval(ignoreLast?msg.slice(0,match.join('').length):msg)

var rawAns = raw?(answer).toFixed(rawDecimalPlace):answer

var final = numberSeparator?rawAns.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) : rawAns


var result = mention?('` '+ final + ' ` *<@'+ authorId + '>* ** **'):('` '+ final + ' `')

setEmbedResponse('> Calculator',result)

} catch(err) {

var messageerror = '> <@'+authorId + '> I couldn\'t compute the given Equation. Maybe avoid using the operator twice or more for example "1++1" is not valid.'

setEmbedResponse('Invalid Expression',messageerror)

}

} else if(!args){

var cmd = commandPrefix

var note = '> **Things I can do**\n Addition, Subtraction, Division, Multiplication\n\n> **My usage**\n` '+ cmd + ' 8 - 1 `\n` '+ cmd + ' 6 + 1 `\n` '+ cmd + ' 7 × 1 `\n` '+ cmd + ' 14 / 2 `'

setEmbedResponse('Command Guide',note)

} else {

var messageerror = '> <@'+authorId + '> I\'m not able to compute the given argument... "'+ args.slice(0,30) +'"'

setEmbedResponse('Invalid Argument',messageerror)

}