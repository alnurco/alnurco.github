const shirts = ['White T-shirt', 'Future T-shirts', 'Orange T-shirt', 'Hawain T-shirt', 'Ferrari T-shirt', 'White T-shirt', 'Black sport T-shirt', 'Octopus T-shirt', 'Blue T-shirt', 'Shark T-shirt', 'Toxic green sport T-shirt', 'London T-shirt', 'Red T-shirt'];

const white_shirt_pants = ['Pale-Pants', 'White-Pants', 'Grey-Shorts', 'Black-Jeans', 'Blue-Jeans', 'Cargo-Pants'];

const future_shirt_pants = ['White-pants', 'Grey-shorts', 'Black-jeans', 'Blue-jeans', 'Black-sports-pants-(green stripes)']; 

const orange_shirt_pants = ['Pale-Pants', 'White-pants', 'Grey-shorts', 'Black-jeans', 'Blue-jeans'];

const hawain_shirt_pants = ['Pale-Pants', 'White-Pants']; 

const ferrari_shirt_pants = ['Pale-pants', 'White-pants', 'Grey-shorts', 'Black-jeans', 'Blue-jeans', 'Cargo-pants'];

const black_sport_shirt_pants = ['White-Pants', 'Grey-Shorts', 'Black-Jeans', 'Blue-Jeans', 'Cargo-Pants', 'Black-sports-pants-(green stripes)', 'Black-sports-pants-(white stripe)'];

const octopus_shirt_pants = ['White-pants', 'Grey-shorts', 'Black-jeans', 'Blue-jeans', 'Cargo-pants', 'Black-sports-pants-(green stripes)']; 

const blue_shirt_pants = ['White-pants', 'Grey-shorts', 'Black-jeans', 'Blue-jeans']; 

const shark_shirt_pants = ['Pale-pants', 'White-pants', 'Black-jeans', 'Blue-jeans']; 

const toxic_green_shirt_pants = ['Black-sports-pants-(green stripes)', 'Black-sports-pants-(white stripe)']; 

const london_shirt_pants = ['White-pants', 'Grey-shorts', 'Black-jeans', 'Blue-jeans', 'Cargo-pants']; 

const red_shirt_pants = ['Pale-pants', 'White-pants', 'Grey-shorts', 'Black-jeans', 'Blue-jeans']; 


function random_shirt(shirts)
{
  
return shirts[Math.floor(Math.random()*shirts.length)];
     
}

function wsp(white_shirt_pants) {

    return white_shirt_pants[Math.floor(Math.random()*white_shirt_pants.length)]; 

}

function fsp(future_shirt_pants) {

    return future_shirt_pants[Math.floor(Math.random()*future_shirt_pants.length)]; 

}

function osp(orange_shirt_pants) {

    return orange_shirt_pants[Math.floor(Math.random()*orange_shirt_pants.length)]; 

}

function hsp(hawain_shirt_pants) {

    return hawain_shirt_pants[Math.floor(Math.random()*hawain_shirt_pants.length)]; 

}

function ferrari_sp(ferrari_shirt_pants) {

    return ferrari_shirt_pants[Math.floor(Math.random()*ferrari_shirt_pants.length)]; 

}

function bssp(black_sport_shirt_pants) {

    return black_sport_shirt_pants[Math.floor(Math.random()*black_sport_shirt_pants.length)]; 

}

function octopus_sp(octopus_shirt_pants) {

    return octopus_shirt_pants[Math.floor(Math.random()*octopus_shirt_pants.length)]; 

}

function bsp(blue_shirt_pants) {

    return blue_shirt_pants[Math.floor(Math.random()*blue_shirt_pants.length)];

}

function ssp(shark_shirt_pants) {

    return shark_shirt_pants[Math.floor(Math.random()*shark_shirt_pants.length)];

}

function tgsp(toxic_green_shirt_pants) {

    return toxic_green_shirt_pants[Math.floor(Math.random()*toxic_green_shirt_pants.length)];

}

function lsp(london_shirt_pants) {

    return london_shirt_pants[Math.floor(Math.random()*london_shirt_pants.length)];

}

function rsp(red_shirt_pants) {

    return red_shirt_pants[Math.floor(Math.random()*red_shirt_pants.length)];

}

// Jacket arrays and functions 

const white_shirt_jacket = ['Grey-Jacket', 'Red-Summer-Jacket', 'Black-all-season-jacket', 'Pale-Jacket'];

const future_shirt_jacket = ['Grey-Jacket', 'Red-Summer-Jacket', 'Black-all-season-jacket'];

const orange_shirt_jacket = ['Grey-Jacket', 'Red-Summer-Jacket', 'Black-all-season-jacket', 'Pale-Jacket'];

const hawain_shirt_jacket = ['Grey-Jacket', 'Red-Summer-Jacket', 'Black-all-season-jacket', 'Pale-Jacket'];

const ferrari_shirt_jacket =  ['Grey-Jacket', 'Red-Summer-Jacket', 'Black-all-season-jacket'];

const black_sport_shirt_jacket =  ['Grey-Jacket', 'Red-Summer-Jacket', 'Black-all-season-jacket'];

const octopus_shirt_jacket =  ['Grey-Jacket', 'Red-Summer-Jacket', 'Black-all-season-jacket'];

const blue_shirt_jacket =  ['Grey-Jacket', 'Red-Summer-Jacket', 'Black-all-season-jacket'];

const shark_shirt_jacket =  ['Grey-Jacket', 'Red-Summer-Jacket', 'Black-all-season-jacket'];

