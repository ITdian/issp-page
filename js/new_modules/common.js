$(document).ready(function(){
    $('.nav').on("click","a",function(){
        $('.nav li').removeClass('active');
        $('.nav h3').removeClass('big');
        $(this).parent().addClass('active');
        $(this).parents(".nav-list").children("h3").addClass("big");
    });
    $('.list').on("click","li",function(){
        $(this).addClass("current").siblings().removeClass("current")
    });
    $('.list-text').on("click",".more",function(){
        $(this).parents("section").children('.can').stop()
        if(!$(this).hasClass("ac")){
            $(this).addClass("ac");
            $(this).parents("section").children('.can').slideDown()

        }else {

            $(this).removeClass("ac");
            $(this).parents("section").children('.can').slideUp()
        }
    })
    $('.input-list').on("click",".select .arrow-down",function(){
        if(!$(this).hasClass('ac')){
            $(this).addClass('ac');
            $(this).siblings('.wrap-op').show()
        }else {
            $(this).removeClass('ac');
            $(this).siblings('.wrap-op').hide()
        }
    });
    $('.input-list').on("click",".wrap-op .option a",function(){
        var val = $(this).text();
        $(this).parents('.select').children('.select-input').val(val);
        $(this).parents('.wrap-op').siblings('.arrow-down').removeClass('ac')
        $(this).parent().parent().hide()
    })

    // click more slide
    $(".see-children").on('click','span',function() {
        var inx = $(this).index(),
            selfText = $(this).text(),
            num = selfText.length,
            width = $(this).width(),
            titleText = $(this).parent().siblings().children().eq(inx).text(),
            fontSize = $(this).css("font-size").split("p")[0]*num;
            console.log(fontSize,width);
        if (fontSize>width){
            $(".module").show();
            $(".module .see-type").text(titleText);
            $(".module .see-description").text(selfText);
        }else {
            return
        }
    });

    $(".module .see-module").on('click','.btn',function() {
        $(".module ").hide();
    });
    //切换菜单栏
    $('.top-fixed .list').on("click","li",function(){
        var listTitle = $(this).attr("data-title");
        console.info(listTitle);
        if(listTitle=="delete"){
            $('.content').children('.delete').show();
            $("#modalbg").show()
        }else {
            $('.content').children("."+listTitle).show().siblings().hide();
        }
    });
    //删除框
    $('.content').on("click",".delete button",function(){
        $('.delete').hide();
        $("#modalbg").hide()
    })
});

//日历
var i18n = {
    previousMonth   : '上个月',
    nextMonth       : '下个月',
    months          : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    weekdays        : ['周日','周一','周二','周三','周四','周五','周六'],
    weekdaysShort   : ['S','M','T','W','T','F','S']
}




