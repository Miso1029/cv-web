alert('歡迎來到介紹速水獎的網頁');

document.write('<h1 align="center">以下都是速水獎配音的角色!</h1>');
document.write('<h2 align="center">你可以找找看有沒有你喜歡的角色喔~</h2>');

function changePage(hash) {
      $('.page').hide()
      if (hash === '#Sho1') {
        $('.Sho1-page').show()
      } else if (hash === '#Sho2') {
        $('.Sho2-page').show()
      } else if (hash === '#Sho3') {
        $('.Sho3-page').show()
      } else if (hash === '#Sho4') {
        $('.Sho4-page').show()
       }else if (hash === '#Sho5') {
        $('.Sho5-page').show()
      } else if (hash === '#Sho6') {
        $('.Sho6-page').show()
      }
    }

changePage(location.hash)

window.addEventListener("hashchange", function() {
  changePage(location.hash)
});