class Organism {
 
    constructor(options){
        this.number = options.number;
        this.name = options.name;
        this.type = options.type;
        this.size = options.size;
        this.color = options.color;
        this.speed = options.speed;
        this.x = coordX();
        this.y = coordY(this.type) ;
    }

    

    drawFigure() {
        if(this.type === "bental"){
            arca(this.x, this.y, this.color, this.size);
        }

        if(this.type === "pelagial"){
            circle (this.x, this.y, this.color, this.size)
        }
    }


}

class Plants extends Organism {
    constructor(options){
        super (options)
    }
    

}

class Victim extends Organism {
    constructor(options){
        super (options)
    }

    move(){
        if(this.type === "bental"){
            if (this.x < 5) {
                this.x += this.speed
            }else if (this.x > 1090) {
                this.x += this.speed * -1
            } else {
                this.x += this.speed * posOrNeg(); 
            }   
        }
    
        if(this.type === "pelagial"){
            if (this.x < 5) {
                this.x += this.speed
            }else if (this.x > 1090) {
                this.x += this.speed * -1
            } else {
                this.x += this.speed * posOrNeg(); 
            } 
            if (this.y < 205) {
                this.y += this.speed
            }else if (this.x > 540) {
                this.y += this.speed * -1
            } else {
                this.y += this.speed * posOrNeg(); 
            } 
            
        }
    }


}

class Hunter extends Organism {
    constructor(options){
        super (options)
    }
}

const test1 = new Plants({
    number: 0,
    name: "Algae",
    type:choise(posOrNeg()),
    size: 5,
    color: "green",
    speed: 0,
})

const test2 = new Victim({
    number: 1,
    name: "Bacterium",
    type:choise(posOrNeg()),
    size: 10,
    color: "black",
    speed: 3,
})

const arraySpecies = [test1, test2];