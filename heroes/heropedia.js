var g_rgHeroPickerData;
var g_rgItemPickerData;
var g_rgAbilityPickerData;
var setcanvas;

$(document).ready(function() {
	
	//g_rgHeroPickerData = heroPickerJSON;
	g_rgHeroPickerData = heroPediaJSON["herodata"];
	//alert(g_rgHeroPickerData["axe"].dname);
	
    $('.heroPickerIconLink').hover( 
		// Mouse over
		function( e )
		{
			HeroIconHover( e.currentTarget.id, true );
		},
				// Mouse out
		function( e )
		{
			HeroIconHover( e.currentTarget.id, false );
		}
		);
		init();
});

$(window).resize(function(){
		init();
	
	});


function HeroIconHover( heroIconLink, bShow ){
				heroName = heroIconLink.slice( 5 );

				//heroIconLink = $(heroIconLink);
				if(bShow){
					//$('#hover_'+heroName).show();
					
					//$("#herohover").margin-left=100;
					$("#mycanvas").show();
					$("#heromane").show();
					
						
			
					$("#heromane").html(g_rgHeroPickerData[heroName].dname);
					//var temp=$("#mycanvas").is(":visible");
					
					//$("#herohover").show();
					var myvideo=document.getElementById("myvideo");
					var myvideosrc=myvideo.src;
					//alert(myvideosrc);
					var myvideosrcs="heroes/videos/heroes/npc_dota_hero_"+heroName+".webm";
					//alert(myvideosrc.substring(myvideosrc.lastIndexOf("/")+1));
					//alert(myvideosrcs.substring(myvideosrcs.lastIndexOf("/")+1));
					myvideosrc=myvideosrc.substring(myvideosrc.lastIndexOf("/")+1);
					myvideosrcs=myvideosrcs.substring(myvideosrcs.lastIndexOf("/")+1);

					if(myvideosrc==myvideosrcs)
						return;
					//$("#myvideo").css({"src":"Heroes_files"+"/"+"heroesnpc_dota_hero_"+heroName+".webm"});
					//$("#myvideo").src("Heroes_files"+"/"+"heroesnpc_dota_hero_"+heroName+".webm");
					//Heroes_files/heroesnpc_dota_hero_tiny.webm
					myvideo.src="heroes/videos/heroes/npc_dota_hero_"+heroName+".webm";
					var mycanvas=document.getElementById("mycanvas");
					
					var fps=3/100;
					setcanvas=setInterval(function(){
						mycanvas.getContext("2d").drawImage(myvideo,0,0,130,178);
					},fps);
					
					
					//alert($(heroIconLink).position().left);
					var Link_top=$("#"+heroIconLink).position().top;
					var Link_left=$("#"+heroIconLink).position().left;
					var Icons_top=$("#heroicos").position().top;
					var Icons_left=$("#heroicos").position().left;
					var Icons_width=$("#heroicos").width();
					var Icons_height=$("#heroicos").height();
					//alert(Icons_width);
					//var xx=$("#"+heroIconLink).position().right;
					//alert(y);
					//alert(y2);
					if(Link_top-Icons_top==0){
						if(Link_left-Icons_left==50){
							$("#herohover").css("margin-top",Link_top-Icons_top+"px");
							$("#herohover").css("margin-left",Link_left+"px");
							return;
						}
						else if(Icons_width-Link_left-60<60){
								$("#herohover").css("margin-top",Link_top-Icons_top+"px");
								$("#herohover").css("margin-left",Link_left-35-35+"px");							
								return;
							}
							else{
								$("#herohover").css("margin-top",Link_top-Icons_top+"px");
								$("#herohover").css("margin-left",Link_left-35+"px");
								return;
							}
						
					}else if(Icons_height-(Link_top-Icons_top)-104!=0){
							if(Link_left-Icons_left==50){
								$("#herohover").css("margin-top",Link_top-Icons_top-42+"px");
								$("#herohover").css("margin-left",Link_left+"px");
								return;
							}
							else if(Icons_width-Link_left-60<60){
									$("#herohover").css("margin-top",Link_top-Icons_top-42+"px");
									$("#herohover").css("margin-left",Link_left-35-35+"px");
									return;
								}
								else{
									$("#herohover").css("margin-top",Link_top-Icons_top-42+"px");
									$("#herohover").css("margin-left",Link_left-35+"px");
									return;
								}

					}
					else{

						if(Link_left-Icons_left==50){
								$("#herohover").css("margin-top",Link_top-80-42-42+"px");
								$("#herohover").css("margin-left",Link_left+"px");
								return;
							}
							else if(Icons_width-Link_left-60<60){
									$("#herohover").css("margin-top",Link_top-80-42-42+"px");
									$("#herohover").css("margin-left",Link_left-35-35+"px");
									return;
								}
								else{
									$("#herohover").css("margin-top",Link_top-80-42-42+"px");
									$("#herohover").css("margin-left",Link_left-35+"px");
									return;
								}
					}

					$("#herohover").css("margin-left",Link_left-35+"px");
					$("#herohover").css("margin-top",Link_top-80-42+"px");

					//document.getElementById("link_axe").onmouseover=function(ev){
					//		ev.stopPropagation();
					//	};
						
					
										
				}
				else{
					//var myvideo=document.getElementById("myvideo");
					//var myvideosrc=myvideo.src;
					//var myvideosrcs="npc_dota_hero_"+heroName+".webm";
					//myvideosrc=myvideosrc.substring(myvideosrc.lastIndexOf("/")+1);
					//if(myvideosrc==myvideosrcs)
					//	return;
					var myvideo=document.getElementById("myvideo");
					myvideo.src="";
					//alert("2");
					clearTimeout(setcanvas);
					$("#mycanvas").hide();
					$("#heromane").hide();
					
					//$("#herohover").hide();
				}
			}

