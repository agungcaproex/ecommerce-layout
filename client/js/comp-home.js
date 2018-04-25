Vue.component('comp-home', {
    props: ['products','datauser', 'bestproducts', 'carts'],
    template: `
    <div>
    <h4>  {{carts}} </h4>
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">E-Commerce</h1>
            </div>
        </section>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="./img/galaxy-s9.png" alt="Galaxy S9" height="370">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="./img/p20-huawei.jpg" alt="Huawei P20" height="370">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="./img/macbook_air_contest.jpeg" alt="Macbook Air" height="370">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-3">
                    <div class="card">
                        <div class="card-header bg-info text-white text-uppercase">
                            <i class="fa fa-heart"></i> Top Product
                        </div>
                        <img class="img-fluid border-0" src="./img/samsung-galaxy-s9.png" alt="SS2-V4HB">
                        <div class="card-body">
                            <h5 class="card-title text-center"><a href="product.html" title="View Product">Samsung Galaxy S9</a></h5>
                            <div class="row">
                                <div class="col">
                                    <p class="btn btn-danger btn-block"> $ 980.00 </p>
                                </div>
                                <div class="col">
                                    <a href="product.html" class="btn btn-success btn-block">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-3">
        <div class="row">
            <div class="col-sm">
                <div class="card">
                    <div class="card-header bg-primary text-white text-uppercase">
                        <i class="fa fa-star"></i> List Product
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm"  v-for="list_product in products.slice(0,4)">
                            <div class="card">
                                <img class="card-img-top" v-bind:src="list_product.picture" :alt=list_product.name>
                                <div class="card-body">
                                    <h4 class="card-title"><a href="product-macbook.html" title="View Product">Product Title</a></h4>
                                    <p class="card-text">{{list_product.title}}</p>
                                    <div class="row">
                                        <div class="col">
                                            <p class="btn btn-danger btn-block">$ {{list_product.price}}.00</p>
                                        </div>
                                        <div class="col">
                                            <button type="button" class="btn btn-success btn-block" v-on:click="addToCart(list_product)">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-3 mb-4">
        <div class="row">
            <div class="col-sm">
                <div class="card">
                    <div class="card-header bg-primary text-white text-uppercase">
                        <i class="fa fa-trophy"></i> Best Products
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm"  v-for="list_product in products" v-if="list_product.category == 'Best'">
                            <div class="card">
                                <img class="card-img-top" v-bind:src="list_product.picture" :alt="list_product.name">
                                <div class="card-body">
                                    <h4 class="card-title"><a href="product-macbook.html" title="View Product">Product Title</a></h4>
                                    <p class="card-text">{{list_product.title}}</p>
                                    <div class="row">
                                        <div class="col">
                                            <p class="btn btn-danger btn-block">$ {{list_product.price}}.00</p>
                                        </div>
                                        <div class="col">
                                            <button type="button" class="btn btn-success btn-block" v-on:click="addToCart(list_product)">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Cart Modal -->
    <div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Product List In Cart</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body container">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th class="text-right">Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="cart,index in carts">
                            <td> {{index +1}} </td>
                            <td> {{cart.name}} </td>
                            <td><input v-model="cart.quantity" type="number"></td>
                            <td class="text-right"> $ {{cart.total}} </td>
                            <td>  </td>
                            
                            <td class="text-right"><button v-on:click="deleteItem(index, cart)" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td class="text-right"><strong> Sub Total</strong></td>
                            <td class="text-right"> $ {{subTotal()}} </td>
                            <td>  </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td class="text-right"><strong> Shipping</strong></td>
                            <td class="text-right"> $ {{shipping()}} </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td class="text-right"><strong> Total </strong></td>
                            <td class="text-right"> $ {{totalPrice(shipping(), subTotal())}} </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Checkout</button>
        </div>
        </div>
    </div>
    </div>

    </div>
    `,

    methods: {
        addToCart: function(item){
            this.products.forEach(product => {
                if(product._id == item._id && product.stock > 0){
                    product.stock --
                    
                    let itemCart = this.carts.filter(cart => {
                        return cart._id == item._id
                    })

                    if(itemCart.length == 0){
                        item.quantity = 1
                        item.total = item.price
                        this.carts.push(item)
                    } else {
                        itemCart[0].quantity += 1
                        itemCart[0].total += item.price
                    }
                } else if(product._id == item._id && product.stock == 0){
                    alert('Stock this Product is empty')
                }
                
            })
        },
        addToCart2: function(item){
            this.best_products.forEach(product => {
                if(product.id == item.id && product.stock > 0){
                    product.stock --
                    
                    let itemCart = this.carts.filter(cart => {
                        return cart.id == item.id
                    })

                    if(itemCart.length == 0){
                        item.quantity = 1
                        item.total = item.price
                        this.carts.push(item)
                    } else {
                        itemCart[0].quantity += 1
                        itemCart[0].total += item.price
                        
                    }
                } else if(product.id == item.id && product.stock == 0){
                    alert('Stock this Product is empty')
                }
                
            })
        },
        subTotal: function(){
            let subTotal = 0

            this.carts.forEach(cart => {
                subTotal += cart.total
            })
                return subTotal
        },
        shipping: function(){
            let quantity = 0, shipping = 0

            for(let i=0; i<this.carts.length; i++){
                quantity += this.carts[i].quantity
            }
            if(quantity == 0){
                return shipping
            }
            else if(quantity > 0 && quantity <= 5){
                shipping += 10
                return shipping
            } else if(quantity > 5 && quantity <= 10){
                shipping += 20
                return shipping
            } else if(quantity > 10 && this.carts.length <= 15){
                shipping += 30
                return shipping
            } else {
                shipping += 50
                return shipping
            }
        },

        totalPrice: function(shipping, subTotal){
            return shipping + subTotal
        },

        deleteItem: function(index, item){
            this.products.forEach(product => {
                if(product._id == item._id){
                    this.products[index].stock =+ item.quantity
                    this.carts.splice(index, 1)
                }
            });
             
            console.log('item=======', item._id)
            console.log('indexx=======', index)
        },
    }
})