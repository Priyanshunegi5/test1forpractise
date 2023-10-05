const figlet = require("figlet")

figlet("teek hai samajgiyeee ...!", function (err, data) {
    if (err) {

        console.log("something went wrgrtr4r44rgrgong...!")
        // console.dir(err)
        // console.log(err)
        return;
    }

    console.log(data);



})