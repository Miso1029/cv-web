alert('歡迎來到介紹櫻井孝宏的網頁');

document.write('<h1 align="center">以下都是櫻井孝宏配音的角色!</h1>');
document.write('<h2 align="center">你可以找找看有沒有你喜歡的角色喔~</h2>');

function changePage(hash) {
      $('.page').hide()
      if (hash === '#Takahiro1') {
        $('.Takahiro1-page').show()
      } else if (hash === '#Takahiro2') {
        $('.Takahiro2-page').show()
      } else if (hash === '#Takahiro3') {
        $('.Takahiro3-page').show()
      } else if (hash === '#Takahiro4') {
        $('.Takahiro4-page').show()
       }else if (hash === '#Takahiro5') {
        $('.Takahiro5-page').show()
      } else if (hash === '#Takahiro6') {
        $('.Takahiro6-page').show()
      } else if (hash === '#Takahiro7') {
        $('.Takahiro7-page').show()
      } else if (hash === '#Takahiro8') {
        $('.Takahiro8-page').show()
      } else if (hash === '#Takahiro9') {
        $('.Takahiro9-page').show()
      }
    }

changePage(location.hash)

window.addEventListener("hashchange", function() {
  changePage(location.hash)
});