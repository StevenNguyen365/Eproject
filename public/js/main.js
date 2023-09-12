var app = angular.module('myApp', ['ngRoute'])

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './pages/home.html',
            controller: 'HomeController'
        })
        .when('/shop', {
            templateUrl: './pages/shop.html',
            controller: 'ShopController'
        })
        .when('/sitemap', {
            templateUrl: './pages/sitemap.html'
        })
        .when('/about', {
            templateUrl: './pages/about.html'
        })
        .when('/gallery', {
            templateUrl: './pages/gallery.html',
            controller: 'GalleryController'
        })
        .when('/fqalink', {
            templateUrl: './pages/fqalink.html'
        })
        .when('/contact', {
            templateUrl: './pages/contact.html'
        })
})

app.controller('HomeController', function ($scope, $http) {
    $scope.title = "Home"
    init()

    function init() {
        $http.get('data/product.json')
            .then(function (response) {
                $scope.productList = response.data
            })
    }
})

app.controller('ShopController', function ($scope, $http) {
    // $scope.categoryId = "8"
    $scope.prop = "name"
    $scope.order = "+"

    init()

    function init() {
        $http.get('data/product.json')
            .then(function (response) {
                $scope.productList = response.data
            })

        $http.get('data/categories.json')
            .then(function (response) {
                $scope.categoryList = response.data
            })
    }

    $scope.reset = function () {
        $scope.categoryId = ""
        $scope.productName = ""
        $scope.prop = "name"
        $scope.order = "+"
    }
    // $rootscope.filter1 = function(){
    //     $scope.categoryId= "1"
    // }
})
app.controller('HeaderController', function ($scope, $rootscope, $routeProvider, $http) {
    init()

    function init() {
        $http.get('data/product.json')
            .then(function (response) {
                $scope.productList = response.data
            })

        $http.get('data/categories.json')
            .then(function (response) {
                $scope.categoryList = response.data
            })
    }
})
app.controller('GalleryController', function ($scope, $http) {
    $scope.title = "Gallery"
    init()

    function init() {
        $http.get('data/galleries.json')
            .then(function (response) {
                $scope.galleryList = response.data
            })

        $http.get('data/product.json')
            .then(function (response) {
                $scope.productList = response.data
            })

        $http.get('data/categories.json')
            .then(function (response) {
                $scope.categoryList = response.data
            })
    }

})

app.controller('CountController', function ($scope) {
    countVisitor()
    $scope.countVisitor = localStorage.visitor
    function countVisitor() {
        if (localStorage.visitor != null) {
            localStorage.visitor = Number(localStorage.visitor) + 1;
            console.log(localStorage.visitor)
        }
        else {
            localStorage.visitor = 1;
        }
    }

})

function countVisitors() {
    if (localStorage.getItem("count") !== null) {
        var count = parseInt(localStorage.getItem("count"));
    } else {
        var count = 0;
    }
    count++;
    localStorage.setItem("count", count);
    document.getElementById("count").textContent = count;
}
countVisitors();


