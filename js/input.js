$(function() {
  'use strict';

  window.Input = function(selector) {
    var $ele
       ,me = this
       ,rule =
       {
         required: true
       };

   this.load_validator = function () {
     var val = this.get_val();
     this.validator = new Validator(val,rule);
   }
   this.get_val = function () {
     return $ele.val();
   }

  function init(){
    find_ele();
    parse_rule();
    me.load_validator();
    listen();
  }

  function listen() {
    $ele.on('blur',function() {
      var r = me.validator.is_valid(me.get_val());
      console.log('valid:',r);
    })
  }
  function parse_rule() {
    var rule_str = $ele.data('rule');
    if(!rule_str) return;

    var rule_arr = rule_str.split('|');

    var i;
    for(i = 0;i < rule_arr.length; i ++) {
      var item_str = rule_arr[i];
      var item_arr = item_str.split(':');
      rule[item_arr[0]] = JSON.parse(item_arr[1]);
    }
  }

  function find_ele() {
    if(seletor instanceof jQuery) {
      $ele = seletor;
    } else {
      $ele = $(selector);
    }
  }
  init();
  }
})
