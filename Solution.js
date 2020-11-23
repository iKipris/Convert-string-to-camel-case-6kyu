function toCamelCase(str)
{
if (str.includes("-"))
{
  var pos=0;
  while(str.includes("-",pos))
  {
    pos=str.indexOf('-');
    var str=replaceAt(str,pos+1,`${str[pos+1].toUpperCase()}`)
    var str=replaceAt(str,pos,'');
    
  }
 }
 else 
 {
  var pos=0;
  while(str.includes("_",pos))
  {
    pos=str.indexOf('_');
    var str=replaceAt(str,pos+1,`${str[pos+1].toUpperCase()}`)
    var str=replaceAt(str,pos,'');
    
  }
 }
  return str;
}



var x=toCamelCase("");
console.log(x);

function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}
