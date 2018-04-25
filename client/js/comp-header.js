Vue.component('comp-header',{
    props: ['cartitems','datauser'],
    template:`
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="home.html">E-Commerce</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
                <ul class="navbar-nav m-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home<span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="category.html">Categories</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="product.html">Product</a>
                    </li>
                </ul>
    
                <form class="form-inline my-2 my-lg-0">
                    <div class="input-group input-group-sm">
                        <input type="text" class="form-control" placeholder="Search...">
                        <div class="input-group-append">
                            <button type="button" class="btn btn-secondary btn-number">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <a class="btn btn-success btn-sm ml-3" type="button" data-toggle="modal" data-target="#cartModal">
                        <i class="fa fa-shopping-cart"></i> Cart
                        <span class="badge badge-light">{{cartitems.length}}</span>
                    </a>
                </form>
            </div>
        </div>
    </nav>`,

    data: {
        carts: [],
    }
})