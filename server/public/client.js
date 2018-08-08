let foodApp = angular.module('foodApp', []); 

foodApp.controller('FoodController', function(){
    let vm = this; 
    vm.addFood = function(){
       console.log(vm.foodIn);  
    }
})

