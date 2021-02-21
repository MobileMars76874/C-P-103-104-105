Webcam.set({
width: 300,
height: 300,
image_format: "png",
png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function C_I(){
Webcam.snap(function(data_URL){
document.getElementById("I_T_R").innerHTML = "<img id='pic_to_identify' src='"+data_URL+"'>";
});
}

console.log("ml5 version is ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/YwGe5RdNb/model.json",model_loaded);

function model_loaded(){
console.log("Model loaded");
}

function I_I(){
img = document.getElementById("pic_to_identify");
classifier.classify(img, gotresult)
}

function gotresult(error, results){
if(error){
console.log(error);
}
else{
console.log(results);
document.getElementById("object").innerHTML = results[0].label
}
}
