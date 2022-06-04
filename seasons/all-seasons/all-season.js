// An Array of all of the shirts 

const shirts = ['White T-shirt', 'Future T-shirts', 'Orange T-shirt', 'Hawain T-shirt', 'Ferrari T-shirt', 'Black sport T-shirt', 'Octopus T-shirt', 'Blue T-shirt', 'Shark T-shirt', 'Toxic green sport T-shirt', 'London T-shirt', 'Red T-shirt']; 

// Arrays of pants that match the shirts 

const white_shirt_pants = ['Pale-Pants', 'White-Pants', 'Autumn-pale-pants', 'Black-Jeans', 'Blue-Jeans', 'Cargo-Pants'];

const future_shirt_pants = ['White-Pants', 'Black-jeans', 'Blue-jeans', 'Black-sports-pants-(green-stripes)', 'Autumn-green-pants', 'Atumn-sport-pants', 'Autumn-pale-pants'];

const orange_shirt_pants = ['Pale-pants', 'White-pants', 'Black-jeans', 'Blue-jeans', 'Autumn-pale-pants'];

const hawain_shirt_pants = ['Pale-pants', 'White-pants', 'Autumn-pale-pants'];

const ferrari_shirt_pants = ['Pale-Pants', 'White-Pants', 'Autumn-pale-pants', 'Black-Jeans', 'Blue-Jeans', 'Cargo-Pants',  'Atumn-sport-pants'];

const black_sport_shirt_pants = ['White-pants', 'Black-jeans', 'Blue-jeans', 'Cargo-pants', 'Black-sports-pants-(green-stripes)', 'Black-sports-pants-(white-stripe)', 'Atumn-sport-pants', 'Autumn-green-pants'];

const octopus_shirt_pants = ['White-pants', 'Black-jeans', 'Blue-jeans', 'Cargo-pants', 'Black-sports-pants-(green-stripes)', 'Autumn-green-pants', 'Autumn-pale-pants']; 

const blue_shirt_pants = ['White-pants', 'Black-jeans', 'Blue-jeans', 'Autumn-pale-pants']; 

const shark_shirt_pants = ['Pale-pants', 'White-pants', 'Black-jeans', 'Blue-jeans', 'Autumn-green-pants', 'Autumn-pale-pants'];

const toxic_green_shirt_pants = ['Atumn-sport-pants'];

const london_shirt_pants = ['White-pants', 'Autumn-pale-pants', 'Black-jeans', 'Blue-jeans', 'Cargo-pants', 'Atumn-sport-pants', 'Autumn-green-pants'];

const red_shirt_pants = ['Pale-pants', 'White-pants', 'Black-jeans', 'Blue-jeans'];

// Arrays for jackets that match the shirts 

const white_shirt_jacket = ['Black-all-season-jacket', 'Nasa-jacket']; 

const future_shirt_jacket = ['Nasa-jacket'];

const orange_shirt_jacket = ['Nasa-jacket'];

const hawain_shirt_jacket = ['Black-all-season-jacket', 'Nasa-jacket']; 

const ferrari_shirt_jacket = ['Nasa-jacket'];

const black_sport_shirt_jacket = ['Nasa-jacket'];

const octopus_shirt_jacket = ['Nasa-jacket'];

const blue_shirt_jacket = ['Nasa-jacket'];

const shark_shirt_jacket = ['Black-all-season-jacket', 'Nasa-jacket']; 

const toxic_green_shirt_jacket = ['Nasa-jacket'];

const london_shirt_jacket = ['Black-all-season-jacket', 'Nasa-jacket']; 

const red_shirt_jacket = ['Black-all-season-jacket', 'Nasa-jacket']; 

// Arrays for Hoodies that match the shirts 

const white_shirt_hoodie = ['Pink-hoodie', 'Green-hoodie', 'White-hoodie'];

const future_shirt_hoodie = ['Pink-hoodie', 'Black-hoodie', 'Green-hoodie']; 

const orange_shirt_hoodie = ['Pink-hoodie', 'White-hoodie']; 

const ferrari_shirt_hoodie = ['Pink-hoodie', 'White-hoodie']; 

const black_sport_shirt_hoodie = ['Pink-hoodie', 'Black-hoodie', 'Green-hoodie']; 

const octopus_shirt_hoodie = ['Pink-hoodie', 'Black-hoodie', 'Green-hoodie']; 

