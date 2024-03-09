class Eel {
    constructor(ctx){
        this.x            = 560;
        this.y            = 450;
        this.xSpeed       = 10;
        this.ySpeed       = 0;
        this.ctx          = ctx;
        this.width        = 160;
        this.height       = 60;
        this.direction    = 1; //left
        this.assets       = {};
        this.offset       = 0;
        this.animation    = 0;
        this.loadAsset(1,  "images/ampL.png");
        this.loadAsset(-1, "images/ampR.png");
        this.animations = [
            {
                onBegin: ()=>{
                    
                },
                onEnd: ()=>{
                    if (this.direction == 1)
                        this.offset = 0;
                    else
                        this.offset = 9;
                }
            },
            {
                onBegin: ()=>{
                    this.xSpeed *= -1;
                },
                onEnd: ()=>{
                    if (this.direction == 1){
                        this.offset = 0;
                    }
                    else {
                        this.offset = 9;
                    }
                    this.animation  = 0;
                    this.direction *= -1;
                    this.xSpeed    *= -1;
                }
            }
        ];
    }
    draw(){
        if (!this.assets[this.direction]) return;
        this.ctx.drawImage(
            this.assets[this.direction], 
            this.width  * this.offset, 
            this.height * this.animation,
            this.width,   this.height, 
            this.x,       this.y,
            this.width,   this.height
        );
    }
    clear(){
        this.ctx.clearRect(
            this.x,     this.y,
            this.width, this.height
        );
    }
    move(){
        this.x -= this.xSpeed * this.direction;
        this.y += this.ySpeed * this.direction;
    }
    update(){
        this.move();
        this.draw();
        this.offset += 1 * this.direction;
        if (this.isEndOffset())
          this.animations[this.animation].onEnd();
    }
    loadAsset(name, src){
        let img    = new Image;
        img.src    = src;
        img.onload = () => {
            this.assets[name] = img;
        }
    }
    isEndOffset(){
        if (this.direction == 1)
            return this.offset > 9;
        else
            return this.offset < 0;
    }
    setAnimation(n){
        this.offset    = this.direction == 1 ? 0: 9;
        this.animation = n;
        this.animations[n].onBegin();
    }
}

const ctx = document.getElementById("game")
      .getContext("2d");
const eel = new Eel(ctx);

const update = () => {
    eel.clear();
    eel.update();
    setTimeout(update, 50);
}
const changeDir = () => {
    eel.setAnimation(1);
    setTimeout(changeDir, 3000);
}
update();
setTimeout(changeDir, 1500);