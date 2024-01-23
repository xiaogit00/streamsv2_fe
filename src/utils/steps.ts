import { respondToVisibility } from "./respondToVisibility";

export const steps = [
    // {
    //   id: 'slide1',
    //   beforeShowPromise: function () {
    //     return new Promise<void>(function (resolve) {
    //       setTimeout(function () {
    //         window.scrollTo(0, 0);
    //         resolve();
    //       }, 500);
    //     });
    //   },
    //   buttons: [
    //     {
    //       classes: 'fixed-width',
    //       text: "I'll explore on my own*",
    //       type: 'cancel'
    //     },
    //     {
    //       classes: 'fixed-width',
    //       text: 'Start the guide',
    //       type: 'next'
    //     }
    //   ],
    //   classes: 'shepherd-welcome',
    //   highlightClass: 'highlight',
    //   scrollTo: false,
    //   cancelIcon: {
    //     enabled: true,
    //   },
      // text: [`<div class="shepherd-slide1">
      //         <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1629781853/waves_w7pkfq.png" />
      //         <h3>Welcome to Streams!</h3>
      //         <h6>🚀 Better investment performance begins with good tracking ☺️ </h6>
      //         <p>*It’s highly recommended you go through the guide once. However, you can always retrigger onboarding by clicking on the profile icon on the bottom left.</p>
      //       </div>`]
    // },
    // {
    //   id: 'slide2',
    //   attachTo: { element: '#tickerSearch', on: 'right-start' as const},
    //   beforeShowPromise: function () {
    //     return new Promise<void>(function (resolve) {
    //       setTimeout(function () {
    //         window.scrollTo(0, 0);
    //         resolve();
    //       }, 0);
    //     });
    //   },
    //   // advanceOn: { selector: '#tickerSearch', event: 'input' },
    //   classes: 'shepherd-slide2',
    //   highlightClass: 'highlight',
    //   scrollTo: false,
    //   cancelIcon: {
    //     enabled: true,
    //   },
    //   title: "Search for a stock by its name or ticker.",
    //   // ONCE INPUT OPTIONS SHOW, TOUR.HIDE() TRIGGERED IN <STOCKSELECTOR />; 
    //   // ONCE OPTION CLICKED, TOUR.NEXT() TRIGGERED IN <STOCKSELECTOR />'S HANDLESELECTSTOCK EVENT HANDLER
    // },
    // {
    //   id: 'slide3',
    //   attachTo: { element: '#tradeForm', on: 'right-start' as const},
    //   advanceOn: { selector: '#trade-submit-button', event: 'click' },
    //   beforeShowPromise: function () {
    //     return new Promise<void>(function (resolve) {
    //       setTimeout(function () {
    //         window.scrollTo(0, 0);
    //         resolve();
    //       }, 500)
    //     });
    //   },
    //   modalOverlayOpeningPadding: 4,
    //   classes: 'shepherd-slide3',
    //   highlightClass: 'highlight',
    //   scrollTo: false,
    //   cancelIcon: {
    //     enabled: true,
    //   },
    //   title: "Fill up the remaining of the form and click Add Trade!",
    //   // 
    // },
    // {
    //   id: 'slide4',
    //   attachTo: { element: '#mainContent'},
    //   beforeShowPromise: function () {
    //     return new Promise<void>(function (resolve) {
    //       setTimeout(function () {
    //         window.scrollTo(0, 0);
    //         resolve();
    //       }, 500)
    //     });
    //   },
    //   buttons: [
    //     {
    //       classes: 'next-button',
    //       text: 'Next',
    //       type: 'next'
    //     }
    //   ],
    //   modalOverlayOpeningPadding: 2,
    //   classes: 'shepherd-slide3',
    //   highlightClass: 'highlight',
    //   scrollTo: false,
    //   cancelIcon: {
    //     enabled: true,
    //   },
    //   title: "Congratulations, you've added your first trade! This panel will display all your current holdings.",
    // },
    // {
    //   id: 'slide5',
    //   beforeShowPromise: function () {
    //     return new Promise<void>(function (resolve) {
    //       setTimeout(function () {
    //         window.scrollTo(0, 0);
    //         resolve();
    //       }, 500)
    //     });
    //   },
    //   buttons: [
    //     {
    //       classes: 'next-button',
    //       text: 'Next',
    //       type: 'next'
    //     }
    //   ],
    //   modalOverlayOpeningPadding: 2,
    //   classes: 'shepherd-welcome',
    //   highlightClass: 'highlight',
    //   scrollTo: false,
    //   cancelIcon: {
    //     enabled: true,
    //   },
    //   title: "",
    //   text: [`<div class="shepherd-slide1">
    //   <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1629781853/waves_w7pkfq.png" />
    //   <h3>Now, what are Streams?</h3>
    //   <h6>The power of Streamstrack lies in its ability to bundle trades together for simpler accounting. Let's try creating another trade of the same stock, and then we'll create a Stream.</h6>
    // </div>`]
    // },
    // {
    //     id: 'slide5',
    //     attachTo: { element: '#tickerSearch', on: 'right-start' as const},
    //     beforeShowPromise: function () {
    //       return new Promise<void>(function (resolve) {
    //         setTimeout(function () {
    //           window.scrollTo(0, 0);
    //           resolve();
    //         }, 0);
    //       });
    //     },
    //     // advanceOn: { selector: '#tickerSearch', event: 'input' },
    //     classes: 'shepherd-slide2',
    //     highlightClass: 'highlight',
    //     scrollTo: false,
    //     cancelIcon: {
    //       enabled: true,
    //     },
    //     title: "Search for the same stock",
    // },
    // {
    //   id: 'slide6',
    //   attachTo: { element: '#tradeForm', on: 'right-start' as const},
    //   advanceOn: { selector: '#trade-submit-button', event: 'click' },
    //   beforeShowPromise: function () {
    //     return new Promise<void>(function (resolve) {
    //       setTimeout(function () {
    //         window.scrollTo(0, 0);
    //         resolve();
    //       }, 500)
    //     });
    //   },
    //   modalOverlayOpeningPadding: 4,
    //   classes: 'shepherd-slide3',
    //   highlightClass: 'highlight',
    //   scrollTo: false,
    //   cancelIcon: {
    //     enabled: true,
    //   },
    //   title: "Fill up the rest of the trade form and click Add trade. Try changing the adjusted buy price to slightly lower than your first trade input.",
    //   // 
    // },
    {
      id: 'slide4',
      attachTo: { element: '#mainContent'},
      beforeShowPromise: function () {
        return new Promise<void>(function (resolve) {
          setTimeout(function () {
            window.scrollTo(0, 0);
            resolve();
          }, 500)
        });
      },
      buttons: [
        {
          classes: 'next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      modalOverlayOpeningPadding: 2,
      classes: 'shepherd-slide3',
      highlightClass: 'highlight',
      scrollTo: false,
      cancelIcon: {
        enabled: true,
      },
      title: "As you can see, your trades are all accounted for under the same stock name. But what if you want to keep them separate? Let's create a Stream!",
    },
    {
      id: 'slide6',
      attachTo: { element: '#streams-tab', on: 'right-start' as const},
      advanceOn: { selector: '#streams-tab', event: 'click' },
      beforeShowPromise: function () {
        return new Promise<void>(function (resolve) {
          setTimeout(function () {
            window.scrollTo(0, 0);
            resolve();
          }, 500)
        });
      },
      modalOverlayOpeningPadding: 4,
      classes: 'shepherd-slide3',
      highlightClass: 'highlight',
      scrollTo: false,
      cancelIcon: {
        enabled: true,
      },
      title: "Click on Add Streams",
      // 
    },
    {
      id: 'slide6',
      attachTo: { element: '#tradesForm', on: 'right-start' as const},
      advanceOn: { selector: '#stream-submit-button', event: 'click' },
      beforeShowPromise: function () {
        return new Promise<void>(function (resolve) {
          setTimeout(function () {
            window.scrollTo(0, 0);
            resolve();
          }, 500)
        });
      },
      modalOverlayOpeningPadding: 4,
      classes: 'shepherd-slide3',
      highlightClass: 'highlight',
      scrollTo: false,
      title: "As you can see, all your previously created trades will be displayed here. Select one of them to create a Stream. ",
      text:["If you don't see your trade, you might need to select the same ticker again."]
      // 
    },
    {
      id: 'slide4',
      attachTo: { element: '#mainContent'},
      beforeShowPromise: function () {
        return new Promise<void>(function (resolve) {
          setTimeout(function () {
            window.scrollTo(0, 0);
            resolve();
          }, 500)
        });
      },
      buttons: [
        {
          classes: 'next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      modalOverlayOpeningPadding: 2,
      classes: 'shepherd-slide3',
      highlightClass: 'highlight',
      scrollTo: false,
      cancelIcon: {
        enabled: true,
      },
      title: "Your newly created Stream will now be reflected here.",
      text: ["Now, it holds similar information as your holdings tab, but there's a crucial difference. You can create multiple Streams for one kind of asset. Why would you want to do that? Being able to account for trade at different cost basis creates a better abstraction for thinking and acting on trades."]
    },
    {
      id: 'slide4',
      attachTo: { element: '#tradesForm', on: 'right-start' as const},
      advanceOn: { selector: '#stream-submit-button', event: 'click' },
      beforeShowPromise: function () {
        return new Promise<void>(function (resolve) {
          setTimeout(function () {
            window.scrollTo(0, 0);
            resolve();
          }, 500)
        });
      },
      buttons: [
        {
          classes: 'next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      modalOverlayOpeningPadding: 2,
      classes: 'shepherd-slide3',
      highlightClass: 'highlight',
      scrollTo: false,
      cancelIcon: {
        enabled: true,
      },
      title: "Try creating another Stream, this time assigning the other trade to it!",
    },
    {
      id: 'slide4',
      attachTo: { element: '#mainContent'},
      beforeShowPromise: function () {
        return new Promise<void>(function (resolve) {
          setTimeout(function () {
            window.scrollTo(0, 0);
            resolve();
          }, 500)
        });
      },
      buttons: [
        {
          classes: 'next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      modalOverlayOpeningPadding: 2,
      classes: 'shepherd-slide3',
      highlightClass: 'highlight',
      scrollTo: false,
      cancelIcon: {
        enabled: true,
      },
      title: "As you can see, the two streams will have different cost basis, hence affecting their unrealized P&L.",
      text: ["This allows you to account for different 'cashflow streams' differently, useful for more complex trading strategies such as DCA. It also allows you to 'take profit' at different levels."]
    },
    {
        id: 'slide5',
        beforeShowPromise: function () {
          return new Promise<void>(function (resolve) {
            setTimeout(function () {
              window.scrollTo(0, 0);
              resolve();
            }, 500)
          });
        },
        buttons: [
          {
            classes: 'next-button',
            text: 'Next',
            type: 'next'
          }
        ],
        modalOverlayOpeningPadding: 2,
        classes: 'shepherd-welcome',
        highlightClass: 'highlight',
        scrollTo: false,
        cancelIcon: {
          enabled: true,
        },
        title: "",
        text: [`<div class="shepherd-slide1">
        <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1629781853/waves_w7pkfq.png" />
        <h3>You're all set!</h3>
      </div>`]
      }
  ];

export const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true
    }
  },
  useModalOverlay: true
};