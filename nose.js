const $ = a => document.getElementById(a);
const canvas = $("nose"); 
const [x,y] = [174,174];
let d = Number($("d").value);
const colors = ["#515151", "#757575", "#C3BFB6", "#CBC6C0","#D7D2CC","#DFDAD4","#E7E2DE"];
const ctx = canvas.getContext("2d"); 
const nose = ()=>{
    ctx.translate(174-d/2, 174-d/2);
    let sqd = Math.sqrt(d)/2;
    let [x1, x2, y1, y2, d1] = [0, d, 0, d, d];
    ctx.beginPath();
    ctx.arc(d/2, d/2, d/2, 0, 2 * Math.PI);
    ctx.fillStyle = "#000";
    ctx.fill();
    //2nd
    x1 = x1 - d/10;
    y1 = y1 - d/10;
    x2 = x2 - d/10;
    y2 = y2 - d/10;
    
    x1 = x1 + d/5;
    y1 = y1 + d/5;
    x2 = x2 - d/5;
    y2 = y2 - d/5;
    d1 = x2 - x1 < 1 ? 1 : x2 - x1;
    ctx.beginPath();
    ctx.arc(x1+d1/2, y1+d1/2, d1/2, 0, 2 * Math.PI);
    ctx.fillStyle = colors[0];
    ctx.fill();
    for (let i = 1; i < 6; i++){
        x1 = x1 - d1/12;
        x2 = x2 - d1/12;
        y1 = y1 - d1/12;
        y2 = y2 - d1/12;
    
        x1 = x1 + d1/6;
        y1 = y1 + d1/6;
        x2 = x2 - d1/6;
        y2 = y2 - d1/6;
        d1 = x2 - x1 < 1 ? 1 : x2 - x1;
        //d1 = x1 - x2 >= 0 ? x1 - x2 + 1 : 1;
        ctx.beginPath();
        ctx.arc(x1 + d1/2, y1 + d1/2, d1/2, 0, 2 * Math.PI);
        ctx.fillStyle = colors[i];
        ctx.fill();
    }
    ctx.translate(-174+d/2, -174+d/2);
}
ctx.rect(174, 0, 1, 349); 
ctx.fillStyle = "#ffaaaa";
ctx.fill();
ctx.rect(0, 174, 349, 1); 
ctx.fillStyle = "#ffaaaa";
ctx.fill();
nose();

const render = ()=>{
d = Number($("d").value);
    ctx.clearRect(0,0,349,349);
    ctx.beginPath();
    ctx.rect(174, 0, 1, 349); 
ctx.fillStyle = "#ffaaaa";
ctx.fill();
ctx.rect(0, 174, 349, 1); 
ctx.fillStyle = "#ffaaaa";
ctx.fill();
nose();
}
