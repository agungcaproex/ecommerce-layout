
var vm = new Vue({
    el: '#app',
    data: function () {
        return {
            currentView: 'comp-login',
            msg: 'Hello Vue From index.js',
            products: [],
            last_products: [{
                id: 1,
                name: 'Xiaomi MI A1',
                price: 280,
                title: `XIAOMI MI A1`,
                image: '../img/xiaomi-miA1.png',
                stock: 5
            }, {
                id: 2,
                name: 'Iphone 7S Red',
                price: 970,
                title: `IPHONE 7 S RED EDITION`,
                image: `../img/iphone-7s.jpg`,
                stock: 5
            }, {
                id: 3,
                name: 'Notebook Asus Zenbook UX305',
                price: 870,
                title: `ASUS UX305`,
                image: `../img/asus-ux305.jpg`,
                stock: 5
            }, {
                id: 4,
                name: 'Notebook Lenovo Yoga 370',
                price: 685,
                title: `LENOVO YOGA 370`,
                image: `../img/lenovo-yoga.jpeg`,
                stock: 5
            }],
            best_products: [{
                id: 101,
                name: 'Macbook Air 2017 MQD32 13',
                price: 845,
                title: `The 13-inch MacBook Air features 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.* It’s thin, light, and durable enough to take everywhere you go—and powerful enough to do everything once you get there.`,
                image: `../img/macbook-air.jpg`,
                stock: 5
            }, {
                id: 102,
                name: 'Macbook Air 2017 MQD32 13',
                price: 845,
                title: `The 13-inch MacBook Air features 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.* It’s thin, light, and durable enough to take everywhere you go—and powerful enough to do everything once you get there.`,
                image: `../img/macbook-air.jpg`,
                stock: 5
            }, {
                id: 103,
                name: 'Macbook Air 2017 MQD32 13',
                price: 845,
                title: `The 13-inch MacBook Air features 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.* It’s thin, light, and durable enough to take everywhere you go—and powerful enough to do everything once you get there.`,
                image: `../img/macbook-air.jpg`,
                stock: 5
            }, {
                id: 104,
                name: 'Macbook Air 2017 MQD32 13',
                price: 845,
                title: `The 13-inch MacBook Air features 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.* It’s thin, light, and durable enough to take everywhere you go—and powerful enough to do everything once you get there.`,
                image: `../img/macbook-air.jpg`,
                stock: 5
            }],
            carts: [],
            
            first_name: '',
            last_name: '',
            address: '',
            gender: '',

            dataUser: {
                token: localStorage.getItem('token'),
                userId: localStorage.getItem('userId'),
                name: localStorage.getItem('name'),
                email: localStorage.getItem('email'),
                role: localStorage.getItem('role')
            },
        }
    },
    methods: {
        
    }, 
    computed: {

    },

    created: function(){
        axios.get('http://ec2-52-70-89-219.compute-1.amazonaws.com:3000/items/list', {
            token: this.dataUser.token
        })
        .then(response => {
            console.log('MASUK=====', response)
            this.products = response.data.data
        })
        .catch(err => {
            console.log('ERROR======',err)
        })
    },
    
    watch: {
        carts: function(){
            return this.carts
        }
    }
})
