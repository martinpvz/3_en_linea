let ganadoC=0, ganadoH=0;
let person, person2;
function nombres() {
    var userInput = new Array();
    do {
       userInput = prompt('Nombre Jugador 1: ');
       if (userInput.length != 3) {
          alert("Solo pueden ser tres caracteres");
       }
    } while (userInput.length != 3);
    person=userInput;
    do {
        userInput = prompt('Nombre Jugador 2: ');
        if (userInput.length != 3) {
           alert("Solo pueden ser tres caracteres");
        }
     } while (userInput.length != 3);
     person2=userInput;
}

class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: 'Bootloader'
        });
    }

    init() {
        console.log('Escena Bootloader1');
    }
    
    preload() {
        this.load.path = './assets/';
        this.load.image(['huesos', 'calavera', 'tablero', 'drop', 'ganaste']);
        this.load.image("fondo", "fondo.png");
        this.load.image("gato", "gato.png");
        this.load.image("reiniciar", "reiniciar.png");
    }

    create() {
        // HUESOS
        this.x = this.add.image(1030, 300, "huesos").setInteractive();
        this.x.setScale(0.20);
        this.input.setDraggable(this.x);
        this.x.setDepth(1);
        this.x.setName("x");

        this.x2 = this.add.image(1030, 300, "huesos").setInteractive();
        this.x2.setScale(0.20);
        this.input.setDraggable(this.x2);
        this.x2.setDepth(1);
        this.x2.setName("x");

        this.x3 = this.add.image(1030, 300, "huesos").setInteractive();
        this.x3.setScale(0.20);
        this.input.setDraggable(this.x3);
        this.x3.setDepth(1);
        this.x3.setName("x");

        this.x4 = this.add.image(1030, 300, "huesos").setInteractive();
        this.x4.setScale(0.20);
        this.input.setDraggable(this.x4);
        this.x4.setDepth(1);
        this.x4.setName("x");

        this.x5 = this.add.image(1030, 300, "huesos").setInteractive();
        this.x5.setScale(0.20);
        this.input.setDraggable(this.x5);
        this.x5.setDepth(1);
        this.x5.setName("x");

        // CALAVERAS
        this.circle = this.add.image(300, 420, "calavera").setInteractive();
        this.circle.setScale(0.25);
        this.input.setDraggable(this.circle);
        this.circle.setDepth(1);
        this.circle.setName("o");

        this.circle2 = this.add.image(300, 420, "calavera").setInteractive();
        this.circle2.setScale(0.25);
        this.input.setDraggable(this.circle2);
        this.circle2.setDepth(1);
        this.circle2.setName("o");

        this.circle3 = this.add.image(300, 420, "calavera").setInteractive();
        this.circle3.setScale(0.25);
        this.input.setDraggable(this.circle3);
        this.circle3.setDepth(1);
        this.circle3.setName("o");

        this.circle4 = this.add.image(300, 420, "calavera").setInteractive();
        this.circle4.setScale(0.25);
        this.input.setDraggable(this.circle4);
        this.circle4.setDepth(1);
        this.circle4.setName("o");

        this.circle5 = this.add.image(300, 420, "calavera").setInteractive();
        this.circle5.setScale(0.25);
        this.input.setDraggable(this.circle5);
        this.circle5.setDepth(1);
        this.circle5.setName("o");

        this.tablero = this.add.image(675, 375, "tablero").setInteractive();
        this.tablero.setScale(0.8);
        this.tablero.setDepth(1);
        
        this.fondo = this.add.image(675, 400, "fondo").setInteractive();
        this.fondo.setScale(1.12);
        this.fondo.setDepth(0);

        this.drop = this.add.image(535, 239.5, 'drop').setName("1");
        this.drop.setDepth(-1);
        this.drop.setScale(1.55);
        this.drop.setInteractive();
        this.drop.input.dropZone = true;

        this.drop2 = this.add.image(675, 239.5, 'drop').setName("2");
        this.drop2.setDepth(-1);
        this.drop2.setScale(1.55);
        this.drop2.setInteractive();
        this.drop2.input.dropZone = true;

        this.drop3 = this.add.image(815, 239.5, 'drop').setName("3");
        this.drop3.setDepth(-1);
        this.drop3.setScale(1.55);
        this.drop3.setInteractive();
        this.drop3.input.dropZone = true;
        
        this.drop4 = this.add.image(535, 375, 'drop').setName("4");
        this.drop4.setDepth(-1);
        this.drop4.setScale(1.55);
        this.drop4.setInteractive();
        this.drop4.input.dropZone = true;
        
        this.drop5 = this.add.image(675, 375, 'drop').setName("5");
        this.drop5.setDepth(-1);
        this.drop5.setScale(1.55);
        this.drop5.setInteractive();
        this.drop5.input.dropZone = true;

        this.drop6 = this.add.image(815, 375, 'drop').setName("6");
        this.drop6.setDepth(-1);
        this.drop6.setScale(1.55);
        this.drop6.setInteractive();
        this.drop6.input.dropZone = true;

        this.drop7 = this.add.image(535, 510, 'drop').setName("7");
        this.drop7.setDepth(-1);
        this.drop7.setScale(1.55);
        this.drop7.setInteractive();
        this.drop7.input.dropZone = true;

        this.drop8 = this.add.image(675, 510, 'drop').setName("8");
        this.drop8.setDepth(-1);
        this.drop8.setScale(1.55);
        this.drop8.setInteractive();
        this.drop8.input.dropZone = true;

        this.drop9 = this.add.image(815, 510, 'drop').setName("9");
        this.drop9.setDepth(-1);
        this.drop9.setScale(1.55);
        this.drop9.setInteractive();
        this.drop9.input.dropZone = true;

        this.gato = this.add.image(180, 240, 'gato').setName("gato");
        this.gato.setDepth(2);
        this.gato.setScale(0.8);

        this.reiniciar = this.add.image(1050, 500, 'reiniciar').setName("reiniciar");
        this.reiniciar.setDepth(2);
        this.reiniciar.setScale(0.2);
        this.reiniciar.setInteractive();

        this.ganaste = this.add.image(600, 340, 'ganaste').setName("ganaste");
        this.ganaste.setDepth(2);
        this.ganaste.setScale(0.85);
        this.ganaste.setAlpha(0);
        
        this.score = this.add.text(225, 300, ("Calacas: "+ganadoC), { font: '38px Arial Black' });
        this.score.setTint(0xF38211);
        this.score.setDepth(1);
        this.score2 = this.add.text(950, 200, ("Huesos"+': '+ganadoH), { font: '38px Arial Black' });
        this.score2.setTint(0xF38211);
        this.score2.setDepth(1);
        if(person){
            this.score.text = person+': '+ganadoC;
            this.score2.text = person2+': '+ganadoH;
        }

        let movesX = []
        let movesO = []
        let posibilities = [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 5, 9],
        [3, 5, 7],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]]
        let imagenesCal = [this.circle, this.circle2, this.circle3, this.circle4, this.circle5]
        let imagenesHue = [this.x, this.x2, this.x3, this.x4, this.x5]
        let timedEvent;  


        const eventos = Phaser.Input.Events;
        this.input.on(eventos.DRAG_START, (pointer, obj, dragX, dragY) => {
            if(!person){
                nombres();
            }
            if(person){
                this.score.text = person+': '+ganadoC;
                this.score2.text = person2+': '+ganadoH;
            }
            obj.setScale(0.15);
        });
        
        this.input.on(eventos.DRAG, (pointer, obj, dragX, dragY) => {
            obj.x = dragX;
            obj.y = dragY;
        });
        
        this.input.on(eventos.DRAG_END, (pointer, obj, dropzone) => {
            if(obj.name=="x"){
                obj.setScale(0.20);
            }
            if(obj.name=="o"){
                obj.setScale(0.25);
            }

            if ( !dropzone ) {
                obj.x = obj.input.dragStartX;
                obj.y = obj.input.dragStartY;
            }
        });

        // this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
        //     dropzone.setTint(0xabdcd2);
        //     //console.log(dropzone.name)
        // });
        // this.input.on(eventos.DRAG_LEAVE, (pointer, obj, dropzone) => {
        //     dropzone.clearTint();
        // });

        let reiniciarJ = () => {
            this.scene.restart();
        }

        this.input.on(eventos.DROP, (pointer, obj, dropzone) => {
            obj.x = dropzone.x;
            obj.y = dropzone.y;
            //console.log("entre al cuado")
            //console.log(dropzone.name)
            //console.log(obj.name)

            // CUANDO SE SUELTA UNA CALAVERA 
            if(obj.name == "o") {
                movesO.push(parseInt(dropzone.name))
                //console.log(movesO)
                const verificar = (valor) => movesO.includes(valor);
                for (let mov of posibilities) {
                    if (mov.every(verificar)) {
                        console.log("GANASTE CALAVERA")
                        this.ganaste.setAlpha(1)
                        // this.score.text = "Calacas: "+ scoreCalaca(1);
                        ganadoC+=1;
                        this.score.text = person+': '+ganadoC;
                        timedEvent = this.time.delayedCall(4000, reiniciarJ, [], this);
                        //this.scene.restart();
                    }
                }
                for (let img of imagenesCal) {
                    img.input.draggable = false
                }
                for (let img of imagenesHue) {
                    img.input.draggable = true
                }

            }
            // CUANDO SE SUELTAN HUESOS
            else if (obj.name == "x") {
                movesX.push(parseInt(dropzone.name))
                //console.log(movesX)
                const verificar2 = (valor) => movesX.includes(valor);
                for (let mov of posibilities) {
                    if (mov.every(verificar2)) {
                        console.log("GANASTE HUESOS");
                        this.ganaste.setAlpha(1);
                        ganadoH+=1;
                        this.score.text = person+': '+ganadoH;
                        timedEvent = this.time.delayedCall(4000, reiniciarJ, [], this);
                        //this.scene.restart();
                    }
                }
                for (let img of imagenesCal) {
                    img.input.draggable = true
                }
                for (let img of imagenesHue) {
                    img.input.draggable = false
                }
            }

        });
        
        this.reiniciar.on(eventos.POINTER_OVER, function() {
            this.setScale(0.22);
        });
        this.reiniciar.on(eventos.POINTER_OUT, function() {
            this.setScale(0.2);
        });
        this.reiniciar.on(eventos.POINTER_DOWN, function() {
            this.scene.restart();
        }, this);

        // if(!person){
        //     nombres();
        // }


        if(ganadoC>ganadoH){
            alert("    LeaderBoard \n" + 
            "Ganando "+person+' Score: '+ganadoC+"\n"+
            "Perdiendo "+person2+' Score: '+ganadoH);
            console.log(person+': '+ganadoC)
            console.log(person2+': '+ganadoH)
        }
        if(ganadoH>ganadoC){
            alert("    LeaderBoard \n" + 
            "Ganando "+person2+' Score: '+ganadoH+"\n"+
            "Perdiendo "+person+' Score: '+ganadoC);
            console.log("LeaderBoard")
            console.log(person2+': '+ganadoH)
            console.log(person+': '+ganadoC)
        }
        if(ganadoH==ganadoC&&ganadoC>0&&ganadoH==0){
            alert("    LeaderBoard \n" + 
            "Empate "+person2+' Score: '+ganadoH+"\n"+
            "Empate "+person+' Score: '+ganadoC);
            console.log("LeaderBoard")
            console.log(person2+': '+ganadoH)
            console.log(person+': '+ganadoC)
        }
        
    }

    update(time, delta) {
        
    }
}

export default Bootloader;