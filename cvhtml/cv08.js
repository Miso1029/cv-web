alert('歡迎來到介紹神谷浩史的網頁');

document.write('<h1 align="center">以下都是神谷浩史配音的角色!</h1>');
document.write('<h2 align="center">你可以找找看有沒有你喜歡的角色喔~</h2>');

function changePage(hash) {
      $('.page').hide()
      if (hash === '#Hiroshi1') {
        $('.Hiroshi1-page').show()
      } else if (hash === '#Hiroshi2') {
        $('.Hiroshi2-page').show()
      } else if (hash === '#Hiroshi3') {
        $('.Hiroshi3-page').show()
      } else if (hash === '#Hiroshi4') {
        $('.Hiroshi4-page').show()
       }else if (hash === '#Hiroshi5') {
        $('.Hiroshi5-page').show()
      } else if (hash === '#Hiroshi6') {
        $('.Hiroshi6-page').show()
      } else if (hash === '#Hiroshi7') {
        $('.Hiroshi7-page').show()
      } else if (hash === '#Hiroshi8') {
        $('.Hiroshi8-page').show()
      } else if (hash === '#Hiroshi9') {
        $('.Hiroshi9-page').show()
      }
    }

changePage(location.hash)

window.addEventListener("hashchange", function() {
  changePage(location.hash)
});