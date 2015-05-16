System.register(["angular2/src/core/annotations_impl/annotations", "angular2/src/core/compiler/view_container_ref", "angular2/src/core/compiler/view_ref", "angular2/src/facade/lang", "angular2/src/facade/collection"], function($__export) {
  "use strict";
  var Directive,
      ViewContainerRef,
      ViewRef,
      ProtoViewRef,
      isPresent,
      isBlank,
      ListWrapper,
      For,
      RecordViewTuple;
  return {
    setters: [function($__m) {
      Directive = $__m.Directive;
    }, function($__m) {
      ViewContainerRef = $__m.ViewContainerRef;
    }, function($__m) {
      ViewRef = $__m.ViewRef;
      ProtoViewRef = $__m.ProtoViewRef;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
    }],
    execute: function() {
      For = (function() {
        function For(viewContainer, protoViewRef) {
          this.viewContainer = viewContainer;
          this.protoViewRef = protoViewRef;
        }
        return ($traceurRuntime.createClass)(For, {
          set iterableChanges(changes) {
            if (isBlank(changes)) {
              this.viewContainer.clear();
              return ;
            }
            var recordViewTuples = [];
            changes.forEachRemovedItem((function(removedRecord) {
              return ListWrapper.push(recordViewTuples, new RecordViewTuple(removedRecord, null));
            }));
            changes.forEachMovedItem((function(movedRecord) {
              return ListWrapper.push(recordViewTuples, new RecordViewTuple(movedRecord, null));
            }));
            var insertTuples = For.bulkRemove(recordViewTuples, this.viewContainer);
            changes.forEachAddedItem((function(addedRecord) {
              return ListWrapper.push(insertTuples, new RecordViewTuple(addedRecord, null));
            }));
            For.bulkInsert(insertTuples, this.viewContainer, this.protoViewRef);
            for (var i = 0; i < insertTuples.length; i++) {
              this.perViewChange(insertTuples[i].view, insertTuples[i].record);
            }
          },
          perViewChange: function(view, record) {
            view.setLocal('\$implicit', record.item);
            view.setLocal('index', record.currentIndex);
          }
        }, {
          bulkRemove: function(tuples, viewContainer) {
            tuples.sort((function(a, b) {
              return a.record.previousIndex - b.record.previousIndex;
            }));
            var movedTuples = [];
            for (var i = tuples.length - 1; i >= 0; i--) {
              var tuple = tuples[i];
              if (isPresent(tuple.record.currentIndex)) {
                tuple.view = viewContainer.detach(tuple.record.previousIndex);
                ListWrapper.push(movedTuples, tuple);
              } else {
                viewContainer.remove(tuple.record.previousIndex);
              }
            }
            return movedTuples;
          },
          bulkInsert: function(tuples, viewContainer, protoViewRef) {
            tuples.sort((function(a, b) {
              return a.record.currentIndex - b.record.currentIndex;
            }));
            for (var i = 0; i < tuples.length; i++) {
              var tuple = tuples[i];
              if (isPresent(tuple.view)) {
                viewContainer.insert(tuple.view, tuple.record.currentIndex);
              } else {
                tuple.view = viewContainer.create(protoViewRef, tuple.record.currentIndex);
              }
            }
            return tuples;
          }
        });
      }());
      $__export("For", For);
      Object.defineProperty(For, "annotations", {get: function() {
          return [new Directive({
            selector: '[for][of]',
            properties: {'iterableChanges': 'of | iterableDiff'}
          })];
        }});
      Object.defineProperty(For, "parameters", {get: function() {
          return [[ViewContainerRef], [ProtoViewRef]];
        }});
      RecordViewTuple = (function() {
        function RecordViewTuple(record, view) {
          this.record = record;
          this.view = view;
        }
        return ($traceurRuntime.createClass)(RecordViewTuple, {}, {});
      }());
    }
  };
});
//# sourceMappingURL=for.js.map

//# sourceMappingURL=../../src/directives/for.js.map