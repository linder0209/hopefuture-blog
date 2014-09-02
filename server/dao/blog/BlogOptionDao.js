'use strict';

var accountDao = require('../account/AccountDao');
var config = require('../../config');

/**
 * 创建 BlogOption Dao 用来操作 BlogOptionModel，实现数据的增删改查等功能
 * @module BlogOptionDao
 * @class
 * @since 0.2.0
 * @version @@currentVersion
 * @author Linder linder0209@126.com
 * @createdDate 2014-8-22
 * */
function BlogOptionDao(Model) {
  this.model = Model;
}

/**
 * 初始化系统数据，网站第一次部署时执行该操作
 * @param callback
 */
BlogOptionDao.prototype.initData = function (callback) {
  var account = {
    loginName: 'administrator',
    password: config.administratorPassword,
    name: '管理员',
    email: 'hopefuture_blog@126.com',
    activated: true,
    manager: true
  };

  var model = this.model;
  accountDao.signup(account, function (err) {
    if (err) {
      return callback(err);
    } else {
      var entity = new model({
        optionCode: 'init_data',
        optionValue: 'yes',
        description: '初始化数据'
      });
      entity.save(function (err, product, numberAffected) {
        return callback(err);
      });
    }
  });
};

/**
 * 根据code查找数据
 * @param code
 * @param callback
 */
BlogOptionDao.prototype.findByCode = function (code, callback) {
  this.model.findOne({optionCode: code}, function (err, model) {
    if (err) {
      return callback(err);
    } else if (model) {
      return callback(new Error('该数据已存在！'));
    }
    return callback(null);
  });
};


var BlogOptionModel = require('../../models/blog/BlogOptionModel');
var blogOptionDao = new BlogOptionDao(BlogOptionModel);
module.exports = blogOptionDao;