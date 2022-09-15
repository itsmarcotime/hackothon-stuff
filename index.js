var fs = require('fs');

fs.readFile('rollercoasters_medium_input.txt', function (err, data) {
    if (err) throw err;
    var array = data.toString().split("\n");
    for (i in array) {
       // console.log(array[i]);
    }


    function arrayLoop() {
        let fun = 0;
        
        // for (let i = 0; i < array.length; i++) {

        //     while (array[i] > array[i + 1]) {

        //         fun = fun + 10;

        //     }  {
        //         console.log(fun);
        //         continue;
        //     }
        // }

        

        for (var i = 0; i < array.length; i++) {
            
            
            //do {fun = fun + 10} while (array[i] > array[i + 1]);

            if (array[i + 1] > array[i]) {
                continue;
            } else if (array[i] > array[i+1]) {
                fun = fun + 10;
            };

            

        };
        

        console.log(fun);
        
    };
    
    //console.log(Math.max(array));

    arrayLoop();

});

