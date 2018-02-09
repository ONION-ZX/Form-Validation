$(function() {
  'use strict';

  window.Input = function(selector) {
    var $ele
        ,me = this
        ,rule =
        {
        required:true
        };
    this.load_validator = function() {
      var val = this.get_val();
      this.validator = new Validator(val,rule)
    }
    this.get_val = function() {
      return $ele.val();
    }

    function init(){
      find_ele();
      parserule();
      me.load_validator();
      listen();
    }

    function listen() {
      $ele.on('keyup',function() {
        var r = me.validator.is_valid(me.get_val());
        console.log('valid:',r);
      })
    }

    function find_ele() {
      if(selector instanceof jQuery) {
        $ele = selector;
      } else {
        $ele = $(selector);
      }
    }

    function parserule() {
      var rule_str = $ele.data('rule');
      if(!rule_str) return;
      var i;
      var rule_arr = rule_str.split('|');
      /*['min:18','max:100'...]*/
      for(i=0; i<rule_arr.length; i++) {
        var item_str = rule_arr[i];
        var item_arr = item_str.split(':');
      /*['min','18','max','100'...]*/
        rule[item_arr[0]] = JSON.parse(item_arr[1]);
      }
    }
    init();
  }
})
