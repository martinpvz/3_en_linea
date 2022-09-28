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
        this.load.image(['huesos', 'calavera', 'tablero', 'drop']);
        this.load.image("verde", "verde.jpg");
        this.load.image("fondo", "fondo.png");
        this.load.image("gato", "gato.png");
        this.load.image("reiniciar", "reiniciar.png");
    }

    create() {
        this.x = this.add.image(1030, 300, "huesos").setInteractive();
        this.x.setScale(0.20);
        this.input.setDraggable(this.x);
        this.x.setDepth(1);

        this.circle = this.add.image(300, 420, "calavera").setInteractive();
        this.circle.setScale(0.25);
        this.input.setDraggable(this.circle);
        this.circle.setDepth(1);

        this.tablero = this.add.image(675, 375, "tablero").setInteractive();
        this.tablero.setScale(0.8);
        this.tablero.setDepth(1);
        

        this.cuadro = this.add.image(675, 375, "verde").setInteractive();
        this.cuadro.setScale(0.6);
        this.cuadro.setDepth(0);
        
        this.fondo = this.add.image(675, 400, "fondo").setInteractive();
        this.fondo.setScale(1.12);
        this.fondo.setDepth(0);

        this.drop = this.add.image(535, 239.5, 'drop').setName("hola");
        this.drop.setDepth(-1);
        this.drop.setScale(1.55);
        this.drop.setInteractive();
        this.drop.input.dropZone = true;

        this.drop2 = this.add.image(675, 239.5, 'drop').setName("hola");
        this.drop2.setDepth(-1);
        this.drop2.setScale(1.55);
        this.drop2.setInteractive();
        this.drop2.input.dropZone = true;

        this.drop3 = this.add.image(815, 239.5, 'drop').setName("hola");
        this.drop3.setDepth(-1);
        this.drop3.setScale(1.55);
        this.drop3.setInteractive();
        this.drop3.input.dropZone = true;
        
        this.drop4 = this.add.image(535, 375, 'drop').setName("hola");
        this.drop4.setDepth(-1);
        this.drop4.setScale(1.55);
        this.drop4.setInteractive();
        this.drop4.input.dropZone = true;
        
        this.drop5 = this.add.image(675, 375, 'drop').setName("hola");
        this.drop5.setDepth(-1);
        this.drop5.setScale(1.55);
        this.drop5.setInteractive();
        this.drop5.input.dropZone = true;

        this.drop6 = this.add.image(815, 375, 'drop').setName("hola");
        this.drop6.setDepth(-1);
        this.drop6.setScale(1.55);
        this.drop6.setInteractive();
        this.drop6.input.dropZone = true;

        this.drop7 = this.add.image(535, 510, 'drop').setName("hola");
        this.drop7.setDepth(-1);
        this.drop7.setScale(1.55);
        this.drop7.setInteractive();
        this.drop7.input.dropZone = true;

        this.drop8 = this.add.image(675, 510, 'drop').setName("hola");
        this.drop8.setDepth(-1);
        this.drop8.setScale(1.55);
        this.drop8.setInteractive();
        this.drop8.input.dropZone = true;

        this.drop9 = this.add.image(815, 510, 'drop').setName("hola");
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
        


        const eventos = Phaser.Input.Events;
        this.input.on(eventos.DRAG_START, (pointer, obj, dragX, dragY) => {
            obj.setScale(0.15);
        });
        
        this.input.on(eventos.DRAG, (pointer, obj, dragX, dragY) => {
            obj.x = dragX;
            obj.y = dragY;
        });
        
        this.input.on(eventos.DRAG_END, (pointer, obj, dropzone) => {
            obj.setScale(0.20);
            if ( !dropzone ) {
                obj.x = obj.input.dragStartX;
                obj.y = obj.input.dragStartY;
            }
        });

        this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
            dropzone.setTint(0xabdcd2);
            console.log(dropzone.name)
        });
        this.input.on(eventos.DRAG_LEAVE, (pointer, obj, dropzone) => {
            dropzone.clearTint();
        });

        this.input.on(eventos.DROP, (pointer, obj, dropzone) => {
            obj.x = dropzone.x;
            obj.y = dropzone.y;
        });

        this.reiniciar.on(eventos.POINTER_OVER, function() {
            this.setScale(0.22);
        });
        this.reiniciar.on(eventos.POINTER_OUT, function() {
            this.setScale(0.2);
        });

        
    }

    update(time, delta) {
        
    }
}

export default Bootloader;