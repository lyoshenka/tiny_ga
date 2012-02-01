/**
 * Google Analytics JS v1
 * http://code.google.com/p/google-analytics-js/
 * Copyright (c) 2009 Remy Sharp remysharp.com / MIT License
 * $Date: 2009-02-25 14:25:01 +0000 (Wed, 25 Feb 2009) $
 */
function gaTrack(propertyId, domain, url) {
    
  function rand(min, max) {
      return min + Math.floor(Math.random() * (max - min));
  }
    
  var utmn=rand(1000000000,9999999999), //random request number
      cookie=rand(10000000,99999999), //random cookie number
      random=rand(i,2147483647), //number under 2147483647
      today=(new Date()).getTime(),
      win = window.location,
      img = new Image(),
      urchinUrl = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + 
          '.google-analytics.com/__utm.gif'+
          '?utmwv=1.3'+  // tracking code version
          '&utmn='+utmn+ // unique id to prevent GIF caching
          '&utmsr=-'+ // screen resolution
          '&utmsc=-'+ // screen color depth
          '&utmul=-'+ // browser language
          '&utmje=0'+ // whether or not browser is java-enabled
          '&utmfl=-'+ // flash version
          '&utmdt=-'+ // page title
          '$utme=-'+  // extensible parameter used for events
          '&utmhn='+domain+ // hostname (should be url-encoded)
          '&utmr='+win+ // complete url of page
          '&utmp='+url+ // url of the requested page (what page it will say the user visited)
          '&utmac='+propertyId+ // account id
          '&utmcc='+ // cookies
            '__utma%3D'+cookie+'.'+random+'.'+today+'.'+today+'.'+today+'.2%3B%2B'+
            '__utmb%3D'+cookie+'%3B%2B'+
            '__utmc%3D'+cookie+'%3B%2B'+
            '__utmz%3D'+cookie+'.'+today+'.2.2.utmccn%3D(referral)%7Cutmcsr%3D'+win.host+'%7Cutmcct%3D'+win.pathname+'%7Cutmcmd%3Dreferral%3B%2B'+
            '__utmv%3D'+cookie+'.-%3B';

  // trigger the tracking
  img.src = urchinUrl;
}