const toxic_green_shirt_jacket =  ['Grey-Jacket', 'Red-Summer-Jacket', 'Black-all-season-jacket'];

const london_shirt_jacket =  ['Grey-Jacket', 'Red-Summer-Jacket', 'Black-all-season-jacket'];

const red_shirt_jacket =  ['Grey-Jacket', 'Red-Summer-Jacket', 'Black-all-season-jacket'];

function wsj(white_shirt_jacket) {

    return white_shirt_jacket[Math.floor(Math.random()*white_shirt_jacket.length)];

}

function fsj(future_shirt_jacket) {

    return future_shirt_jacket[Math.floor(Math.random()*future_shirt_jacket.length)];

}

function osj(orange_shirt_jacket) {

    return orange_shirt_jacket[Math.floor(Math.random()*orange_shirt_jacket.length)];

}

function hsj(hawain_shirt_jacket) {

    return hawain_shirt_jacket[Math.floor(Math.random()*hawain_shirt_jacket.length)];

}

function ferrari_sj(ferrari_shirt_jacket) {

    return ferrari_shirt_jacket[Math.floor(Math.random()*ferrari_shirt_jacket.length)];

}

function bssj(black_sport_shirt_jacket) {

    return black_sport_shirt_jacket[Math.floor(Math.random()*black_sport_shirt_jacket.length)];

}

function octopus_sj(octopus_shirt_jacket) {

    return octopus_shirt_jacket[Math.floor(Math.random()*octopus_shirt_jacket.length)];

}

function bsj(blue_shirt_jacket) {

    return blue_shirt_jacket[Math.floor(Math.random()*blue_shirt_jacket.length)];

}

function ssj(shark_shirt_jacket) {

    return shark_shirt_jacket[Math.floor(Math.random()*shark_shirt_jacket.length)];

}

function tgsj(toxic_green_shirt_jacket) {

    return toxic_green_shirt_jacket[Math.floor(Math.random()*toxic_green_shirt_jacket.length)];

}

function lsj(london_shirt_jacket) {

    return london_shirt_jacket[Math.floor(Math.random()*london_shirt_jacket.length)];

}

function rsj(red_shirt_jacket) {

    return red_shirt_jacket[Math.floor(Math.random()*red_shirt_jacket.length)];

}

// Final function to create the outfits 

const outfits = () => {
    switch (random_shirt(shirts)) {
        case 'White T-shirt': 
            return 'White-Shirt, ' + wsp(white_shirt_pants) // + wsj(white_shirt_jacket)
        case 'Future T-shirts': 
            return 'Future-T-shirt, ' + fsp(future_shirt_pants) // + fsj(future_shirt_jacket)
        case 'Orange T-shirt': 
            return 'Orange-T-shirt, ' + osp(orange_shirt_pants)// + osj(orange_shirt_jacket)
        case 'Hawain T-shirt': 
            return 'Hawain-T-shirt, ' + hsp(hawain_shirt_pants) //+ hsj(hawain_shirt_jacket)
        case 'Ferrari T-shirt': 
            return 'Ferrari-T-shirt, ' + ferrari_sp(ferrari_shirt_pants) //+ ferrari_sj(ferrari_shirt_jacket)
        case 'Black sport T-shirt':
            return 'Black-sport-T-shirt, ' + bssp(black_sport_shirt_pants) //+ bssj(black_sport_shirt_jacket)
        case 'Octopus T-shirt': 
            return 'Octopus-T-shirt, ' + octopus_sp(octopus_shirt_pants) //+ octopus_sj(octopus_shirt_jacket)
        case 'Blue T-shirt': 
            return 'Blue-T-shirt, ' + bsp(blue_shirt_pants) //+ bsj(blue_shirt_jacket)
        case 'Shark T-shirt':
            return 'Shark-T-shirt, ' + ssp(shark_shirt_pants) //+ ssj(shark_shirt_jacket)
        case 'Toxic green sport T-shirt':
            return 'Toxic-green-sport-T-shirt, ' + tgsp(toxic_green_shirt_pants) //+ tgsj(toxic_green_shirt_jacket)
        case 'London T-shirt':
            return 'London-T-shirt, ' + lsp(london_shirt_pants) //+ lsj(london_shirt_jacket)
        case 'Red T-shirt':
            return 'Red-T-shirt, ' + rsp(red_shirt_pants) //+ rsj(red_shirt_jacket)
    } 
} 

const outfits_jacket = () => {
    switch (random_shirt(shirts)) {
        case 'White T-shirt':
            return wsj(white_shirt_jacket)
        case 'Future T-shirt': 
            return fsj(future_shirt_jacket)
        case 'Orange T-shirt': 
            return osj(orange_shirt_jacket)
        case 'Hawain T-shirt': 
            return hsj(hawain_shirt_jacket)
        case 'Ferrari T-shirt': 
            return ferrari_sj(ferrari_shirt_jacket)
        case 'Black sport T-shirt': 
            return bssj(black_sport_shirt_jacket)
        case 'Octopus T-shirt':
            return octopus_sj(octopus_shirt_jacket)
        case 'Blue T-shirt':
            return bsj(blue_shirt_jacket)
        case 'Shark T-shirt':
            return ssj(shark_shirt_jacket)
        case 'Toxic green sport T-shirt':
            return tgsj(toxic_green_shirt_jacket)
        case 'London T-shirt': 
            return lsj(london_shirt_jacket)
        case 'Red T-shirt': 
            return rsj(red_shirt_jacket)
    }
}

document.getElementById('arr1').innerHTML = outfits();
document.getElementById('arr2').innerHTML = outfits_jacket();