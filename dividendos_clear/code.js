operation = $("div .cont-date.operation");
settlement = $("div .cont-date.settlement");
description = $("div .cont-description");
valores = $("div .cont-value");

for(x=0;x<valores.length;x++){
console.log(description[x].innerText+"|"+operation[x].innerText +"|"+ settlement[x].innerText+"|" +valores[x].innerText)
}
