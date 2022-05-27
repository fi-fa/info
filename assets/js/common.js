// 切换国籍的下拉框
function changeLanguage() {

    if ($('#selectNationality').is(':hidden')) {
      //如果隐藏时。。。
      $('#selectNationality').show();
      $('#arrowd').show();
      $('#arrowu').hide();
  
    } else {
      //如果显示时。。。
      $('#selectNationality').hide();
      $('#arrowd').hide();
      $('#arrowu').show();
    }
  
  }

  // 点击跳转页面
$("#listFlag li").click(function () {

    let index = $("#listFlag li").index(this);
  
    if (index == 0) { //0美国
      window.location.href = "index.html";
    } else if (index == 1) { //1中国
      window.location.href = "indexCN.html";
    }
    //  else if (index == 2) { //1日本
    //   window.location.href = "indexJP.html";
    // } else if (index == 3) { //1韩国
    //   window.location.href = "indexKR.html";
    // }
  
  
  });