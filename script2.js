const figlet = require("figlet");

figlet("forbidden strings...!", function (err, data) {
    if (err) {
        console.log("some thing went wrong...!");
        console.dir(err);

        return;

    }
    console.log(data);

})