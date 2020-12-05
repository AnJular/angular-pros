angular.module('todoApp', [])
    .controller('TestController', function ($http){
        var vm = this;

        vm.other = false;
        vm.car = false;
        vm.mac = false;
        vm.bike = false;
       
        vm.fun = function(){
            $http.get('https://jsonplaceholder.typicode.com/posts').then(res=>console.log(res.data, 'get res'));
            // $http.get('https://jsonplaceholder.typicode.com/todos/1')
            //     .then(response => console.log(response, 'res'))
        }
       
        vm.clk = function(){
            $http({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                data: JSON.stringify({
                title: 'paaa',
                body: 'katso jos se toimi???',
                userId: 1,
            }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            
            }).then(res => console.log(res.data, 'POST res'))
            // event.preventDefault();
            console.log('Works??')
        }


    })

















































    
 // ((vm.chk = false) || (vm.one = true) ||
        // (vm.two  = true) || (vm.three = true)) ? vm.checked = false : vm.checked = true;
