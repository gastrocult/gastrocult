'use strict';

var nav = document.querySelector('nav');
var content = document.querySelector('.contentWrapper');
var contentText = document.querySelector('.content');
var header = document.querySelector('header');

var getNavOffset = function getNavOffset() {
  return nav.offsetTop - scrollY;
};

var getContentOffset = function getContentOffset() {
  return content.offsetTop - scrollY;
};

var isStickyNav = function isStickyNav() {
  if (getContentOffset() - nav.clientHeight >= 0) {
    header.setAttribute("style", "padding-bottom: 0");
    nav.classList.remove('navFixed');
  } else if (getNavOffset() <= 0) {
    nav.classList.add('navFixed');
    header.setAttribute("style", 'padding-bottom: ' + nav.clientHeight + 'px');
  }
};

document.addEventListener('scroll', isStickyNav);

var pages = {
  about: "<p>Communication and engagement with your customers are essential to the life and longevity of any business, and your restaurant is no different. You communicate and engage with your customers with the food you create and space you design, and that conversation begins when your guest first walks through the front doors. </p><p>Social media gives you the ability to extend that conversation beyond the dining experience, allowing you to connect with your audience in the unique way only social media can. At GastroCult, we help you carry out a social media and marketing strategy that keeps your guests engaged and communicating with your restaurant, helping you increase your visibility in a growing, and increasingly competitive, Boston dining landscape.</p><p>We’ll help you build an engaged, loyal customer base in the digital realm with a strategy unique to you and your business. We’ll help establish and maintain your presence in Boston’s quickly evolving restaurant space. And most importantly, we’ll help foster a sense of connectedness between restaurant and guest, creating a relationship that not only keeps the conversation going, but one that brings your guests back through that front door again and again.</p><p>Your food speaks to who you are as a restaurant and as a chef. Let GastroCult help you continue the conversation.</p>",
  contact: "Contact",
  people: "<p>We are a group of young professionals who are passionate about the food industry, and we believe that the best work is put forth when you put your heart into it.</p><ul><li>Ana Jimenez <em>Cult Leader</em></li><li>Haley Hillesland</li><li>Francisco Dias</li></ul>"
};

var replaceContent = function replaceContent(e) {
  contentText.innerHTML = pages[e.target.classList[0]];
};

contentText.innerHTML = pages.about;

for (page in pages) {
  document.querySelector('.' + page).addEventListener('click', replaceContent);
};
