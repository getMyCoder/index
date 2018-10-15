$(function () {
    var DH=document.documentElement.clientHeight,DW=document.documentElement.clientWidth;
    $(".sky1").css({
        "height":DH+"px"
    });
    $(".sky3").css({
        "height":DH+"px"
    });
    $(".sky2").css({
        "height":DH*0.7+"px"
    });
    var ImgItems={
        rdImgSize:4,
        rdImgPL:0,
        rdImgPT:0,
        rdImg:0,
        rdImgItems:"",
        rdImgWidthMin:200,
        rdImgWidthMax:500,
        rdImgSpeed:0.2,
        rdImgMinSpeed:0.1
    };
    for (var i=0;i<=ImgItems.rdImgSize;i++){
        ImgItems.rdImg=parseInt(Math.random()*(ImgItems.rdImgSize)+1);
        ImgItems.rdImgItems="images/skyss"+ImgItems.rdImg+".png";
        $(".sky2").append("<img src="+ImgItems.rdImgItems+" />");
    }
    var itSpeed=0;
    $(".sky2 img").each(function (index) {
        ImgItems.rdImgPL=Math.random()*(DW-$(".sky2 p img").width());
        ImgItems.rdImgPT=Math.random()*$(".sky2").height();
        ImgItems.rdImgW=Math.random()*ImgItems.rdImgWidthMax+ImgItems.rdImgWidthMin;
        $(this).css({
            "top":ImgItems.rdImgPT+"px",
            "left":ImgItems.rdImgPL+"px",
            "width":ImgItems.rdImgW+"px"
        });
        itSpeed=Math.random()*ImgItems.rdImgSpeed+ImgItems.rdImgMinSpeed;
        $(this).attr("speedItems",itSpeed)
    });
    var speed=0;
    setInterval(function () {
        $(".sky2 img").each(function (index) {
            speed=parseFloat($(this).attr("speedItems"));
            var itemsLeft=$(this).offset().left;
            $(this).css({
                "left":itemsLeft+speed+"px"
            });
            if ($(this).offset().left>=DW){
                $(this).remove()
            }
            if ($(".sky2 img").size()<=ImgItems.rdImgSize){
                ImgItems.rdImg=parseInt(Math.random()*(ImgItems.rdImgSize)+1);
                ImgItems.rdImgItems="images/skyss"+ImgItems.rdImg+".png";
                $(".sky2").append("<img src="+ImgItems.rdImgItems+" />");
                ImgItems.rdImgPT=Math.random()*$(".sky2").height();
                ImgItems.rdImgW=Math.random()*ImgItems.rdImgWidthMax+ImgItems.rdImgWidthMin;
                $(".sky2 img").last().css({
                    "top":ImgItems.rdImgPT+"px",
                    "width":ImgItems.rdImgW+"px",
                    "left":-ImgItems.rdImgW+"px"
                });
                itSpeed=Math.random()*ImgItems.rdImgSpeed+ImgItems.rdImgMinSpeed;
                $(".sky2 img").last().attr("speedItems",itSpeed)
            }
        })
    },10);
// ---------------------main------------------------
    var bgColor=["#ff9b4c","#30c4f1","#f88167","#00bddd","#4acc6f","#59c9d6","#47a4dd","#fdc26a","#fd6148","#fca244","#2b2b2b","#383faa","#30c4f1"];
    $.ajax({
        type:"GET",
        url:"tsconfig.json",
        success:function (response) {
            getAjaxContainer(response.project,"project-con","项目案例","main-title");
            getAjaxContainer(response.plug,"jquery-con","插件","main-project");
            getAjaxContainer(response.other,"other-con","其他","main-other");
            $(".con ul li").each(function (index) {
                var bgSelect=bgColor[parseInt(Math.random()*bgColor.length)];
                $(this).find(".img").css({
                    "background":bgSelect
                });
                $(this).hover(function () {
                    $(this).css({
                        "background":bgSelect
                    });
                    $(this).find(".title").addClass("colorActive");
                    $(this).find(".text").addClass("colorActive");
                },function () {
                    $(this).css({
                        "background":"#fff"
                    });
                    $(this).find(".title").removeClass("colorActive");
                    $(this).find(".text").removeClass("colorActive");
                })
            })
        }
    });
    function getAjaxContainer(data,newDiv,title,titleClass) {
        var ConDiv="<div class='main-con'><div class='"+titleClass+"'><h2>"+title+"</h2></div><div class='con "+newDiv+"'><ul></ul></div></div>";
        $(".main").append(ConDiv);
        for(var a=0;a<data.length;a++){
            var createDiv="<li><a href='"+data[a].url+"'  target='_blank'><div class='img'><img src='imgsrc/"+data[a].img+"' alt=''></div><div class='title'>"+data[a].title+"</div><div class='text'>"+data[a].text+"</div></a></li>";
            var someDiv="."+newDiv+" ul";
            $(someDiv).append(createDiv);
        }
        var newClass="."+titleClass;
        $(newClass).css({"background":bgColor[parseInt(Math.random()*bgColor.length)]});
    }
});
