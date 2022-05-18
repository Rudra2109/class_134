img = "";
status = "";
objects = "";


function preload() {
    img = loadImage('dog_cat.jpg'); 
}

function modelLoaded() {
    console.log("modelLoaded");
    status = "true";
    objectDetector.detect(video, gotResults);
}

function gotResults(error, results) {
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(video, 0, 0, 380, 380);
        
        if(status !="")
        {
            r = random(255);
            g = random(255);
            b = random(255);
            objectDetector.detect(video, gotResults)
          for (i = 0; i < objects.length; i++);
          {
              document.getElementById("status").innerHTML = "Status : Objects Detected";
              document.getElementById("number_of_objects").innerHTML = "Number of objects detected are ; "+ object. length;

              fill("#FF000");
              percent = floor(object[i].confidence * 100)
              text(objects[i].lable + " " + percent + "%", object[i].x, object[i].y);
              noFill();
              stroke("#FF0000")
              rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
          }
        }

        
    fill("#FF0000");
    text("Dog", 45 , 75);
    noFill();
    stroke("#FF0000");
    rect(30 ,60 , 450 , 350);

    fill("#FF0000");
    text("Cat", 320 , 120);
    noFill();
    stroke("#FF0000");
    rect(300 ,90 , 270 , 320);
}

