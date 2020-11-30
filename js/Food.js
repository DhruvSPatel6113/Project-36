class Food{

    constructor(){}

    getFoodStock(){

       var foodStock = database.ref("Food");
        foodStock.on("value" , updateFoodStock());

    }

    updateFoodStock(data){

        var food = data.val();
        database.ref('/').update({

            Food:food

        })

    }

    deductFoodStock(){

        if(keyWentDown(UP_ARROW)){

            foodStock+=1;
            this.updateFoodStock(foodStock);

        }

    }

}