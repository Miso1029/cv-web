alert('歡迎來到介紹谷山紀章的網頁');

document.write('<h1 align="center">以下都是谷山紀章配音的角色!</h1>');
document.write('<h2 align="center">你可以找找看有沒有你喜歡的角色喔~</h2>');

function changePage(hash) {
      $('.page').hide()
      if (hash === '#Kisho1') {
        $('.Kisho1-page').show()
      } else if (hash === '#Kisho2') {
        $('.Kisho2-page').show()
      } else if (hash === '#Kisho3') {
        $('.Kisho3-page').show()
      } else if (hash === '#Kisho4') {
        $('.Kisho4-page').show()
       }else if (hash === '#Kisho5') {
        $('.Kisho5-page').show()
      }
    }

changePage(location.hash)

window.addEventListener("hashchange", function() {
  changePage(location.hash)
});