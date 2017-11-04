// ex2_process.js
process.argv.forEach(function(item,index){
    console.log(index + ": " + typeof(item) + "i",item);
    if(item === '--exit') {
        var exitTime = Number(process.argv[index+1]);
        setTimeout(function(){},exitTime);
    }
});

// REPL : node ex2_process.js -- exit 3000
