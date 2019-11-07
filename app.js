// (function(){
//   'use strict';

//   angular.module('ShoppingListCheckOff',[])
//   .controller('ToBuyController',ToBuyController)
//   .controller('AlreadyBoughtController',AlreadyBoughtController)
//   .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

//   ToBuyController.$inject=['ShoppingListCheckOffService'];
//   AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

//   function ToBuyController(ShoppingListCheckOffService){
//     var itemsToBuy = this;
//     itemsToBuy.itemsList=[
//       { name: "cookies", quantity: 10 },
//       { name: "Chips", quantity: 10 },
//       { name: "Nachos", quantity: 10 },
//       { name: "Coke", quantity: 10 },
//       { name: "Popcorn", quantity: 10 }
//     ];

//     itemsToBuy.addItemToList= function(index){
//       ShoppingListCheckOffService.addItem(itemsToBuy.itemsList[index]);
//       itemsToBuy.itemsList.splice(index,1);
//     };
//   }

//   function AlreadyBoughtController(ShoppingListCheckOffService){
//     var boughtItems = this;
//     boughtItems.checkedOutItems = ShoppingListCheckOffService.getItems();
//   }

//   function ShoppingListCheckOffService(){
//     var service = this;
//     var items = [];
//     service.addItem = function(item) {
//       items.push(item);
//     }

//     service.getItems=function(){
//       return items;
//     }
//   }

// })();

!function(){"use strict";function t(e){var i=this;i.itemsList=[{name:"cookies",quantity:10},{name:"Chips",quantity:10},{name:"Nachos",quantity:10},{name:"Coke",quantity:10},{name:"Popcorn",quantity:10}],i.addItemToList=function(t){e.addItem(i.itemsList[t]),i.itemsList.splice(t,1)}}function e(t){this.checkedOutItems=t.getItems()}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",e).service("ShoppingListCheckOffService",function(){var e=[];this.addItem=function(t){e.push(t)},this.getItems=function(){return e}}),t.$inject=["ShoppingListCheckOffService"],e.$inject=["ShoppingListCheckOffService"]}();