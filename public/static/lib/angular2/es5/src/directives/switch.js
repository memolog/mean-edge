System.register(["angular2/src/core/annotations_impl/annotations", "angular2/src/core/compiler/view_container_ref", "angular2/src/core/compiler/view_ref", "angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/core/annotations_impl/visibility"], function($__export) {
  "use strict";
  var Directive,
      ViewContainerRef,
      ProtoViewRef,
      isPresent,
      isBlank,
      normalizeBlank,
      ListWrapper,
      List,
      MapWrapper,
      Map,
      Parent,
      SwitchView,
      Switch,
      SwitchWhen,
      SwitchDefault,
      _whenDefault;
  return {
    setters: [function($__m) {
      Directive = $__m.Directive;
    }, function($__m) {
      ViewContainerRef = $__m.ViewContainerRef;
    }, function($__m) {
      ProtoViewRef = $__m.ProtoViewRef;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      normalizeBlank = $__m.normalizeBlank;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      List = $__m.List;
      MapWrapper = $__m.MapWrapper;
      Map = $__m.Map;
    }, function($__m) {
      Parent = $__m.Parent;
    }],
    execute: function() {
      SwitchView = (function() {
        function SwitchView(viewContainerRef, protoViewRef) {
          this._protoViewRef = protoViewRef;
          this._viewContainerRef = viewContainerRef;
        }
        return ($traceurRuntime.createClass)(SwitchView, {
          create: function() {
            this._viewContainerRef.create(this._protoViewRef);
          },
          destroy: function() {
            this._viewContainerRef.clear();
          }
        }, {});
      }());
      Object.defineProperty(SwitchView, "parameters", {get: function() {
          return [[ViewContainerRef], [ProtoViewRef]];
        }});
      Switch = (function() {
        function Switch() {
          this._valueViews = MapWrapper.create();
          this._activeViews = ListWrapper.create();
          this._useDefault = false;
        }
        return ($traceurRuntime.createClass)(Switch, {
          set value(value) {
            this._emptyAllActiveViews();
            this._useDefault = false;
            var views = MapWrapper.get(this._valueViews, value);
            if (isBlank(views)) {
              this._useDefault = true;
              views = normalizeBlank(MapWrapper.get(this._valueViews, _whenDefault));
            }
            this._activateViews(views);
            this._switchValue = value;
          },
          _onWhenValueChanged: function(oldWhen, newWhen, view) {
            this._deregisterView(oldWhen, view);
            this._registerView(newWhen, view);
            if (oldWhen === this._switchValue) {
              view.destroy();
              ListWrapper.remove(this._activeViews, view);
            } else if (newWhen === this._switchValue) {
              if (this._useDefault) {
                this._useDefault = false;
                this._emptyAllActiveViews();
              }
              view.create();
              ListWrapper.push(this._activeViews, view);
            }
            if (this._activeViews.length === 0 && !this._useDefault) {
              this._useDefault = true;
              this._activateViews(MapWrapper.get(this._valueViews, _whenDefault));
            }
          },
          _emptyAllActiveViews: function() {
            var activeContainers = this._activeViews;
            for (var i = 0; i < activeContainers.length; i++) {
              activeContainers[i].destroy();
            }
            this._activeViews = ListWrapper.create();
          },
          _activateViews: function(views) {
            if (isPresent(views)) {
              for (var i = 0; i < views.length; i++) {
                views[i].create();
              }
              this._activeViews = views;
            }
          },
          _registerView: function(value, view) {
            var views = MapWrapper.get(this._valueViews, value);
            if (isBlank(views)) {
              views = ListWrapper.create();
              MapWrapper.set(this._valueViews, value, views);
            }
            ListWrapper.push(views, view);
          },
          _deregisterView: function(value, view) {
            if (value == _whenDefault)
              return ;
            var views = MapWrapper.get(this._valueViews, value);
            if (views.length == 1) {
              MapWrapper.delete(this._valueViews, value);
            } else {
              ListWrapper.remove(views, view);
            }
          }
        }, {});
      }());
      $__export("Switch", Switch);
      Object.defineProperty(Switch, "annotations", {get: function() {
          return [new Directive({
            selector: '[switch]',
            properties: {'value': 'switch'}
          })];
        }});
      Object.defineProperty(Switch.prototype._onWhenValueChanged, "parameters", {get: function() {
          return [[], [], [SwitchView]];
        }});
      Object.defineProperty(Switch.prototype._activateViews, "parameters", {get: function() {
          return [[assert.genericType(List, SwitchView)]];
        }});
      Object.defineProperty(Switch.prototype._registerView, "parameters", {get: function() {
          return [[], [SwitchView]];
        }});
      Object.defineProperty(Switch.prototype._deregisterView, "parameters", {get: function() {
          return [[], [SwitchView]];
        }});
      SwitchWhen = (function() {
        function SwitchWhen(viewContainer, protoViewRef, sswitch) {
          this._value = _whenDefault;
          this._switch = sswitch;
          this._view = new SwitchView(viewContainer, protoViewRef);
        }
        return ($traceurRuntime.createClass)(SwitchWhen, {
          onDestroy: function() {
            this._switch;
          },
          set when(value) {
            this._switch._onWhenValueChanged(this._value, value, this._view);
            this._value = value;
          }
        }, {});
      }());
      $__export("SwitchWhen", SwitchWhen);
      Object.defineProperty(SwitchWhen, "annotations", {get: function() {
          return [new Directive({
            selector: '[switch-when]',
            properties: {'when': 'switch-when'}
          })];
        }});
      Object.defineProperty(SwitchWhen, "parameters", {get: function() {
          return [[ViewContainerRef], [ProtoViewRef], [Switch, new Parent()]];
        }});
      SwitchDefault = (function() {
        function SwitchDefault(viewContainer, protoViewRef, sswitch) {
          sswitch._registerView(_whenDefault, new SwitchView(viewContainer, protoViewRef));
        }
        return ($traceurRuntime.createClass)(SwitchDefault, {}, {});
      }());
      $__export("SwitchDefault", SwitchDefault);
      Object.defineProperty(SwitchDefault, "annotations", {get: function() {
          return [new Directive({selector: '[switch-default]'})];
        }});
      Object.defineProperty(SwitchDefault, "parameters", {get: function() {
          return [[ViewContainerRef], [ProtoViewRef], [Switch, new Parent()]];
        }});
      _whenDefault = new Object();
    }
  };
});
//# sourceMappingURL=switch.js.map

//# sourceMappingURL=../../src/directives/switch.js.map