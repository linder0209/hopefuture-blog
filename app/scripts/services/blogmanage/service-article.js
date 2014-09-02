'use strict';

angular.module('hopefutureBlogApp')
  .factory('articleService', ['hfbHttpService', function (hfbHttpService) {
    return {
      paging: function (data, success) {
        hfbHttpService.get('manage/article', data).then(success);
      },
      'delete': function (data, success) {
        hfbHttpService.delete('manage/article', data).then(success);
      },
      changeBoutique: function (data, success) {
        hfbHttpService.post('manage/article/boutique', data).then(success);
      },
      changeHomeTop: function (data, success) {
        hfbHttpService.post('manage/article/homeTop', data).then(success);
      }
    };
  }])
  .constant('articleStatus', {//文章状态
    publish: '已发布',
    draft: '草稿',
    modified: '已发布'
  });