const blue_shirt_hoodie = ['Pink-hoodie', 'Black-hoodie', 'Green-hoodie']; 

const shark_shirt_hoodie = ['Pink-hoodie', 'Black-hoodie', 'Green-hoodie']; 

const london_shirt_hoodie = ['Pink-hoodie', 'Black-hoodie', 'Green-hoodie']; 

// Random shirt function 

function random_shirt(shirts)
{
  
return shirts[Math.floor(Math.random()*shirts.length)];
     
}

// Random Pants Functions

function wsp(white_shirt_pants)
{
  
return white_shirt_pants[Math.floor(Math.random()*white_shirt_pants.length)];
     
}

function fsp(future_shirt_pants)
{
  
return future_shirt_pants[Math.floor(Math.random()*future_shirt_pants.length)];
     
}

function osp(orange_shirt_pants)
{
  
return orange_shirt_pants[Math.floor(Math.random()*orange_shirt_pants.length)];
     
}

function hsp(hawain_shirt_pants)
{
  
return hawain_shirt_pants[Math.floor(Math.random()*hawain_shirt_pants.length)];
     
}

function ferrari_sp(ferrari_shirt_pants)
{
  
return ferrari_shirt_pants[Math.floor(Math.random()*ferrari_shirt_pants.length)];
     
}

function bssp(black_sport_shirt_pants)
{
  
return black_sport_shirt_pants[Math.floor(Math.random()*black_sport_shirt_pants.length)];
     
}

function octopus_sp(octopus_shirt_pants)
{
  
return octopus_shirt_pants[Math.floor(Math.random()*octopus_shirt_pants.length)];
     
}

function bsp(blue_shirt_pants)
{
  
return blue_shirt_pants[Math.floor(Math.random()*blue_shirt_pants.length)];
     
}

function ssp(shark_shirt_pants)
{
  
return shark_shirt_pants[Math.floor(Math.random()*shark_shirt_pants.length)];
     
}

function tgsp(toxic_green_shirt_pants)
{
  
return toxic_green_shirt_pants[Math.floor(Math.random()*toxic_green_shirt_pants.length)];
     
}

function lsp(london_shirt_pants)
{
  
return london_shirt_pants[Math.floor(Math.random()*london_shirt_pants.length)];
     
}

function rsp(red_shirt_pants)
{
  
return red_shirt_pants[Math.floor(Math.random()*red_shirt_pants.length)];
     
}

// Random jackets functions 

function wsj(white_shirt_jacket)
{
  
return white_shirt_jacket[Math.floor(Math.random()*white_shirt_jacket.length)];
     
}

function fsj(future_shirt_jacket)
{
  
return future_shirt_jacket[Math.floor(Math.random()*future_shirt_jacket.length)];
     
}

function osj(orange_shirt_jacket)
{
  
return orange_shirt_jacket[Math.floor(Math.random()*orange_shirt_jacket.length)];
     
}

function hsj(hawain_shirt_jacket)
{
  
return hawain_shirt_jacket[Math.floor(Math.random()*hawain_shirt_jacket.length)];
     
}

function ferrari_sj(ferrari_shirt_jacket)
{
  
return ferrari_shirt_jacket[Math.floor(Math.random()*ferrari_shirt_jacket.length)];
     
}

function bssj(black_sport_shirt_jacket)
{
  
return black_sport_shirt_jacket[Math.floor(Math.random()*black_sport_shirt_jacket.length)];
     
}

function octopus_sj(octopus_shirt_jacket)
{
  
return octopus_shirt_jacket[Math.floor(Math.random()*octopus_shirt_jacket.length)];
     
}

function bsj(blue_shirt_jacket)
{
  
return blue_shirt_jacket[Math.floor(Math.random()*blue_shirt_jacket.length)];
     
}

function ssj(shark_shirt_jacket)
{
  
return shark_shirt_jacket[Math.floor(Math.random()*shark_shirt_jacket.length)];
     
}

function tgsj(toxic_green_shirt_jacket)
{
  
return toxic_green_shirt_jacket[Math.floor(Math.random()*toxic_green_shirt_jacket.length)];
     
}

function lsj(london_shirt_jacket)
{
  
return london_shirt_jacket[Math.floor(Math.random()*london_shirt_jacket.length)];
     
}

function rsj(red_shirt_jacket)
{
  
return red_shirt_jacket[Math.floor(Math.random()*red_shirt_jacket.length)];
     
}

