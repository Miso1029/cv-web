alert('歡迎來到介紹花江夏樹的網頁');

document.write('<h1 align="center">以下都是花江夏樹配音的角色!</h1>');
document.write('<h2 align="center">你可以找找看有沒有你喜歡的角色喔~</h2>');

function changePage(hash) {
      $('.page').hide()
      if (hash === '#Natsuki1') {
        $('.Natsuki1-page').show()
      } else if (hash === '#Natsuki2') {
        $('.Natsuki2-page').show()
      } else if (hash === '#Natsuki3') {
        $('.Natsuki3-page').show()
      } else if (hash === '#Natsuki4') {
        $('.Natsuki4-page').show()
       }else if (hash === '#Natsuki5') {
        $('.Natsuki5-page').show()
      } else if (hash === '#Natsuki6') {
        $('.Natsuki6-page').show()
      } else if (hash === '#Natsuki7') {
        $('.Natsuki7-page').show()
      }
    }

changePage(location.hash)

window.addEventListener("hashchange", function() {
  changePage(location.hash)
});