function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classiifer= ml5.imageClassifier('MobileNet', modelloaded)
}

function modelloaded(){
  console.log("model is loadeed")
}

function draw(){
  image(video,0,0,300,300)
  classiifer.classify(video,gotresults)
}

function gotresults(error,results){
if (error) {
  console.log(error)
} else {
  console.log(results)
  
}
}




