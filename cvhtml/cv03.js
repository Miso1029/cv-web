alert('歡迎來到介紹蒼井翔太的網頁');

document.write('<h1 align="center">以下都是蒼井翔太配音的角色!</h1>');
document.write('<h2 align="center">你可以找找看有沒有你喜歡的角色喔~</h2>');

function changePage(hash) {
      $('.page').hide()
      if (hash === '#Shouta1') {
        $('.Shouta1-page').show()
      } else if (hash === '#Shouta2') {
        $('.Shouta2-page').show()
      } else if (hash === '#Shouta3') {
        $('.Shouta3-page').show()
      } else if (hash === '#Shouta4') {
        $('.Shouta4-page').show()
       }else if (hash === '#Shouta5') {
        $('.Shouta5-page').show()
      }
    }

changePage(location.hash)

window.addEventListener("hashchange", function() {
  changePage(location.hash)
});