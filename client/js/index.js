
var vm = new Vue({
    el: '#app',
    data: {
        msg: 'Hello Vue From index.js',
        last_products: [{
            id: 1,
            name: 'Pistol G2 Combat',
            price: 685,
            title: `G2 COMBAT PINDAD developed especially for units and shooters.`,
            image: 'https://www.pindad.com/uploads/images/product/full/G2-COMBAT.jpg',
            stock: 5
        }, {
            id: 2,
            name: 'Pistol G2 Combat',
            price: 685,
            title: `G2 COMBAT PINDAD developed especially for units and shooters.`,
            image: `https://www.pindad.com/uploads/images/product/full/G2-COMBAT.jpg`,
            stock: 5
        }, {
            id: 3,
            name: 'Pistol G2 Combat',
            price: 685,
            title: `G2 COMBAT PINDAD developed especially for units and shooters.`,
            image: `https://www.pindad.com/uploads/images/product/full/G2-COMBAT.jpg`,
            stock: 5
        }, {
            id: 4,
            name: 'Pistol G2 Combat',
            price: 685,
            title: `G2 COMBAT PINDAD developed especially for units and shooters.`,
            image: `https://www.pindad.com/uploads/images/product/full/G2-COMBAT.jpg`,
            stock: 5
        }],
        best_products: [{
            id: 101,
            name: 'Macbook Air 2017 MQD32 13',
            price: 845,
            title: `The 13-inch MacBook Air features 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.* It’s thin, light, and durable enough to take everywhere you go—and powerful enough to do everything once you get there.`,
            image: `https://img20.jd.id/imgw/s800x800_/nHBfsgAAAQAAABYAF2fNKQAF9zE.jpg`,
            stock: 5
        }, {
            id: 102,
            name: 'Macbook Air 2017 MQD32 13',
            price: 845,
            title: `The 13-inch MacBook Air features 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.* It’s thin, light, and durable enough to take everywhere you go—and powerful enough to do everything once you get there.`,
            image: `https://img20.jd.id/imgw/s800x800_/nHBfsgAAAQAAABYAF2fNKQAF9zE.jpg`,
            stock: 5
        }, {
            id: 103,
            name: 'Macbook Air 2017 MQD32 13',
            price: 845,
            title: `The 13-inch MacBook Air features 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.* It’s thin, light, and durable enough to take everywhere you go—and powerful enough to do everything once you get there.`,
            image: `https://img20.jd.id/imgw/s800x800_/nHBfsgAAAQAAABYAF2fNKQAF9zE.jpg`,
            stock: 5
        }, {
            id: 104,
            name: 'Macbook Air 2017 MQD32 13',
            price: 845,
            title: `The 13-inch MacBook Air features 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.* It’s thin, light, and durable enough to take everywhere you go—and powerful enough to do everything once you get there.`,
            image: `https://img20.jd.id/imgw/s800x800_/nHBfsgAAAQAAABYAF2fNKQAF9zE.jpg`,
            stock: 5
        }],
        carts: [],
        email: '',
        password: '',
        
    },
    methods: {
        addToCart1: function(item){
            this.last_products.forEach(product => {
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
            this.last_products[item.id-1].stock += item.quantity

            this.carts.splice(index, 1)
        },
        loginUser: function(){
            axios.post('http://localhost:4000/users/login', {
                email: this.getEmail,
                password: this.password
            })
            .then((response) => {
                if(response.status == 200){
                    
                    localStorage.setItem('userId', response.data.data.id)
                    localStorage.setItem('token', response.data.data.token)
                    localStorage.setItem('email', response.data.data.email)
                    localStorage.setItem('role', response.data.data.role) 
                    localStorage.setItem('name', response.data.data.name)                                                               
                    location.reload()
                    alert('Login Success')
                    window.location.href='home.html'
                } else {
                    alert('Login Failed, please check your username or password')
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
        

    }, 
    computed: {
        getEmail: function(){
            return this.email
        },
        getPassword: function(){
            return this.password
        }
    }
})
