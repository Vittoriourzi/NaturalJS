/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




function setupCheckBox(){
   var html="";
   var active="";
   var percentageWidth=0;
   var newWidth=0;
   $("checkbox").each(function(index, obj) {
       $(this).before('<label><input type="checkbox" class="ios-switch '+$(this).attr('color')+' '+$(this).attr('dim')+'" '+$(this).attr('value')+' /><div><div></div></div></label>');
       $(this).remove();
   });
}
setupCheckBox();