function init(){

				$("#columnHeaderStr").height(10);
				var herocolleftheight=document.getElementById("heroColLeft");
				$("#columnHeaderStr").height(herocolleftheight.offsetHeight+2);
				$("#columnHeaderStr").height(herocolleftheight.offsetHeight-12);
				$("#columnHeaderStr").height(herocolleftheight.offsetHeight-10);
				var y=(herocolleftheight.offsetHeight-30)/2; 
				//30 字体高度+下边距
				$("#columnHeaderTextStr ").css("-webkit-transform","translate(8px,"+y+"px)");
				$("#columnHeaderTextStr div").css("-webkit-transform","rotate(-90deg)");
				$("#columnHeaderTextStr ").css("-ms-transform","translate(8px,"+y+"px)");
				$("#columnHeaderTextStr div").css("-ms-transform","rotate(-90deg)");

				$("#columnHeaderAgi").height(10);
				var herocolmidheight=document.getElementById("heroColMiddle");
				$("#columnHeaderAgi").height(herocolmidheight.offsetHeight+2);
				$("#columnHeaderAgi").height(herocolmidheight.offsetHeight-12);
				$("#columnHeaderAgi").height(herocolmidheight.offsetHeight-10);
				var y=(herocolmidheight.offsetHeight-30)/2;
				$("#columnHeaderTextAgi ").css("-webkit-transform","translate(8px,"+y+"px)");
				$("#columnHeaderTextAgi div").css("-webkit-transform","rotate(-90deg)");
				$("#columnHeaderTextAgi ").css("-ms-transform","translate(8px,"+y+"px)");
				$("#columnHeaderTextAgi div").css("-ms-transform","rotate(-90deg)");

				$("#columnHeaderInt").height(10);
				var herocolrigheight=document.getElementById("heroColRight");
				$("#columnHeaderInt").height(herocolrigheight.offsetHeight+2);
				$("#columnHeaderInt").height(herocolrigheight.offsetHeight-12);
				$("#columnHeaderInt").height(herocolrigheight.offsetHeight-10);
				var y=(herocolrigheight.offsetHeight-30)/2;
				$("#columnHeaderTextInt ").css("-webkit-transform","translate(8px,"+y+"px)");
				$("#columnHeaderTextInt div").css("-webkit-transform","rotate(-90deg)");
				$("#columnHeaderTextInt ").css("-ms-transform","translate(8px,"+y+"px)");
				$("#columnHeaderTextInt div").css("-ms-transform","rotate(-90deg)");
				
			}