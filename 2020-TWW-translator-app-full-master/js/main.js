// select the button using ID
var button = document.querySelector('#translateBtn');
var userInput = document.querySelector('#userInput');
var resultInput = document.querySelector('#result');
var resultInput2 = document.querySelector('#result2');
var loadingDiv = document.querySelector('#loading');
var inputHistory=document.querySelector('#inputHistory');
var outputHistory=document.querySelector('#outputHistory');
createTemp=function( inputText){

    let input=document.createElement("input");
    input.className="form-control";
    input.type="text";
    input.placeholder=""+inputText;
    input.readOnly="true";
    input.style="margin-top: 15px";
    
    inputHistory.prepend(input);        
    // var temp=historyStorage.inputHistory.pash(inputText);
    // historyStorage.setItem(historyStorage.inputHistory.,inputText);
  
    
    }

    createTemp2=function(resultInput)
    {
        
        let output=document.createElement("input");
        output.className="form-control";
        output.type="text";
        output.placeholder=""+resultInput;
        output.readOnly="true";
        output.style="margin-top: 15px";
        // document.sem.append(input);
        outputHistory.prepend(output);
      
        
    }






// var outputStorageArray= [""];
if(localStorage.getItem('inputStorage')!=null)
{
    var tempInputStorage2=localStorage.getItem('inputStorage');
    
    var tempInputStorage = tempInputStorage2.split(' ');
    var inputStorageArray= [""];
    var sizeArray=0;
    for (var index = 0; index < tempInputStorage.length; index++) {
        
        if(tempInputStorage[index]==',')
    {
        sizeArray++;
    }
    else
    {
        var temp=String( tempInputStorage[index]);
        var temp2=String( inputStorageArray[sizeArray]);
        inputStorageArray[sizeArray]=temp2+temp;
    }    
}

localStorage.setItem('inputStorage',inputStorageArray);
var TEMp1 =inputStorageArray[0];
var TEMP =TEMp1.split(',')

for (let index = 0; index < TEMP.length; index++) {
   if(index!=0)
   {
    createTemp(String(TEMP[index]));
   } 
}
}   
else
{
    var inputStorageArray= [""];
    
    localStorage.setItem('inputStorage',inputStorageArray);
    
    
}
if(localStorage.getItem('outputStorage')!=null)
{
    var tempOutputStorage2=localStorage.getItem('outputStorage');
    
    var tempOutputStorage = tempOutputStorage2.split(' ');
    var outputStorageArray= [""];
    var sizeArray2=0;
    for (var index = 0; index < tempOutputStorage.length; index++) {
        
        if(tempOutputStorage[index]==',')
        {
            sizeArray2++;
        }
        else
        {
            var temp=String( tempOutputStorage[index]);
            var temp2=String( outputStorageArray[sizeArray]);
            outputStorageArray[sizeArray]=temp2+temp;
        }    
    }
    
    localStorage.setItem('outputStorage',outputStorageArray);
    var TEMp1output =outputStorageArray[0];
var TEMPoutput =TEMp1output.split(',')

for (let index = 0; index < TEMPoutput.length; index++) {
   if(index!=0)
   {
    createTemp2(String(TEMPoutput[index]));
   } 
}
}   
else
{
    var outputStorageArray= [""];
    
    localStorage.setItem('outputStorage',outputStorageArray);
    
    
}


console.log(localStorage.getItem('inputStorage'));
console.log(localStorage.getItem('outputStorage'));


button.onclick = function () {
    // show the loading dialog
    loadingDiv.style.display = 'block';
    // disable translate button
    button.setAttribute('disabled','disabled');
    
    var inputText = userInput.value;
    
    // test - write into DOM
    resultInput.value = inputText;
    
    // REST API url endpoint
    var url = 'https://api.mymemory.translated.net/get?q=' + inputText + '&langpair=cs|en';
    
    // create the GET request against API to obtain JSON result
    fetch(url)
    .then(function(response) {
        // server returns the response, parse it to JSON
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
        // get translation string from JSON, put it in result input
        resultInput.value = myJson.responseData.translatedText;
        // hide the loading dialog
        loadingDiv.style.display = 'none';
        // enable translate button
        button.removeAttribute('disabled');
        create(inputText);
        create2(resultInput.value);
    });
}

create2=function(resultInput)
{
    
    let output=document.createElement("input");
    output.className="form-control";
    output.type="text";
    output.placeholder=""+resultInput;
    output.readOnly="true";
    output.style="margin-top: 15px";
    // document.sem.append(input);
    outputHistory.prepend(output);
    outputStorageArray.push(resultInput);
    localStorage.setItem('outputStorage',outputStorageArray);
    
}
create=function( inputText){

    let input=document.createElement("input");
    input.className="form-control";
    input.type="text";
    input.placeholder=""+inputText;
    input.readOnly="true";
    input.style="margin-top: 15px";
    
    inputHistory.prepend(input);        
    // var temp=historyStorage.inputHistory.pash(inputText);
    // historyStorage.setItem(historyStorage.inputHistory.,inputText);
    inputStorageArray.push(inputText);
   
    localStorage.setItem('inputStorage',inputStorageArray);
    
    
    }


