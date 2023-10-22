let species = "dog"
let shape = "circle";
let i = 0;
const $ = function(a) { return document.getElementById(a);}
//first with the species radio buttons
$("species").addEventListener('click', function (event) {
 if (event.target && event.target.matches("input[type='radio']")) { 
     species = event.target.value;
 } 
 });
$("shape").addEventListener('click', function (event) {
 if (event.target && event.target.matches("input[type='radio']")) { 
     shape = event.target.value;
 } 
 });
//base x y z color otlnCol spckCol fuzz group outline ballsize bodyarea addGroup texture 
const generate = ()=>{
    let list = [];
    let varvec = {};
    const num = 20;
    const rad = $("rad").value || 20;
    const base = $("base").value || 6;
    const vector = {x: Number($("axx").value) || 0, y: Number($("axy").value) || 0, z: Number($("axz").value) || 0};
    const xrot = Number($("xrot").value) *Math.PI/180;
    const rotate = {x: $("xrot").value || 0,y: 0, z: 0};
    const color = $("col").value || 85;
    const fuzz = $("fuzz").value || -1;
    const outsize = $("outsize").value || 0;
    const outcol = $("outcol").value || 0;
    const size = $("size").value || 20;
    const texture = $("texture").value || -1;
    //Lets go
    const radian = 360/num * Math.PI / 180;
    for (i = 0; i < num; i++){
        varvec.x = Math.round(Math.sin(radian * i) * rad) + vector.x;
        varvec.y = Math.round(Math.cos(radian * i) * Math.sin(xrot) * rad) + vector.y;
        varvec.z = Math.round(Math.cos(radian * i) * Math.cos(xrot) * -rad) + vector.z;
        list.push(`${base}, ${varvec.x}, ${varvec.y}, ${varvec.z}, ${color}, ${outcol}, ${outcol}, ${fuzz}, ${size}, 0, 0, ${texture}`);
    }
    $("res").innerHTML = list.join("<br>");
}
