'use strict';

angular.module('hopefutureBlogApp')
  .constant('errorCodes', {
    //会话过期
    '9001': '你没有登录，或会话过期，请登录。',
    '9002': '非法操作',
    '9003': '该用户不存在',
    '9004': '您提交评论的速度太快了，请休息一会再发表评论吧。',
    '9005': '检测到重复评论，您似乎已经提交过这条评论了！',

    '8001': '该标签已存在。',
    '8002': '该资源分类已存在。'
  });
