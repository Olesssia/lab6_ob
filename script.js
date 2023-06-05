// zadanie1
class Prostokąt{
    constructor(wysokość, szerokość, nazwa){
        this.wysokość = wysokość;
        this.szerokość = szerokość;
        this.nazwa = nazwa;

    }

obliczObwod(){
    return 2 * (this.wysokość + this.szerokość)
   

}
obliczPole(){
    return this.wysokość * this.szerokość;
    
}

porównaj(p1){
    if(this.obliczPole() > p1.obliczPole()){
        return this;
    } else {
        return p1;
    }
}
}
let prostokąt1 = new Prostokąt(6,2,"Pierwszy");
console.log(prostokąt1.obliczObwod());
console.log(prostokąt1.obliczPole());

let prostokąt2 = new Prostokąt(1,4,"Drugi");
console.log(prostokąt2.obliczObwod());
console.log(prostokąt2.obliczPole());

let wiekszy = prostokąt1.porównaj(prostokąt2);
console.log(wiekszy.nazwa)
// zadanie2
class Trójkąt{
    constructor(wysokość, długośćPodstawy, nazwa){
    this.wysokość = wysokość;
    this.długośćPodstawy = długośćPodstawy;
    this.nazwa = nazwa;
}
obliczPole(){
    return this.wysokość * this.długośćPodstawy;
}
porównaj(t1){
    if(this.obliczPole() > t1.obliczPole()){
        return this;
    } else {
        return t1;
    }
}
}
let trójkąt1 = new Trójkąt (5, 6, "Pierwszy");
console.log(trójkąt1.obliczPole());
let trójkąt2 = new Trójkąt (3, 8, "Drugi");
console.log(trójkąt2.obliczPole());
let wiekszyj = trójkąt1.porównaj(trójkąt2);
console.log(wiekszyj.nazwa)
// zadanie3
class Trapez{
    constructor(wysokość, podstawa1, podstawa2, nazwa){
        this.wysokość = wysokość;
        this.podstawa1 = podstawa1;
        this.podstawa2 = podstawa2;
        this.nazwa = nazwa;
    }
obliczPole(){
    return this.wysokość * this.podstawa1*this.podstawa2;
}
}
let trapez = new Trapez(5, 3, 4, 'Pierwszy_trapez');
console.log(trapez.obliczPole());
// zadanie4
function obliczaniepola() {
    let szyrokośćProstokąta = Number(prompt("Podaj szerokość prostokąta:"));
    let wysokośćProstokąta = Number(prompt("Podaj wysokość prostokąta:"));
    let długośćPodstawyTrójkąta = Number(prompt("Podaj długość podstawy trójkąta:"));
    let wysokośćTrójkąta = Number(prompt("Podaj wysokość trójkąta:"));
    let pierwszaPodstawaTrapezu = Number(prompt("Podaj długość pierwszej podstawy trapezu:"));
    let drugaPodstawaTrapezu = Number(prompt("Podaj długość drugiej podstawy trapezu:"));
    let wysokośćTrapezu = Number(prompt("Podaj wysokość trapezu:"));
  
    let poleProstokąta = szyrokośćProstokąta * wysokośćProstokąta;
    let poleTrójkąta = 0.5 * długośćPodstawyTrójkąta * wysokośćTrójkąta;
    let poleTrapezu = 0.5 * (pierwszaPodstawaTrapezu + drugaPodstawaTrapezu) * wysokośćTrapezu;
  
    let największaFigura;
    let największePole;
  
    if (poleProstokąta > poleTrójkąta && poleProstokąta > poleTrapezu) {
      największaFigura = "prostokąt";
      największePole = poleProstokąta;
    } else if (poleTrójkąta > poleProstokąta && poleTrójkąta > poleTrapezu) {
      największaFigura = "trójkąt";
      największePole = poleTrójkąta;
    } else {
      największaFigura = "trapez";
      największePole = poleTrapezu;
    }

    console.log(`Pole prostokąta: ${poleProstokąta}`);
    console.log(`Pole trójkąta: ${poleTrójkąta}`);
    console.log(`Pole trapezu: ${poleTrapezu}`);
    console.log(`Największa figura to: ${największaFigura}, pole: ${największePole}`);
}  
obliczaniepola()
// zadanie5
function porównaniePola(prost1, prost2) {
    let obwód1 = 2 * (prost1.width + prost1.height);
    let obwód2 = 2 * (prost2.width + prost2.height);
  
    if (obwód1 > obwód2) {
      return prost1;
    } else if (obwód2 > obwód1) {
      return prost2;
    } else {
      return null; 
    }
  }
  let prost1 = { width: 3, height: 4 };
  let prost2 = { width: 5, height: 6 };
  
  let najwiekszyObwód = porównaniePola(prost1, prost2);
  console.log(najwiekszyObwód);
// zadanie6
function zmieńNazwęProstokąta(prostokąt, nowaNazwa) {
    prostokąt.imię = nowaNazwa;
  }
  let prostokąt = { imię: "Prostokąt", szerokość: 4, wysokość: 8 };
  zmieńNazwęProstokąta(prostokąt, "Prostokat1");
  
  console.log(prostokąt.imię); 
  
