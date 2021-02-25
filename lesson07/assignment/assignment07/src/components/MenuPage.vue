<template>
  <div class="menu">

    <body>
      <main id="main-content" class="row justify-content-center mb-5">
        <div class="accordion col-12 col-xl-10 mb-5" id="menuAccordion">
          <h2 class="text-uppercase text-center mb-5 mt-4">Menu</h2>
          <section class="card">
            <div class="card-header" id="headingOne">
              <h3 class="text-center mb-0">
                <button class="btn btn-link" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Coffee
                </button>
              </h3>
            </div>
            <div id="collapseOne" class="collapse show container" aria-labelledby="headingOne" data-parent="#menuAccordion">
              <div class="card-body row">
                <!----V-FOR---->
                <div class="col-12 col-sm-6 col-md-4 col-lg-4 mb-4" v-for="drink in coffeeDrinks" v-bind:key="drink.id" :item="drink.item" :priceSmall="drink.priceSmall" :priceLarge="drink.priceLarge">
                  <h5>{{drink.item}}</h5>
                  <ul class="list-inline d-flex flex-column">
                    <li class="list-inline-item">Small {{drink.priceSmall}}</li>
                    <li class="list-inline-item">Large {{drink.priceLarge}}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section class="card">
            <div class="card-header" id="headingTwo">
              <h3 class="text-center mb-0">
                <button class="btn btn-link" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Food
                </button>
              </h3>
            </div>
            <div id="collapseTwo" class="collapse container" aria-labelledby="headingTwo" data-parent="#menuAccordion">
              <div class="card-body row">
                <!----V-FOR---->
                <div class="col-12 col-sm-6 col-md-4 col-lg-4 mb-4" v-for="food in foodItems" v-bind:key="food.id" :item="food.item" :price="food.price">
                  <h5>{{food.item}}</h5>
                  <ul class="list-inline d-flex flex-column">
                    <li class="list-inline-item">{{food.price}}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section class="card">
            <div class="card-header" id="headingThree">
              <h3 class="text-center mb-0">
                <button class="btn btn-link" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Other
                </button>
              </h3>
            </div>
            <div id="collapseThree" class="collapse container" aria-labelledby="headingThree" data-parent="#menuAccordion">
              <div class="card-body row">
                <!----V-FOR---->
                <div class="col-12 col-sm-6 col-md-4 col-lg-4 mb-4" v-for="drink in otherDrinks" v-bind:key="drink.id" :item="drink.item" :priceSmall="drink.priceSmall" :priceLarge="drink.priceLarge">
                  <h5>{{drink.item}}</h5>
                  <ul class="list-inline d-flex flex-column">
                    <li class="list-inline-item">Small {{drink.priceSmall}}</li>
                    <li class="list-inline-item">Large {{drink.priceLarge}}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </body>
  </div>
</template>


<script>
export default {
  name: 'Menu',
  data () {
    return {
      coffeeDrinks: [
        {id: 0, item: 'Drip Coffee', priceSmall: '2.50', priceLarge: '2.90'},
        {id: 1, item: 'Americano', priceSmall: '2.50', priceLarge: '2.90'},
        {id: 2, item: 'Latte', priceSmall: '2.50', priceLarge: '2.90'},
        {id: 3, item: 'Iced Latte', priceSmall: '4.75', priceLarge: '5.25'},
        {id: 4, item: 'Caramel Macchiato', priceSmall: '4.25', priceLarge: '4.75'},
        {id: 5, item: 'Mocha', priceSmall: '4.50', priceLarge: '5.00'}
      ],
      foodItems: [
        {id: 0, item: 'Crossaint', price: '3.35'},
        {id: 1, item: 'Pain Au Chocolat', price: '3.85'},
        {id: 2, item: 'Apple Turnover', price: '4.35'},
        {id: 3, item: 'Raspberry Donut', price: '3.40'},
        {id: 4, item: 'Chocolate Chip Cookie', price: '2.75'},
        {id: 5, item: 'Ginger Chew Cookie', price: '3.65'}
      ],
      otherDrinks: [
        {id: 0, item: 'Chai Tea Latte', priceSmall: '4.40', priceLarge: '4.70'},
        {id: 1, item: 'London Fog', priceSmall: '3.25', priceLarge: '3.75'},
        {id: 2, item: 'Green Tea Matcha Latte', priceSmall: '4.40', priceLarge: '4.95'},
        {id: 3, item: 'Soft Drinks', priceSmall: '2.75', priceLarge: '3.25'},
        {id: 4, item: 'Perrier', priceSmall: '3.10', priceLarge: '3.75'},
        {id: 5, item: 'Orangina', priceSmall: '3.50', priceLarge: '4.00'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>