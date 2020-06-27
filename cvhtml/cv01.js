alert('歡迎來到介紹前野智昭的網頁');

document.write('<h1 align="center">以下都是前野智昭配音的角色!</h1>');
document.write('<h2 align="center">你可以找找看有沒有你喜歡的角色喔~</h2>');

function changePage(hash) {
      $('.page').hide()
      if (hash === '#Tomoaki1') {
        $('.Tomoaki1-page').show()
      } else if (hash === '#Tomoaki2') {
        $('.Tomoaki2-page').show()
      } else if (hash === '#Tomoaki3') {
        $('.Tomoaki3-page').show()
      } else if (hash === '#Tomoaki4') {
        $('.Tomoaki4-page').show()
       }else if (hash === '#Tomoaki5') {
        $('.Tomoaki5-page').show()
      } else if (hash === '#Tomoaki6') {
        $('.Tomoaki6-page').show()
      } else if (hash === '#Tomoaki7') {
        $('.Tomoaki7-page').show()
      } else if (hash === '#Tomoaki8') {
        $('.Tomoaki8-page').show()
      } else if (hash === '#Tomoaki9') {
        $('.Tomoaki9-page').show()
      } else if (hash === '#Tomoaki10') {
        $('.Tomoaki10-page').show()
      }
    }

changePage(location.hash)

window.addEventListener("hashchange", function() {
  changePage(location.hash)
});