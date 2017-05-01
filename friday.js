$(document).ready(function(){


  $('button').on('click', function() {

    var search = $('#search').val();
    searchReddit(search);

  });

  function searchReddit(subreddit) {

    $.get('http://www.reddit.com/r/' + subreddit + '.json').done(function(response) {

      console.log(response.data.children[0].data);

      for(var i = 0; i < response.data.children.length; i++) {

        var title = response.data.children[i].data.title;
        var thumbnail = response.data.children[i].data.thumbnail;
        var author = response.data.children[i].data.author;
        var score = response.data.children[i].data.score;
        var date = response.data.children[i].data.created;


        $('.main').append('<div><p>' + title + '</p><p>' + score + '<p>' + author + '</p></p><img src=' + thumbnail + '><p>' + date + '</p></div>');
        $('.main div').addClass('box');

      }

    });

  }
  // $('.main').isotope({
  //
  //   itemSelector: '.box',
  //   layoutMode: 'fitRows'
  // });
      var elem = document.querySelector('.main');
    var iso = new Isotope( elem, {
      // options
      itemSelector: '.box',
      layoutMode: 'fitRows'
    });

    // element argument can be a selector string
    //   for an individual element
    var iso = new Isotope( '.main', {
      // options
    });



});
