export class logica{
    datosKines:Array<string[]> =
    [
        ["Imix\'","Dragon"],
        ["Ik'","Viento"],
        ["Ak\'bal\'","Noche"],
        ["K\'an","La Semilla"],
        ["Chikchan","La Serpiente"],
        ["Kimi","El enlazador de mundos"],
        ["Manik'","La mano"],
        ["Lamat","La estrella"],
        ["Muluk","La luna"],
        ["Ok","El perro"],
        ["Chuwen","El mono"],
        ["Eb\'","El humano"],
        ["B'en ","El caminante del cielo"],
        ["Ix","El mago"],
        ["Men","El aguila"],
        ["Kib\'","El guerrero"],
        ["Kab\'an","La tierra"],
        ["Etz\'anab\'","El espejo"],
        ["Kawak","La tormenta"],
        ["Ajaw","El sol"]
    ];

    datosEnergias:Array<string[]> = [
        ["Jun","El Todo, La Unidad, El Absoluto, La Pureza"],
        ["Keb\'","La Pareja, La Polaridad, El Complemento, El Apoyo"],
        ["Oxib\'","Los Resultados, Los Hijos, El Temor, Los Frutos"],
        ["Kajib\'","La Solidez, La Fortaleza, La Felicidad, La Estabilidad"],
        ["Job\'","El Amor, El Trabajo, El Esfuerzo, Analizar"],
        ["Waqib\'","El Mundo Material, La Materia, La Amistad, La Reacción"],
        ["Wuqub\'","El Equilibrio, El Movimiento, El Integrar, El Realizar"],
        ["Wajxaqib\'","La Espiritualidad, El Arte, La Alegría, La Energía Masculina"],
        ["B\'elejeb\'","La Realización, El Poder, Acción, La Energía Femenina"],
        ["Lajuj","La Ley, La Autoridad, La Rectitud, La Impecabilidad"],
        ["Julajuj","Compartir, Separar, Las Posibilidades, Dejarse-abandonarse"],
        ["Kab\'lajuj","La Familia, La Comunidad, Los Grupos, La Seguridad"],
        ["Oxlajuj’","La Magia, EL Poder del Camino, La Teurgia, El Trasmutar"]
    ];

    datosUinales:Array<string[]> = [
        ["Wayeb'","Dias desafortunados, reflexion, gracia y penitencia"],
        ["Pop","Mat (símbolo de comunidad y matrimonio), petate"],
        ["Woo","Rana, sapo, negro"],
        ["Zip","Rojo, conjuncion"],
        ["Sotz'","Bat (murcielago)"],
        ["Tzek","Fin, palma, calavera"],
        ["Xul","Perro, instrumento musical"],
        ["Yaxk'in","Primer Sol (o verde), inicio agricola, nuevo dia"],
        ["Mol","Inicio de lluvia, agua, jade"],
        ["Ch'en","Lluvia, negro, acido"],
        ["Yax","Verde, humedad"],
        ["Sak","Blanco, lluvia"],
        ["Keh","Rojo, venado"],
        ["Mak","Red, cautiverio, pecado"],
        ["K'ank'in","Sol amarillo"],
        ["Muwan","Halcon, buho"],
        ["Pax","Tiempo de siembra, tambor, musica"],
        ["K'ayab'","Tortuga, guacamaya"],
        ["K'umk'u'","Maiz maduro, granero, oscuridad"]
    ];

    datosNahuales:Array<string[]> = [
        ["Tzikin","Pajaro"],
        ["Ajmaq","Búho, falta o culpa"],
        ["No'j","Idea o sabiduria"],
        ["Tijax","Pedernal o obsidiana"],
        ["Kawoq","Trueno o dificultad"],
        ["Ajpu","Cerbatanero o señor principal"],
        ["Imox","Locura o pez"],
        ["Iq'","Viento o luna"],
        ["Aq'ab'al","Amanecer, aurora y mano"],
        ["K'at","Red, cautiverio o iguana"],
        ["Kan","Serpiente emplumada"],
        ["Kame","Muerte o dueño de la oscuridad"],
        ["Kej","Venado"],
        ["Q'anil","Semilla, simiente o conejo"],
        ["Toj","Ofrenda, pago o lluvia"],
        ["Tz'i'","Perro o mapache"],
        ["B'atz'","Mono o hilo"],
        ["E'","Camino o diente"],
        ["Aj","Caña o cañaveral"],
        ["I'x","Jaguar"]
    ];
    
    datos:Array<string[]>|undefined;

    numeroClic:number = 0;
    tipoAnterior:string = "";
    listaRelacion:Array<string> = new Array;
    respuestas:Array<string[]> =  new Array;
    color:any = 'rgb(19, 19, 19)';

    audio = new Audio("./fallo.mp3");

