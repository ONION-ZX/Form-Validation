$(function() {
  'use strict';

  /*选中页面中所有的input[data-rule]*/

  /*解析每一个input的验证规则*/

  /*验证*/
  var test = new Input('#test');
  var valid = test.validator.is_valid();
  console.log('valid:',valid);
});