// Random hoodie functions 

function wsh(white_shirt_hoodie)
{
  
return white_shirt_hoodie[Math.floor(Math.random()*white_shirt_hoodie.length)];
     
}

function fsh(future_shirt_hoodie)
{
  
return future_shirt_hoodie[Math.floor(Math.random()*future_shirt_hoodie.length)];
     
}

function osh(orange_shirt_hoodie)
{
  
return orange_shirt_hoodie[Math.floor(Math.random()*orange_shirt_hoodie.length)];
     
}

function ferrari_sh(ferrari_shirt_hoodie)
{
  
return ferrari_shirt_hoodie[Math.floor(Math.random()*ferrari_shirt_hoodie.length)];
     
}

function bssh(black_sport_shirt_hoodie)
{
  
return black_sport_shirt_hoodie[Math.floor(Math.random()*black_sport_shirt_hoodie.length)];
     
}

function octopus_sh(octopus_shirt_hoodie)
{
  
return octopus_shirt_hoodie[Math.floor(Math.random()*octopus_shirt_hoodie.length)];
     
}

function bsh(blue_shirt_hoodie)
{
  
return blue_shirt_hoodie[Math.floor(Math.random()*blue_shirt_hoodie.length)];
     
}

function ssh(shark_shirt_hoodie)
{
  
return shark_shirt_hoodie[Math.floor(Math.random()*shark_shirt_hoodie.length)];
     
}

function lsh(london_shirt_hoodie)
{
  
return london_shirt_hoodie[Math.floor(Math.random()*london_shirt_hoodie.length)];
     
}

// Final outfit function 

const outfits = () => {
    switch (random_shirt(shirts)) {
        case 'White T-shirt': 
            return 'White-Shirt,  ' + wsp(white_shirt_pants) + ', ' + wsj(white_shirt_jacket) + ', ' + wsh(white_shirt_hoodie)
        case 'Future T-shirts': 
            return 'Future-T-shirt,  ' + fsp(future_shirt_pants) + ', ' + fsj(future_shirt_jacket) + ', ' + fsh(future_shirt_hoodie)
        case 'Orange T-shirt': 
            return 'Orange-T-shirt,  ' + osp(orange_shirt_pants) + ', ' + osj(orange_shirt_jacket) + ', ' + osh(orange_shirt_hoodie)
        case 'Hawain T-shirt': 
            return 'Hawain-T-shirt,  ' + hsp(hawain_shirt_pants) + ', ' + hsj(hawain_shirt_jacket)
        case 'Ferrari T-shirt': 
            return 'Ferrari-T-shirt,  ' + ferrari_sp(ferrari_shirt_pants) + ', ' + ferrari_sj(ferrari_shirt_jacket) + ', ' + ferrari_sh(ferrari_shirt_hoodie)
        case 'Black sport T-shirt':
            return 'Black-sport-T-shirt,  ' + bssp(black_sport_shirt_pants) + ', ' + bssj(black_sport_shirt_jacket) + ', ' + bssh(black_sport_shirt_hoodie)
        case 'Octopus T-shirt': 
            return 'Octopus-T-shirt,  ' + octopus_sp(octopus_shirt_pants) + ', ' + octopus_sj(octopus_shirt_jacket) + ', ' + octopus_sh(octopus_shirt_hoodie)
        case 'Blue T-shirt': 
            return 'Blue-T-shirt,  ' + bsp(blue_shirt_pants) + ', ' + bsj(blue_shirt_jacket) + ', ' + bsh(blue_shirt_hoodie)
        case 'Shark T-shirt':
            return 'Shark-T-shirt,  ' + ssp(shark_shirt_pants) + ', ' + ssj(shark_shirt_jacket) + ', ' + ssh(shark_shirt_hoodie)
        case 'Toxic green sport T-shirt':
            return 'Toxic-green-sport-T-shirt,  ' + tgsp(toxic_green_shirt_pants) + ', ' + tgsj(toxic_green_shirt_jacket)
        case 'London T-shirt':
            return 'London-T-shirt,  ' + lsp(london_shirt_pants) + ', ' + lsj(london_shirt_jacket) + ', ' + lsh(london_shirt_hoodie)
        case 'Red T-shirt':
            return 'Red-T-shirt,  ' + rsp(red_shirt_pants) + ', ' + rsj(red_shirt_jacket)
    } 
} 

document.getElementById('arr1').innerHTML = outfits(); 