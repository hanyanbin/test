var app=angular.module("myapp",['ui.router']);
app.controller("scrollCtrl",function(){
    $(".swiper-container").swiper({
        "autoplay":2000,
        "loop":true,
        "pagination":".pagination"
    })
})
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('home',{
            url:'/home',
            templateUrl:'page/home.html'
        })
        .state('second',{
            url:'/second',
            templateUrl:'page/second.html'
        })
        .state('third',{
            url:'/third',
            templateUrl:'page/third.html'
        })
        .state('fourth',{
            url:'/fourth',
            templateUrl:'page/fourth.html'
        })
     $urlRouterProvider.when('','/home')
})