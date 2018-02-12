$(function() {
  'use strict';

  /*选中页面中所有的input[data-rule]*/
  var $inputs = $('[data-rule]');
  var inputs = [];
  /*解析每一个input的验证规则*/
  $inputs.each(function(index,node) {
    var tmp = new Input(node);
    inputs.push(tmp);
  })

  /*验证*/
});
