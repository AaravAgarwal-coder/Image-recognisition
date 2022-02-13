Webcam.attach("#camera");
camera = document.getElementById("camera");

 Webcam.set({
     width: 190px,
     height: 190px,
     image-format: "png",
     png_quality: 100
    });
     

function Take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
};

console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier("https:/teachablemachine.withgoogle.com/models/ZafCROZkO/model.json", modelLoaded)

 function modelLoaded()
 {
     console.log("Model Loaded");
 }
