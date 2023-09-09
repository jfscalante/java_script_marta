function receta(){
    libras= prompt("lazaña para 5 personas ¿cuantas necesitas?");
var libras, carne, cebolla, ajo, queso, espinacas, sal, aceite, mantequilla ;

carne= libras*2000;
cebolla = libras*500;    
ajo =libras*20;
queso= libras*2000;
espinacas= libras*500;
sal= libras*100;
aceite= libras*100;
mantequilla= libras*200;
document.write("se necesita para una lazaña lo siguiente: <br>" + carne +" gramos de carne  "+ cebolla+" gramos de cebolla "
+ajo +" gramos de ajo <br> " + queso + " gramos de queso " +espinacas+ " gramos de espinacas " + sal+ " gramos de sal " +aceite+ " mililitros de aceite " +mantequilla+ " gramos de mantequilla ");

}

function costos(){

    libras = Number(prompt("cuantas lazañas para 5 personas"));
var libras, carne, cebolla, ajo, queso, espinacas, sal, aceite, mantequilla ;
carne= libras*24000;
cebolla = libras*2000;    
ajo =libras*1000;
queso= libras*20000;
espinacas= libras*2000;
sal= libras*1000;
aceite= libras*3200;
mantequilla= libras*4000;

total= carne+cebolla+ajo+queso+espinacas+sal+aceite+mantequilla;
document.write("los costos para las libras de lazaña: "+ total);
}