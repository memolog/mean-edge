System.register([], function($__export) {
  "use strict";
  var __esModule,
      win,
      document,
      location,
      gc,
      Event,
      MouseEvent,
      KeyboardEvent;
  return {
    setters: [],
    execute: function() {
      __esModule = true;
      $__export("__esModule", __esModule);
      win = window;
      $__export("window", win);
      document = window.document;
      $__export("document", document);
      location = window.location;
      $__export("location", location);
      gc = window.gc ? (function() {
        return window.gc();
      }) : (function() {
        return null;
      });
      $__export("gc", gc);
      Event = Event;
      $__export("Event", Event);
      MouseEvent = MouseEvent;
      $__export("MouseEvent", MouseEvent);
      KeyboardEvent = KeyboardEvent;
      $__export("KeyboardEvent", KeyboardEvent);
    }
  };
});
//# sourceMappingURL=browser.js.map

//# sourceMappingURL=../../src/facade/browser.js.map