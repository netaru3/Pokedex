function buscador(){
let buscador=document.getElementById("buscador").value
fetch(`https://pokeapi.co/api/v2/pokemon/${buscador}`).then(function(response){
 if(!response.ok){alert("el nombre no es correcto")}   return response.json()})
.then(function(data){console.log(data); let img=data.sprites.front_default;
    console.log(img);let imagen=document.createElement("img"); imagen.src=img;
     let imagenes= document.getElementById("pokemon"); imagen.width=200;
      imagenes.textContent=data.name;
      let hp= document.getElementById("hp");
      hp.textContent=data.stats[0].stat.name+":"+data.stats[0].base_stat;
      let attack= document.getElementById("attack");
      attack.textContent=data.stats[1].stat.name+":"+data.stats[1].base_stat;
       let defense= document.getElementById("defense");
      defense.textContent=data.stats[2].stat.name+":"+data.stats[2].base_stat;
       let specialattack= document.getElementById("special-attack");
      specialattack.textContent=data.stats[3].stat.name+":"+data.stats[3].base_stat;
          let specialdefense= document.getElementById("special-defense");
      specialdefense.textContent=data.stats[4].stat.name+":"+data.stats[4].base_stat;
          let speed= document.getElementById("speed");
      speed.textContent=data.stats[5].stat.name+":"+data.stats[5].base_stat;
       let habilidad1= document.getElementById("habilidad1");
      habilidad1.textContent=data.abilities[0].ability.name;
       let habilidad2= document.getElementById("habilidad2");
      habilidad2.textContent=data.abilities[1].ability.name;


   imagenes.appendChild(imagen)
})}


