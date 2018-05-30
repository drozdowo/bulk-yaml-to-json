var dookie = require('dookie');
var fs = require('fs');
var yaml = require('js-yaml');

const filesToConvert = fs.readdirSync('./yaml/');

console.log(filesToConvert);

filesToConvert.forEach((fileName) =>{
    convertToJson(fileName.replace('.yaml', ''));
})

function convertToJson(fileToConvert){
    obj = yaml.load(fs.readFileSync('./yaml/'+fileToConvert+'.yaml', {encoding: 'utf-8'}));
    fs.writeFileSync('./json/'+fileToConvert+'.json', JSON.stringify(obj, null, 2));
}
