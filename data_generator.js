/*
 * NOTE: This file generates fake post data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
window.streams = {};
streams.home = [];
streams.users = {};
streams.users.babeRuth = [];
streams.users.sportsFan100 = [];
streams.users.proBaller = [];
streams.users.hallOfFamer = [];
streams.users.hatesTheYankees = [];
window.users = Object.keys(streams.users);

// utility function for adding posts to our data structures
var addPost = function(newPost){
  var username = newPost.user;
  streams.users[username].push(newPost);
  streams.home.push(newPost);
};

// utility function
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random post generator
var opening = ['just', 'final seconds!', '', '', '', 'completely', 'nearly', 'going big!', 'trained so hard I', 'What a game!', 'the quarterback', 'that wizard', 'a ninja', 'the rookie', 'it\'s not looking good.'];
var verbs = ['threw', 'caught', 'deployed', 'trained', 'built', 'experienced a', 'navigated', 'aided', 'assisted', 'raced', 'winning', 'lost', 'scored', 'blocked', 'fumbled', 'drove'];
var objects = ['the first', 'the last', 'an amazing', 'a champion\'s', '', 'an expert','the big', 'a new level of'];
var nouns = ['ball', 'puck', 'city', 'sport', 'team', 'salary', 'frisbee', 'club', 'way of life', 'belief they can win', 'game plan', 'game time decision', 'next season', 'life', 'defensive line', 'mind', 'foul'];
var tags = ['#worldcup', '#mlb', '#sf', '#nba', 'A true great!', '#mvp', '#ballin', '#omg', '#yolo', '#magic', '#sweep', 'in the final seconds!', '#ftw', '#winning', "what a play!"];
var images = ['./assets/img1.webp', './assets/img2.jpeg', './assets/img3.webp', './assets/img4.jpeg', './assets/img5.png', './assets/img6.webp', './assets/img7.jpeg', './assets/img8.jpeg', './assets/img9.jpeg', './assets/img10.jpeg', './assets/img11.jpeg', './assets/img12.webp'];

var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// generate random posts on a random schedule
var generateRandomPost = function(){
  var post = {};
  post.user = randomElement(users);
  post.message = randomMessage();
  post.created_at = new Date();
  post.imageSrc = randomElement(images);
  addPost(post);
};

for(var i = 0; i < 10; i++){
  generateRandomPost();
}

var scheduleNextPost = function(){
  generateRandomPost();
  setTimeout(scheduleNextPost, Math.random() * 1500);
};
scheduleNextPost();

// utility function for letting students add "write a post" functionality
// (note: not used by the rest of this file.)
var writePost = function(message){
  if(!visitor){
    throw new Error('set the global visitor property!');
  }
  var post = {};
  post.user = visitor;
  post.message = message;
  addPost(post);
};
