alert('歡迎來到介紹小野大輔的網頁');

document.write('<h1 align="center">以下都是小野大輔配音的角色!</h1>');
document.write('<h2 align="center">你可以找找看有沒有你喜歡的角色喔~</h2>');

function changePage(hash) {
      $('.page').hide()
      if (hash === '#Daisuke1') {
        $('.Daisuke1-page').show()
      } else if (hash === '#Daisuke2') {
        $('.Daisuke2-page').show()
      } else if (hash === '#Daisuke3') {
        $('.Daisuke3-page').show()
      } else if (hash === '#Daisuke4') {
        $('.Daisuke4-page').show()
       }else if (hash === '#Daisuke5') {
        $('.Daisuke5-page').show()
      } else if (hash === '#Daisuke6') {
        $('.Daisuke6-page').show()
      } else if (hash === '#Daisuke7') {
        $('.Daisuke7-page').show()
      } else if (hash === '#Daisuke8') {
        $('.Daisuke8-page').show()
      } else if (hash === '#Daisuke9') {
        $('.Daisuke9-page').show()
      }
    }

changePage(location.hash)

window.addEventListener("hashchange", function() {
  changePage(location.hash)
});