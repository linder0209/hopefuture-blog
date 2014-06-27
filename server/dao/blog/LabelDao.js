'use strict';

/**
 * 创建 Label Dao 用来操作 LabelModel，实现数据的增删改查等功能
 * @module LabelDao
 * @class
 * @since 0.2.0
 * @version @@currentVersion
 * @author Linder linder0209@126.com
 * @createdDate 2014-6-27
 * */
function LabelDao(Model) {
  this.model = Model;
}

var LabelModel = require('../../models/blog/LabelModel');
var labelDao = new LabelDao(LabelModel);

module.exports = labelDao;

var underscore = require('underscore');

/**
 * 返回数据列表
 * @method
 * @param callback {function} 回调函数
 */
LabelDao.prototype.list = function (callback) {
  this.model.find({}, function (err, docs) {
    return callback(err, docs);
  });
};

/**
 * 分页显示
 * @method
 * @param dataPage {DataPage} 分页数据
 * @param callback {function} 回调函数
 */
LabelDao.prototype.pagination = function (dataPage, callback) {
  var skip = dataPage.itemsPerPage * (dataPage.currentPage - 1);
  var limit = dataPage.itemsPerPage;
  var model = this.model;
  model.count({}, function (err, count) {
    if (err === null) {
      dataPage.setTotalItems(count);
      model.find({}, null, {skip: skip, limit: limit}, function (err, docs) {
        dataPage.setItems(docs);
        return callback(err, dataPage);
      });
    }
  });
};

/**
 * 根据id查询数据
 * @method
 * @param id {String} 主键
 * @param callback {function} 回调函数
 */
LabelDao.prototype.findById = function (id, callback) {
  this.model.findOne({_id: id}, function (err, model) {
    return callback(err, model);
  });
};

/**
 * 删除记录
 * @method
 * @param conditions { Object }
 * 要删除数据的条件，例如：{ field: { $n: [<value1>, <value2>, ... <valueN> ] } }
 * @param callback {function} 回调函数
 */
LabelDao.prototype.delete = function (conditions, callback) {
  this.model.remove(conditions, function (err) {
    return callback(err);
  });
};

/**
 * 根据name值，修改label，如果不存在则添加新的记录
 * @method
 * @param labels { Array } name 组成的数组
 * @param callback {function} 回调函数
 */
LabelDao.prototype.update = function (labels, callback) {
  if(underscore.isEmpty(labels)){
    return callback('labels is empty.');
  }
  var conditions = {name: {$in: labels}};
  this.model.update(conditions, {count: {$inc: {count: 1}}}, {upsert: true }, function (err, numberAffected, rawResponse) {
    callback(err);
  });
};
