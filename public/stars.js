$(document).ready(function(){

  const stars_container_width = $(('.stars-container')).width();
  // const stars_container_height = $(('.stars-container')).height();
    for (let i = 0; i < 200; i++) {
        const random2 =  Math.floor(Math.random() * (100));
        const random3 =  Math.floor(Math.random() * (100));
        const random4 =  Math.floor(Math.random() * 3) + 2;
        $(".fp-completely > .fp-tableCell > .stars-container > .wraper > .proton >.electron").append("<div class='dot' style=' left: "+random2+"%;top: "+random3+"%;  width: "+random4+"px;height: "+random4+"px;'></div>");
      }

  });
