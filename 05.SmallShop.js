function calc(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    let totalPrice = 0;

    switch (product) {
        case "coffee" :
            switch (city) {
                case "Sofia" : totalPrice = 0.5;
                break;
                case "Plovdiv" : totalPrice = 0.4;
                break;
                case "Varna" : totalPrice = 0.45;
                break;
            }
        break;
        case "water" :
            switch (city) {
                case "Sofia" : totalPrice = 0.8;
                break;
                case "Plovdiv" : totalPrice = 0.7;
                break;
                case "Varna" : totalPrice = 0.7;
                break;
            }
        break;
        case "beer" :
            switch (city) {
                case "Sofia" : totalPrice = 1.2;
                break;
                case "Plovdiv" : totalPrice = 1.15;
                break;
                case "Varna" : totalPrice = 1.10;
                break;
            }
        break;
        case "sweets" :
            switch (city) {
                case "Sofia" : totalPrice = 1.45;
                break;
                case "Plovdiv" : totalPrice = 1.3;
                break;
                case "Varna" : totalPrice = 1.35;
                break;
            }
        break;
        case "peanuts" :
            switch (city) {
                case "Sofia" : totalPrice = 1.6;
                break;
                case "Plovdiv" : totalPrice = 1.5;
                break;
                case "Varna" : totalPrice = 1.55;
                break;
            }
        break;
    }

    let result = totalPrice * quantity;
    console.log(result);
}

calc(["beer", "Sofia", "2"]);