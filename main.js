function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/qWAcE06DB/model.json",modelReady);
}
function modelReady(){
   
    classifier.classify(gotresult);
}
function gotresult(error,results){
    if(error){
console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_tag").innerHTML="I can hear-"+results[0].label;
        document.getElementById('accuracy_tag').innerHTML="Accuracy-"+(results[0].confifedence*100).toFixed(2)+"%"
        image=document.getElementById("image");








        if(results[0].label=='barking'){
image.src="download.jpg";
        }
     else if(results[0].label=='roaring'){
            image.src="lion.jpg";
                    }
                   else if(results[0].label=='meow'){
                        image.src="cat.jpg";
                                }
                                else{
                                    image.src="BACK.gif";
                                }
    }


}
