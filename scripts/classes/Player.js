class   Player{
    constructor({position,collisionBlocks}){
        this.position=position;
        this.velocity = {
            x:0,
            y:gravity,
        };
        this.collisionBlocks=collisionBlocks;
        this.height=25;
        this.width=25;
    }
    draw(){
        ctx.fillStyle='red';
        ctx.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height);
    }
    applyGravity(){
        this.position.y+=this.velocity.y; 
        this.velocity.y+=gravity;
    }
    checkforVerticalCollions(){
        for(let i=0;i<this.collisionBlocks.length;i++){
            const collisionBlock=this.collisionBlocks[i];
            if(collision({object1:this,object2:collisionBlock})){
                if(this.velocity.y>0){
                    this.velocity.y=0;
                    this.position.y=
                        collisionBlock.position.y-this.height-0.01;
                }
                if(this.velocity.y<0){
                    this.velocity.y=0;
                    this.position.y=
                        collisionBlock.position.y+collisionBlock.height+0.01;
                }
                break;
            }
        }
    }
    checkforHorizontalCollions(){
        for(let i=0;i<this.collisionBlocks.length;i++){
            const collisionBlock=this.collisionBlocks[i];
            if(collision({object1:this,object2:collisionBlock})){
                if(this.velocity.x>0){
                    this.velocity.x=0;
                    this.position.x=
                        collisionBlock.position.x-this.width-0.01;
                }
                if(this.velocity.x<0){
                    this.velocity.x=0;
                    this.position.x=
                        collisionBlock.position.x+collisionBlock.width+0.01;
                }
                break;
            }
        }
    }
    update(){
        this.draw();
        this.position.x+=this.velocity.x;
        this.checkforHorizontalCollions();
        this.applyGravity();
        this.checkforVerticalCollions();
    }
}