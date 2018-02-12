$(function() {
  'use strict';

  /*选中页面中所有的input[data-rule]*/
  var $inputs = $('[data-rule]')
    , $form = $('#signup')
    , inputs = [];
  /*解析每一个input的验证规则*/
  $inputs.each(function(index,node) {
    var tmp = new Input(node);
    inputs.push(tmp);
  })
  $form.on('submit',function(e) {
    e.preventDefault();//禁止浏览器默认行为
    $inputs.trigger('blur');
    for(var i=0; i<inputs.length; i++) {
      var item = inputs[i];
      var r = item.validator.is_valid();
      if(!r) {
        alert('invalid');
        return;
      }
    }

    alert('注册成功!');
  })
  /*验证*/


});
