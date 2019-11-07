(function(){
  'use strict';

  angular.module('ShoppingListCheckOff',[]);
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject=['ShoppingListCheckOffService'];
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

  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    Var boughtItems = this;
    boughtItems.items = ShoppingListCheckOffService.getItems();
  }

  function ShoppingListCheckOffService(){
    var service = this;
    var items
    service.addItem(item){
      items.push(item);
    }

    servic.getItems(){
      return items;
    }
  }

})();
