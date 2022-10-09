let txt = document.getElementById("inputBox");
document.getElementsByName('format-option').forEach(function(e,index) {
    e.addEventListener("click", ()=> {
        formatText(index);
    });
});

function formatText(index){
    switch(index){
        case 0: txt.value = txt.value.toUpperCase(); break;        
        case 1: txt.value = txt.value.toLowerCase(); break;        
        case 2: txt.value = capitalizeSentence(txt.value); break;  
        case 3: txt.value = capitalizeWord(txt.value); break;        
    }
}

function capitalizeWord(str){    
    let newString = removeExtraSpaces(str);
    let splitSentence = newString.split(" ");
    console.log(splitSentence)
    for (let i = 0; i < splitSentence.length; i++) {        
        splitSentence[i] = splitSentence[i][0].toUpperCase()+splitSentence[i].slice(1);
    }    
    console.log(splitSentence)
    splitSentence=splitSentence.join(" ");    
    // console.log(splitSentence)
    return splitSentence;
}
function capitalizeSentence(str){    
    let newString = removeExtraSpaces(str);
    let splitSentence = newString.split(". ");    
    // console.log(splitSentence)
    for (let i = 0; i < splitSentence.length; i++) {                
        splitSentence[i] = splitSentence[i][0].toUpperCase()+splitSentence[i].slice(1);
    }
    // console.log(splitSentence)
    splitSentence=splitSentence.join(". ");
    // console.log(splitSentence)
    return splitSentence;
}
function removeExtraSpaces(str){
    return str.replace(/\s+/g,' ').trim();
}