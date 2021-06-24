//구글 youtube iframe api

var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      function onYouTubeIframeAPIReady() {
        // <div id='player'></div> ,videoID에 원하는 id 입력
        new YT.Player('player', {
          videoId: 'An6LvWQuj_8',       // 최초 재생할 유튜브 영상 ID
          playerVars: {                 // 영상 재생 변수들
            autoplay: true,
            loop: true,                 //반복재생 유무인 경우,
            playlist: 'An6LvWQuj_8'     // 반복 재생할 유튜브 영상 ID 목록 제공
          },
          events: {
            onReady: function(event) {
              event.target.mute()       // 음소거
            }
          }
        });
      }