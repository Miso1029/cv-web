alert('歡迎來到介紹松岡禎丞的網頁');

document.write('<h1 align="center">以下都是松岡禎丞配音的角色!</h1>');
document.write('<h2 align="center">你可以找找看有沒有你喜歡的角色喔~</h2>');

function changePage(hash) {
      $('.page').hide()
      if (hash === '#Yoshitsugu1') {
        $('.Yoshitsugu1-page').show()
      } else if (hash === '#Yoshitsugu2') {
        $('.Yoshitsugu2-page').show()
      } else if (hash === '#Yoshitsugu3') {
        $('.Yoshitsugu3-page').show()
      } else if (hash === '#Yoshitsugu4') {
        $('.Yoshitsugu4-page').show()
       }else if (hash === '#Yoshitsugu5') {
        $('.Yoshitsugu5-page').show()
      } else if (hash === '#Yoshitsugu6') {
        $('.Yoshitsugu6-page').show()
      } else if (hash === '#Yoshitsugu7') {
        $('.Yoshitsugu7-page').show()
      } else if (hash === '#Yoshitsugu8') {
        $('.Yoshitsugu8-page').show()
      }
    }

changePage(location.hash)

window.addEventListener("hashchange", function() {
  changePage(location.hash)
});