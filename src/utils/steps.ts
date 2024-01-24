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
    //   text: [`<div class="shepherd-slide1">
    //           <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1629781853/waves_w7pkfq.png" />
    //           <h3>Welcome to Streams!</h3>
    //           <h6>🚀 Better investment performance begins with good tracking ☺️ </h6>
    //           <p>*It’s highly recommended you go through the guide once. However, you can always retrigger onboarding by clicking on the profile icon on the bottom left.</p>
    //         </div>`]
    // },
    // {
    //   id: 'slide2',
    //   attachTo: { element: '#tickerSearch', on: 'right-start' as const},
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
    //       classes: 'skip-button',
    //       text: "Back",
    //       type: 'back'
    //     },
    //     {
    //       classes: 'skip-button',
    //       text: "Skip this step",
    //       type: 'next'
    //     }
    //   ],
    //   // advanceOn: { selector: '#tickerSearch', event: 'input' },
    //   classes: 'shepherd-side',
    //   highlightClass: 'highlight',
    //   scrollTo: false,
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
    //   buttons: [
    //         {
    //           classes: 'skip-button',
    //           text: "Back",
    //           type: 'back'
    //         },
    //         {
    //           classes: 'skip-button',
    //           text: "Skip this step",
    //           type: 'next'
    //         }
    //       ],
    //   modalOverlayOpeningPadding: 4,
    //   classes: 'shepherd-side',
    //   highlightClass: 'highlight',
    //   scrollTo: false,
    //   title: "Fill up the remaining of the form and click Add Trade!",
    //   // 
    // },
    // {
    //   id: 'slide4',
    //   attachTo: { element: '#trade-table', on: 'bottom' as const},
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
    //   classes: 'shepherd-center',
    //   highlightClass: 'highlight',
    //   scrollTo: false,
    //   title: "Congratulations, you've added your first trade! All your current holdings will appear here.",
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
    //       classes: 'skip-button',
    //       text: "Back",
    //       type: 'back'
    //     },
    //     {
    //       classes: 'skip-button',
    //       text: "Next",
    //       type: 'next'
    //     }
    //   ],
    //   modalOverlayOpeningPadding: 2,
    //   classes: 'shepherd-feature',
    //   highlightClass: 'highlight',
    //   scrollTo: false,
    //   cancelIcon: {
    //     enabled: true,
    //   },
    //   title: "",
    //   text: [`<div class="shepherd-slide1">
    //   <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1629781853/waves_w7pkfq.png" />
    //   <h3>Keeping records of all your trades is good, but what if you want to...</h3>
    //   <div>
    //     <h6>• Group some trades together, whilst keeping others apart?</h6><br>
    //     <h6>• Account for P&L of different groups differently?</h6><br>
    //     <h6>• Take profit by selling from one group, but not the other?</h6><br>
    //   </div>
    //   <h6>Introducing "Streams". At its core, a "Stream" is simply a bundle of trades.</h6>
    // </div>`]
    // },
    // {
    //   id: 'slide6',
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
    //       classes: 'skip-button',
    //       text: "Back",
    //       type: 'back'
    //     },
    //     {
    //       classes: 'skip-button',
    //       text: "Next",
    //       type: 'next'
    //     }
    //   ],
    //   modalOverlayOpeningPadding: 2,
    //   classes: 'shepherd-feature',
    //   highlightClass: 'highlight',
    //   scrollTo: false,
    //   cancelIcon: {
    //     enabled: true,
    //   },
    //   title: "",
    //   text: [`<div class="shepherd-slide1">
    //   <h3>Let's create one more trade so that we can begin assigning trades to Streams.</h3>
    // </div>`]
    // },
    // {
    //     id: 'slide7',
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
    //     buttons: [
    //       {
    //         classes: 'skip-button',
    //         text: "Back",
    //         type: 'back'
    //       },
    //       {
    //         classes: 'skip-button',
    //         text: "Skip this step",
    //         type: 'next'
    //       }
    //     ],
    //     classes: 'shepherd-side',
    //     highlightClass: 'highlight',
    //     scrollTo: false,
    //     title: "Search for the same stock",
    //     // Hide at <StockSelector /> within debounced useEffect
    // },
    // {
    //   id: 'slide8',
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
    //   buttons: [
    //     {
    //       classes: 'skip-button',
    //       text: "Back",
    //       type: 'back'
    //     },
    //     {
    //       classes: 'skip-button',
    //       text: "Skip this step",
    //       type: 'next'
    //     }
    //   ],
    //   modalOverlayOpeningPadding: 4,
    //   classes: 'shepherd-side',
    //   highlightClass: 'highlight',
    //   scrollTo: false,
    //   title: "Fill up the rest of the trade form and click Add trade. Try changing the buy price to a lower value than your first trade buy price.",
    //   // Appear on <StockSelector /> within handleSelectStock
    // },
    // {
    //   id: 'slide9',
    //   attachTo: { element: '#workspace', on: 'bottom' as const},
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
    //       classes: 'skip-button',
    //       text: "Back",
    //       type: 'back'
    //     },
    //     {
    //       classes: 'skip-button',
    //       text: "Next",
    //       type: 'next'
    //     }
    //   ],
    //   modalOverlayOpeningPadding: 2,
    //   classes: 'shepherd-slide3',
    //   highlightClass: 'highlight',
    //   scrollTo: false,
    //   title: "As you can see, you've added a second trade. As we're currently on the Holdings tab, these two trades are aggregated in one row (reflective of your total holdings). <br><br> Now that we have 2 trades, we can illustrate the power of Streams.",
    // },
    // {
    //   id: 'slide10',
    //   attachTo: { element: '#streams-tab', on: 'right-start' as const},
    //   advanceOn: { selector: '#streams-tab', event: 'click' },
    //   beforeShowPromise: function () {
    //     return new Promise<void>(function (resolve) {
    //       setTimeout(function () {
    //         window.scrollTo(0, 0);
    //         resolve();
    //       }, 500)
    //     });
    //   },
    //   modalOverlayOpeningPadding: 4,
    //   classes: 'shepherd-side-slim',
    //   highlightClass: 'highlight',
    //   scrollTo: false,
    //   title: "Click on Add Streams",
    //   // 
    // },
    // {
    //   id: 'slide11',
    //   attachTo: { element: '#tradesForm', on: 'right-start' as const},
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
    //   title: "As you can see, all your previously created trades will be displayed here. Select one of them to create a Stream. ",
    //   text:["If you don't see your trade, you might need to select the same ticker again."]
    //   // Advance on form submitting <NewForm /> submitStreamHandler
    // },
    // {
    //   id: 'slide12',
    //   attachTo: { element: '#workspace'},
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
    //       classes: 'skip-button',
    //       text: "Back",
    //       type: 'back'
    //     },
    //     {
    //       classes: 'skip-button',
    //       text: "Next",
    //       type: 'next'
    //     }
    //   ],
    //   modalOverlayOpeningPadding: 2,
    //   classes: 'shepherd-center',
    //   highlightClass: 'highlight',
    //   scrollTo: false,
    //   title: "You've successfully created your first Stream! All trades assigned to this stream can now be treated as a logical unit. Let's add another Stream.",
    // },
    {
      id: 'slide13',
      attachTo: { element: '#tradesForm', on: 'right-start' as const},
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
          classes: 'skip-button',
          text: "Back",
          type: 'back'
        },
        {
          classes: 'skip-button',
          text: "Next",
          type: 'next'
        }
      ],
      modalOverlayOpeningPadding: 2,
      classes: 'shepherd-side',
      highlightClass: 'highlight',
      scrollTo: false,
      title: "Try creating another Stream. This time, assign the other trade to it.",
    },
    {
      id: 'slide14',
      attachTo: { element: '#streams-table', on: 'bottom' as const},
      beforeShowPromise: function () {
        return new Promise<void>(function (resolve) {
          setTimeout(function () {
            window.scrollTo(0, 0);
            resolve();
          }, 1000)
        });
      },
      buttons: [
        {
          classes: 'skip-button',
          text: "Back",
          type: 'back'
        },
        {
          classes: 'skip-button',
          text: "Next",
          type: 'next'
        }
      ],
      modalOverlayOpeningPadding: 2,
      classes: 'shepherd-slide3',
      highlightClass: 'highlight',
      scrollTo: false,
      title: "Nice. Now you can see that we have two Streams containing one trade each. Both of them have their own Avg Cost Basis, which will affect all the other fields, in particular the Unrealized Returns and Realized Returns. <br><br>You can now account for them differently. <br><br> E.g. when performing a sell trade, you can choose which Stream to assign it to.",
    },
    {
      id: 'slide15',
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
          text: 'Done',
          type: 'next'
        }
      ],
      modalOverlayOpeningPadding: 2,
      classes: 'shepherd-feature',
      highlightClass: 'highlight',
      scrollTo: false,
      cancelIcon: {
        enabled: true,
      },
      title: "",
      text: [`<div class="shepherd-slide1">
      <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1629781853/waves_w7pkfq.png" />
      <h3>You're all set!</h3>
      <h6>Happy tracking :) </h6>
      <h6>If you need to trigger this guide again, click on the owl icon on the bottom left.</h6>
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