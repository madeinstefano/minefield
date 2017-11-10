define([
  '../vendor/Lollipop.min',
  '../vendor/spin.min']
, function(Lollipop, Spinner){

  var loadDialog = '<div class="load-dialog-content"></div>'
  return {
    start: function (){
      var ld = $(loadDialog)[0];
      var spinner = new Spinner({
        lines: 11,
        length: 20,
        width: 10,
        radius:20,
        color:'#fff'
      }).spin(ld);
      Lollipop.open({
        content:ld,
        showCancelButton: false
      });
    },
    stop: function (){
      Lollipop.close(true);
    }
  }
});