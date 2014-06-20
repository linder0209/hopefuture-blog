'use strict';

/**
 * 创建Angular App
 * @link hopefutureBlogApp
 * @since 0.2.0
 * @version @@currentVersion
 * @author Linder linder0209@126.com
 * @createdDate 2014-6-13
 * */
angular.module('hopefutureBlogApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
          .when('/publish', {//发表文章
            templateUrl: '../views/blog/publish.html',
            controller: 'PublishCtrl'
          })
          .when('/article', {//文章管理
            templateUrl: '../views/blog/article.html',
            controller: 'ArticleCtrl'
          })
          .when('/category', {//类别管理
            templateUrl: '../views/blog/category.html',
            controller: 'CategoryCtrl'
          })
          .when('/comment', {//评论管理
            templateUrl: '../views/blog/comment.html',
            controller: 'CommentCtrl'
          })
          .when('/setting', {//评论管理
            templateUrl: '../views/blog/setting.html',
            controller: 'SettingCtrl'
          })
          .otherwise({
            redirectTo: '/article'
          });
    }]);