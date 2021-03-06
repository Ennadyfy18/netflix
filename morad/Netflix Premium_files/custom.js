/*==============================================================================
/*==============================================================================

              21.01.2020 - Script development started

                    Script by www.cpacodex.com

================================================================================

................................................................................

                     ** Custom Premium Landing Page **
                Don't use Marketing Rhino - bad copy of us :)

===============================[ Variables ]===================================*/

var usersOnline    =                                                         500;
var timer2         =                                                     "30:00";

function loadSounds() { ion.sound.play( 'click' ); }

loadSounds();

//===========================[ Global Script ]===================================

//------------------------------[ Document ]-------------------------------------

$( document ).ready( function( ) {

  //---------------------------[ Extend jQuery ]---------------------------------

  $.fn.extend({

    animateCss: function( animationName, callback ) {

      var animationEnd = ( function( el ) {

        var animations = {

          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd',

        };

        for( var t in animations ) {

          if ( el.style[ t ] !== undefined ) {

            return animations[ t ];

          }

        }

      } )( document.createElement( 'div' ) );

      this.addClass( 'animated ' + animationName ).one( animationEnd, function() {

        $( this ).removeClass( 'animated ' + animationName );

        if ( typeof callback === 'function' ) callback();

      });

      return this;

    },

  });

  //---------------------------[ Sound Effect ]----------------------------------

    ion.sound({
    sounds: [

      {

        name: "click",
        path: "audio/",
        volume: 0.6

      },
      {

        name: "swoosh",
        path: "audio/",
        volume: 0.8

      }

    ],

      path: "audio/",
      preload: true,
      multiplay: true

    });

    $( '.soundclick' ).click( function () {

      ion.sound.play( 'click' );

    });

  //--------------------------[ Web Page Arsenal ]----------------------------------

  //=======================[ Online Users Functions ]===============================


  function getOnlineUsers() {

    var randCalc = Math.floor( Math.random() * 10 + 1 );

    if ( randCalc <= 5 ) {

      usersOnline = usersOnline + Math.floor( Math.random() * 10 + 1 );

    } else {

      usersOnline = usersOnline - Math.floor( Math.random() * 10 + 1 );

    }

    $( '#online-count' ).html( usersOnline );

  }

  //---------------------------[ Call Function ]-----------------------------------

  setInterval( function() { getOnlineUsers() }, 1000 );

  //============================[ Date Function ]==================================

  function getDate() {

    var d = new Date();

    Date.prototype.monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    Date.prototype.getMonthName = function() {

        return this.monthNames[ this.getMonth() ];

    };

    Date.prototype.getYear = function() {

      return this.getFullYear();

    };

    Date.prototype.getDay = function() {

      return this.getDate();

    };

    Date.prototype.getShortMonthName = function () {

        return this.getMonthName().substr( 0, 3 );

    };

    var finalDate = d.getDate() + " " + d.getShortMonthName() + " " + d.getYear();

    return finalDate;

  }

  //---------------------------[ Call Function ]-----------------------------------

  $( '#date' ).html( getDate() );

  //============================[ Start Button ]===================================

  $( '.btnGenerate' ).click( function() {

      $( '#appModal' ).modal( { backdrop: 'static', keyboard: false } );

  });

  //=========================[ Second Page Button ]================================

  $( '.btn-injection' ).click( function() {

      $( '#appModal' ).modal( 'hide' );

      $( '.firstPage' ).fadeOut( function() {

        $( '.secondPage' ).fadeIn();

      });

  });

  //==========================[ Platform Select ]==================================

  $( '.platform-item' ).click( function() {

      $( '.platform-item' ).removeClass( 'active animated jello' );
      $( this ).addClass( 'active animated jello' );

  });

  //===========================[ Button Verify ]===================================

  $( '#verification-button' ).click( function() {

      window.location.href = "https://appfile.cc/da6a589";

  });

  //=========================[ Back Home Button ]==================================

  $( '.goBackButton' ).click( function() {

      window.location.href = "https://iphonefull.com";

  });

  //============================[ Start Button ]===================================

 $( '.startGenerator' ).click( function() {

      if( !$( '.active' ).length ) {

        $( '.platform-field-wrapper' ).animateCss( 'shake' );

      } else {

            $( '#loadModal' ).modal( { backdrop: 'static', keyboard: false } );

            setTimeout( function() {

              $( '.progress-bar' ).css( 'width', '15%' );

              $( '.big-title' ).html( 'Loading...' );
              $( '.small-title' ).html( 'Loading Resources' );

              ion.sound.play( 'swoosh' );

              setTimeout( function() {

                $( '.progress-bar' ).css( 'width', '30%' );

                $( '.big-title' ).html( 'Finding...' );
                $( '.small-title' ).html( 'unpacking' );

                ion.sound.play( 'swoosh' );

                setTimeout( function() {

                  $( '.progress-bar' ).css( 'width', '45%' );

                  $( '.big-title' ).html( 'Successful' );
                  $( '.small-title' ).html( 'App being injected' );

                  ion.sound.play( 'swoosh' );

                  setTimeout( function() {

                    $( '.progress-bar' ).css( 'width', '65%' );

                    $( '.big-title' ).html( 'Scraping code...' );
                    $( '.small-title' ).html( '98% completed' );

                    ion.sound.play( 'swoosh' );

                    setTimeout( function() {

                      $( '.progress-bar' ).css( 'width', '85%' );

                      $( '.big-title' ).html( 'Successful scraped' );
                      $( '.small-title' ).html( 'Code saved to our server' );

                      ion.sound.play( 'swoosh' );

                      setTimeout( function() {

                        $( '.progress-bar' ).css( 'width', '100%' );

                        $( '.big-title' ).html( 'Done!' );
                        $( '.small-title' ).html( 'Your injected app, wait few seconds' );

                        setTimeout( function() {

                          ion.sound.play( 'swoosh' );

                          $( '#loadModal' ).modal( 'hide');

                          $( '.mfp-bg' ).fadeIn();
                          $( '.mfp-wrap' ).fadeIn();

                          var interval = setInterval( function() {

                            var timer = timer2.split( ':' );

                            var minutes = parseInt( timer[ 0 ], 10 );
                            var seconds = parseInt(timer[ 1 ], 10 );
                            --seconds;
                            minutes = ( seconds < 0 ) ? --minutes : minutes;
                            if ( minutes < 0 ) clearInterval( interval );
                            seconds = ( seconds < 0 ) ? 59 : seconds;
                            seconds = ( seconds < 10 ) ? '0' + seconds : seconds;

                            $( '#human_verification_timer_time span' ).html( minutes + ' minutes ' + seconds + ' seconds ' );
                            timer2 = minutes + ':' + seconds;

                          }, 1000);

                        }, 1500 );

                      }, 2000 );

                    }, 2000 );

                  }, 2000 );

                }, 3000 );

              }, 2000 );

            }, 3000 );

        }


  });


 });