    listaDatosSalida:Array<string[]> | undefined;

    mover(nombreComponente:string){
        this.controlador(nombreComponente);
        setTimeout(() => {
            this.verificador();
        }, 300);
    }
    
    controlador(nombreComponente:string){
        let boton = document.getElementById(nombreComponente);
        let tipoNuevo = nombreComponente[0];
        let limite = window.innerWidth/2;
        if(boton!=undefined && tipoNuevo != this.tipoAnterior){
            this.numeroClic++;
            this.tipoAnterior = tipoNuevo;
            this.registro(nombreComponente);
            limite = limite - (boton.getBoundingClientRect().width/2);
            for (let i = 0; i <=limite; i++) {  
                setTimeout(() => {
                    if(tipoNuevo == "p")
                    boton!.style.marginLeft = i+"px";
                    else
                    boton!.style.marginRight = i+"px";
                }, 50);
            }
        }
    }

    registro(nombreComponente:string){
        this.listaRelacion.push(nombreComponente);
    }
    verificador(){
        setTimeout(() => {
            this.color = 'rgb(19,19,19)';
          }, 9000);
          this.color = 'rgb(28, 191, 46)';
        if(this.numeroClic == 2){
            let p,r;
            p = this.listaRelacion.pop();
            r = this.listaRelacion.pop();
            if(p![1] == r![1]){
                if(p!=undefined && r!=undefined){
                    let p1 = document.getElementById(p);
                    let r1 = document.getElementById(r);
                    if(p[0]=="p" && p1!=undefined && r1!=undefined){
                        this.respuestas.push([p1.textContent+"",r1.textContent+""]);
                    }else if(r[0]=="p" && r1!=undefined && p1!=undefined){
                        this.respuestas.push([r1.textContent+"",p1.textContent+""]);
                    }
                }
                document.getElementById(p!)!.style.display = "none";
                document.getElementById(r!)!.style.display = "none";
            }else if(p!=undefined && r!=undefined){
                //this.boton.style.marginRight = "0px";
                //this.boton.style.marginLeft = "0px";
                //this.boton.style.removeProperty("marginLeft");
                alert("Respuesta incorrecta");
                this.audio.play();
                let boton = document.getElementById(p);
                if(p[0]=="p")boton!.style.marginLeft = "0px";
                else boton!.style.marginRight = "0px";
                boton = document.getElementById(r);
                if(r[0]=="r")boton!.style.marginRight = "0px";
                else boton!.style.marginLeft = "0px";
            }
            this.tipoAnterior = "";
            this.numeroClic = 0;
        }
        
    }

    cambiarDatos(level:number){
        let contador:number = 1;
        let listaDatosIntermedio1:Array<string[]> = new Array;
        let listaDatosIntermedio2:Array<string[]> = new Array;
        this.listaDatosSalida = new Array;
        if(this.datos!=undefined){
            for (let i = 0; i < this.datos.length/level; i++) {
                const element = this.datos[i];
                listaDatosIntermedio1.push(["izquierdo",element[0],"p"+contador]);
                listaDatosIntermedio2.push(["derecho",element[1],"r"+contador]);
                contador++;
            }
        }
        while(listaDatosIntermedio1.length != 0){
            let aleatorio = Math.floor(Math.random() * (listaDatosIntermedio1.length));
            aleatorio = Math.floor(Math.random() * (listaDatosIntermedio2.length));
            this.listaDatosSalida.push(listaDatosIntermedio1[aleatorio]);
            listaDatosIntermedio1.splice(aleatorio,1);

            aleatorio = Math.floor(Math.random() * (listaDatosIntermedio2.length));
            aleatorio = Math.floor(Math.random() * (listaDatosIntermedio2.length));
            aleatorio = Math.floor(Math.random() * (listaDatosIntermedio2.length));
            this.listaDatosSalida.push(listaDatosIntermedio2[aleatorio]);
            listaDatosIntermedio2.splice(aleatorio,1);
        }
    }

    getDatos(level:number):Array<string[]>{
        this.cambiarDatos(level);
        if(this.listaDatosSalida)
        return this.listaDatosSalida;
        return new Array;
    }

    getMensaje():Array<string[]>{
        return this.respuestas;
    }

    getColor():any{
        return this.color;
    }

    setTipoDatos(tipo:string){
        this.numeroClic= 0;
        this.tipoAnterior = "";
        this.listaRelacion.length = 0;
        this.respuestas.length = 0;
        switch(tipo){
            case "kines":
                this.datos = this.datosKines;
            break;
            case "energias":
                this.datos = this.datosEnergias;
            break;
            case "uinales":
                this.datos = this.datosUinales;
            break;
            case "nahuales":
                this.datos = this.datosNahuales;
            break;
        }
    }

    constructor(){
    }
}