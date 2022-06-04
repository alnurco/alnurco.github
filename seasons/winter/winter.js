// Array for all of the winter shirts 
const shirts = ['White T-shirt', 'Future T-shirts', 'Orange T-shirt', 'Orange shirt', 'Ferrari T-shirt', 'White T-shirt', 'Black sport T-shirt', 'Octopus T-shirt', 'Blue T-shirt', 'London T-shirt'];

// Arrays for pants 
const white_shirt_pants = ['White-Pants', 'Black-Jeans', 'Blue-Jeans', 'Cargo-Pants', 'Autumn-pale-pants'];

const future_shirt_pants = ['Blue-jeans', 'Black-sports-pants-(green-stripes)', 'Autumn-sport-pants', 'Autumn-green-pants', 'Autumn-pale-pants'];

const orange_t_shirt_pants = ['Black-jeans', 'Blue-jeans', 'Autumn-pale-pants']; 

const orange_shirt_pants = ['Black-jeans', 'Blue-jeans', 'Autumn-pale-pants']; 

const ferrari_shirt_pants = ['Black-jeans', 'Blue-jeans','Cargo-Pants', 'Autumn-sport-pants', 'Autumn-pale-pants'];

const black_sport_shirt_pants = ['Black-jeans', 'Blue-jeans','Cargo-Pants', 'Autumn-sport-pants','Autumn-green-pants'];

const octopus_shirt_pants = ['Black-jeans', 'Blue-jeans','Cargo-Pants','Black-sports-pants-(green-stripes)','Autumn-pale-pants','Autumn-green-pants'];

const blue_shirt_pants = ['Black-jeans', 'Blue-jeans', 'Autumn-pale-pants']; 

const london_shirt_pants = ['Black-jeans', 'Blue-jeans', 'Cargo-Pants', 'Autumn-sport-pants','Autumn-green-pants', 'Autumn-pale-pants'];


// Arrays for Jackets 

const jackets = ['Black-Winter-Jacket', 'Red-Winter-Jacket']; 

// Arrays for Hoodies 

const white_shirt_hoodie = ['Pink-hoodie', 'Green-hoodie', 'White-hoodie']; 

const future_shirt_hoodie = ['Pink-hoodie', 'Black-hoodie', 'Green-hoodie']; 

const orange_shirt_hoodie = ['Pink-hoodie', 'White-hoodie']; 

const ferrari_shirt_hoodie = ['Pink-hoodie', 'White-hoodie']; 

const black_sport_shirt_hoodie = ['Pink-hoodie', 'Black-hoodie', 'Green-hoodie']; 

const octopus_shirt_hoodie = ['Pink-hoodie', 'Black-hoodie', 'Green-hoodie']; 

const blue_shirt_hoodie = ['Pink-hoodie', 'Black-hoodie', 'Green-hoodie']; 

const london_shirt_hoodie = ['Pink-hoodie', 'Black-hoodie', 'Green-hoodie']; 

// Random Shirt Function 

function random_shirt(shirts)
{
  
return shirts[Math.floor(Math.random()*shirts.length)];
     
}

// Random Pants Function 

function wsp(white_shirt_pants) {

    return white_shirt_pants[Math.floor(Math.random()*white_shirt_pants.length)]; 

}

function fsp(future_shirt_pants) {

    return future_shirt_pants[Math.floor(Math.random()*future_shirt_pants.length)]; 

}

function osp(orange_shirt_pants) {

    return orange_shirt_pants[Math.floor(Math.random()*orange_shirt_pants.length)]; 

}

function otsp(orange_t_shirt_pants) {

    return orange_t_shirt_pants[Math.floor(Math.random()*orange_t_shirt_pants.length)]; 

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

function lsp(london_shirt_pants) {

    return london_shirt_pants[Math.floor(Math.random()*london_shirt_pants.length)];

}

// Random Jacket Functions

function random_jacket(jackets) {

    return jackets[Math.floor(Math.random()*jackets.length)];

}

// Random Hoodie Functions

function wsh(white_shirt_hoodie) {

    return white_shirt_hoodie[Math.floor(Math.random()*white_shirt_hoodie.length)];

}

function fsh(future_shirt_hoodie) {

    return future_shirt_hoodie[Math.floor(Math.random()*future_shirt_hoodie.length)];

}

function osh(orange_shirt_hoodie) {

    return orange_shirt_hoodie[Math.floor(Math.random()*orange_shirt_hoodie.length)];

}

function ferrari_sh(ferrari_shirt_hoodie) {

    return ferrari_shirt_hoodie[Math.floor(Math.random()*ferrari_shirt_hoodie.length)];

}

function bssh(black_sport_shirt_hoodie) {

    return black_sport_shirt_hoodie[Math.floor(Math.random()*black_sport_shirt_hoodie.length)];

}

function octopus_sh(octopus_shirt_hoodie) {

    return octopus_shirt_hoodie[Math.floor(Math.random()*octopus_shirt_hoodie.length)];

}

function bsh(blue_shirt_hoodie) {

    return blue_shirt_hoodie[Math.floor(Math.random()*blue_shirt_hoodie.length)];

}

function lsh(london_shirt_hoodie) {

    return london_shirt_hoodie[Math.floor(Math.random()*london_shirt_hoodie.length)];

}

// Random Outfit Generator (Final Function)

const outfits = () => {
    switch(random_shirt(shirts)) {
        case 'White T-shirt': 
            return 'White-Shirt,  ' + wsp(white_shirt_pants) + ', ' + random_jacket(jackets) + ', ' + wsh(white_shirt_hoodie)
        case 'Future T-shirts': 
            return 'Future-T-shirt,  ' + fsp(future_shirt_pants) + ', ' + random_jacket(jackets) + ', ' + fsh(future_shirt_hoodie)
        case 'Orange T-shirt': 
            return 'Orange-T-shirt,  ' + osp(orange_t_shirt_pants) + ', ' + random_jacket(jackets) + ', ' + osh(orange_shirt_hoodie)
        case 'Orange shirt': 
            return 'Orange-shirt,  ' + osp(orange_shirt_pants) + ', ' + random_jacket(jackets) + ', ' + osh(orange_shirt_hoodie)
        case 'Ferrari T-shirt': 
            return 'Ferrari-T-shirt,  ' + ferrari_sp(ferrari_shirt_pants) + ', ' + random_jacket(jackets) + ', ' + ferrari_sh(ferrari_shirt_hoodie)
        case 'Black sport T-shirt':
            return 'Black-sport-T-shirt,  ' + bssp(black_sport_shirt_pants) + ', ' + random_jacket(jackets) + ', ' + bssh(black_sport_shirt_hoodie)
        case 'Octopus T-shirt': 
            return 'Octopus-T-shirt,  ' + octopus_sp(octopus_shirt_pants) + ', ' + random_jacket(jackets) + ', ' + octopus_sh(octopus_shirt_hoodie)
        case 'Blue T-shirt': 
            return 'Blue-T-shirt,  ' + bsp(blue_shirt_pants) + ', ' + random_jacket(jackets) + ', ' + bsh(blue_shirt_hoodie)
        case 'London T-shirt':
                return 'London-T-shirt,  ' + lsp(london_shirt_pants) + ', ' + random_jacket(jackets) + ', ' + lsh(london_shirt_hoodie)
    }
}

document.getElementById('arr1').innerHTML = outfits(); 