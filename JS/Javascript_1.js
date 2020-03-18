function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}


function newThis() {
    var x = document.getElementsByClassName("New_and_This");
    x[0].innerHTML = "Hello World!";
}

var c = document.getElementById("cnv1");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

var z = document.getElementById("cnv1");
var ztx = z.getContext("2d");

var grd = ztx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ztx.fillStyle = grd;
ztx.fillRect(20, 20, 150, 100);