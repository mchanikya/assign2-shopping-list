(function(){
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject=['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService){
    var itemsToBuy = this;
    itemsToBuy.itemsList=[
      { name: "cookies", quantity: 10 },
      { name: "Chips", quantity: 10 },
      { name: "Nachos", quantity: 10 },
      { name: "Coke", quantity: 10 },
      { name: "Popcorn", quantity: 10 }
    ];

    itemsToBuy.addItemToList= function(index){
      ShoppingListCheckOffService.addItem(itemsToBuy.itemsList[index]);
      itemsToBuy.itemsList.splice(index,1);
    };
  }

  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtItems = this;
    boughtItems.checkedOutItems = ShoppingListCheckOffService.getItems();
  }

  function ShoppingListCheckOffService(){
    var service = this;
    var items = [];
    service.addItem = function(item) {
    	// var item = {
     //    name: itemName,
     //    quantity: quantity
     //  };

      items.push(item);
    }

    service.getItems=function(){
      return items;
    }
  }

})();
