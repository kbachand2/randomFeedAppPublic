function loadTitle(){
  $(document).ready(function(){
    var $header = $('#Title');
    var $subheader = $('#Subtitle');
    $header.click(function() {
      var $allFriendButtons = $('button.friend');
      $allFriendButtons.removeClass('active');
      $('#feedHead').text('Feed');
      var $feed = $('.post');
      $feed.each(function (){
          $(this).show();
        })
      });
    $subheader.click(function() {
      var $allFriendButtons = $('button.friend');
      $allFriendButtons.removeClass('active');
      $('#feedHead').text('Feed');
      var $feed = $('.post');
      $feed.each(function (){
          $(this).show();
        })
      });
});
}

function loadFeed(){
$(document).ready(function(){
  var $postBody = $('#feed');
  $postBody.html('');

  var index = streams.home.length - 1;
  while(index >= 0){
    var post = streams.home[index];
    var $post = $('<div class= "post"></div>');
    var $postImage = $('<img class="fit-picture" src= '+ post.imageSrc + 'alt="Post Image">');
    $post.data('name', post.user);
    $post.data('postText', post.message);
    var postTime = jQuery.timeago(new Date());
    $post.text('@' + post.user + ': ' + post.message + ' '+ postTime);
    $post.prepend($('<img>', {class: 'fit-picture', src: post.imageSrc}));
    $post.appendTo($postBody);
    $post.click(function(){
      // alert('you clicked a post by '+ $(this).data('name'));
      var homeButton = $('#homeButton');
      homeButton.show();
      var $feed = $('.post');
      var name = $(this).data('name');
      var allFriendButtons = $('.friend');
      $('#feedHead').text('Latest Messages From ' + '@' + name + ' (' + streams.users[name].length + ')');
      allFriendButtons.each(function(){
        //name is what the post user is.
        if ($(this).text() === '@' + name){
          $(this).addClass('active');
        }
        else {
          console.log('error in sorting by post user when post clicked');
        }
      })
      //set friend button to active.
      $feed.each(function (){
        if ($(this).data('name') === name){
          $(this).show();
        }
        else {
          $(this).hide();
        }
      });
    })
    index -= 1;
  }
})
}

function loadFriends(){
$(document).ready(function(){
  var $friendsList = $('#friendsList');
  var index = window.users.length - 1;
  var sortFeed = function(){
    //name should be the user name, not the text of the button
    var name = $(this).data('name');
    // alert("Test worked for clicking " + name);
    var $feed = $('.post');
    $feed.each(function (){
      if ($(this).data('name') === name){
        $(this).show();
      }
      else {
        $(this).hide();
      }
    }
    );
  }
  var setActive = function(){
    var currentButton = $(this);
    var currentButtonName = $(this).text();
    var allFriendButtons = $('.friend')
    var homeButton = $('#homeButton');
    if (activeStatus === false){
      currentButton.addClass('active');
      // alert ('the button has been activated');
      $('#feedHead').text('Latest Messages From ' + currentButtonName);
      homeButton.show();
    }
    else if (activeStatus === true) {
      allFriendButtons.removeClass('active');
      // alert ('active buttons cleared and new choice set');
      currentButton.addClass('active');
      $('#feedHead').text('Latest Messages From ' + currentButtonName);
    }
    else {
      console.log(activeStatus);
    }
  }

  //redundant?
  var activeStatus = '';
  var checkActive = function(){
    if ($('button').hasClass('active')){
      activeStatus = true;
    }
    else {
      activeStatus = false;
    }
  }

  //adding friend buttons to list
  while(index >=0){
    var friend = window.users[index];
    var currentFriendPostCount = streams.users[friend].length;
    var $friend = $('<button class = "friend"></button>');
    $friend.data('name', friend);
    $friend.text('@' + friend + ' (' + currentFriendPostCount + ')');
    $friend.appendTo($friendsList);
    $friend.click(checkActive);
    $friend.click(setActive);
    $friend.click(sortFeed);
    console.log($friend);
    index -= 1;
  }
});
}

//this is only for presence of home button. Need to make another function for action.
function homeButton() {
  $(document).ready(function(){
  var $allFriendButtons = $('button.friend');
  var homeButton = $('#homeButton');
  console.log($allFriendButtons.length);

  if($allFriendButtons.hasClass('active')){
    homeButton.show();
  }
  else if ($allFriendButtons.hasClass('active') === false) {
    homeButton.hide();
  }
  else {
    console.log('error in home button processing');
  }
  homeButton.click(function() {
    homeButton.hide();
  });
  homeButton.click(function(){
    $allFriendButtons.removeClass('active');
    console.log('removed Class for 1 friend');
    $('#feedHead').text('Feed');
    var $feed = $('.post');
    $feed.each(function (){
        $(this).show();
      })
  });
});
}

function refreshPosts(){
  $(document).ready(function(){
    var streamsLength = streams.home.length - 1;
    var domLength = $('div.post').length;
    var $postBody = $('#feed');
    console.log(streamsLength);
    console.log(domLength);
    var index = streams.home.length - 1;
    for (var i = domLength; i <= streamsLength; i++){
      var post = streams.home[i];
      var $post = $('<div class= "post"></div>');
      var $postImage = $('<img class="fit-picture" src= '+ post.imageSrc + 'alt="Post Image">');
      $post.data('name', post.user);
      $post.data('postText', post.message);
      var postTime = jQuery.timeago(new Date());
      $post.text('@' + post.user + ': ' + post.message + ' '+ postTime);
      $post.prepend($('<img>', {class: 'fit-picture', src: post.imageSrc}));
      $post.appendTo($postBody);
      $post.click(function(){
        alert('you clicked a post by '+ $(this).data('name'));
        var homeButton = $('#homeButton');
        homeButton.show();
        var $feed = $('.post');
        var name = $(this).data('name');
        var allFriendButtons = $('.friend');
        $('#feedHead').text('Latest Messages From ' + '@' + name + ' (' + streams.users[name].length + ')');
        allFriendButtons.each(function(){
          //name is what the post user is.
          if ($(this).text() === '@' + name){
            $(this).addClass('active');
          }
          else {
            console.log('error in sorting by post user when post clicked');
          }
        })
        //set friend button to active.
        $feed.each(function (){
          if ($(this).data('name') === name){
            $(this).show();
          }
          else {
            $(this).hide();
          }
        });
      })
    }
  });
}
   
  //UPDATING POST COUNT WITHIN FRIENDS FOR EVERY FEED REFRESH
  function refreshFriends(){
    $(document).ready(function(){
      var $friendsList = $('#friendsList');
      var index = window.users.length - 1;
      while(index >=0){
        var friend = window.users[index];
        console.log(friend);
        var currentFriendPostCount = streams.users[friend].length;
        var allFriends = $('button.friend');
        var currentFriend = $('button:contains("' + friend + '")'); 
        currentFriend.text('@' + friend + ' (' + currentFriendPostCount + ')'); 
        // var currentFriend = $('[data-name="' + friend + '"]');
        //Note that this did not work. The data attribute is not getting assigned to the DOM?
        index -= 1;
      }
    })
  }

  function testing(){
    $(document).ready(function(){
    var allPosts = $('div.post');
      console.log(allPosts.length);
    });
  }

var refreshFeed = function(){
    setTimeout(function(){
      refreshPosts();
      refreshFriends();
    } , 2000)
}

loadTitle();
loadFeed();
loadFriends();
homeButton();
testing();
refreshFeed();
