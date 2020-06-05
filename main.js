alert('歡迎來到Miso小天地');

document.write('<h1 align="center">以下都是Miso喜歡的男聲優~</h1>');
document.write('<h2 align="center">你可以找找看有沒有你喜歡的聲優喔!</h2>');

function changePage(hash) {
      $('.page').hide()
      if (hash === '#Tomoaki') {
        $('.Tomoaki-page').show()
      } else if (hash === '#Natsuki') {
        $('.Natsuki-page').show()
      } else if (hash === '#Shouta') {
        $('.Shouta-page').show()
      } else if (hash === '#Yoshitsugu') {
        $('.Yoshitsugu-page').show()
       }else if (hash === '#Mamoru') {
        $('.Mamoru-page').show()
      } else if (hash === '#Daisuke') {
        $('.Daisuke-page').show()
      } else if (hash === '#Kisho') {
        $('.Kisho-page').show()
      } else if (hash === '#Hiroshi') {
        $('.Hiroshi-page').show()
      } else if (hash === '#Takahiro') {
        $('.Takahiro-page').show()
      } else if (hash === '#Sho') {
        $('.Sho-page').show()
      }
    }

changePage(location.hash)

window.addEventListener("hashchange", function() {
  changePage(location.hash)
});
