"use strict";
var $__src_47_core_47_annotations_47_visibility__,
    $__src_47_core_47_compiler_47_interfaces__,
    $__src_47_core_47_annotations_47_view__,
    $__src_47_core_47_application__,
    $__src_47_core_47_application_95_tokens__,
    $__src_47_core_47_annotations_47_di__,
    $__src_47_core_47_compiler_47_query_95_list__,
    $__src_47_core_47_compiler_47_compiler__,
    $__src_47_render_47_dom_47_compiler_47_template_95_loader__,
    $__src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__,
    $__src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__,
    $__src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__,
    $__src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__,
    $__src_47_core_47_compiler_47_dynamic_95_component_95_loader__,
    $__src_47_core_47_compiler_47_view_95_ref__,
    $__src_47_core_47_compiler_47_view_95_container_95_ref__,
    $__src_47_core_47_compiler_47_element_95_ref__;
var $__src_47_core_47_annotations_47_visibility__ = ($__src_47_core_47_annotations_47_visibility__ = require("./src/core/annotations/visibility"), $__src_47_core_47_annotations_47_visibility__ && $__src_47_core_47_annotations_47_visibility__.__esModule && $__src_47_core_47_annotations_47_visibility__ || {default: $__src_47_core_47_annotations_47_visibility__});
var $__src_47_core_47_compiler_47_interfaces__ = ($__src_47_core_47_compiler_47_interfaces__ = require("./src/core/compiler/interfaces"), $__src_47_core_47_compiler_47_interfaces__ && $__src_47_core_47_compiler_47_interfaces__.__esModule && $__src_47_core_47_compiler_47_interfaces__ || {default: $__src_47_core_47_compiler_47_interfaces__});
var $__src_47_core_47_annotations_47_view__ = ($__src_47_core_47_annotations_47_view__ = require("./src/core/annotations/view"), $__src_47_core_47_annotations_47_view__ && $__src_47_core_47_annotations_47_view__.__esModule && $__src_47_core_47_annotations_47_view__ || {default: $__src_47_core_47_annotations_47_view__});
var $__src_47_core_47_application__ = ($__src_47_core_47_application__ = require("./src/core/application"), $__src_47_core_47_application__ && $__src_47_core_47_application__.__esModule && $__src_47_core_47_application__ || {default: $__src_47_core_47_application__});
var $__src_47_core_47_application_95_tokens__ = ($__src_47_core_47_application_95_tokens__ = require("./src/core/application_tokens"), $__src_47_core_47_application_95_tokens__ && $__src_47_core_47_application_95_tokens__.__esModule && $__src_47_core_47_application_95_tokens__ || {default: $__src_47_core_47_application_95_tokens__});
var $__src_47_core_47_annotations_47_di__ = ($__src_47_core_47_annotations_47_di__ = require("./src/core/annotations/di"), $__src_47_core_47_annotations_47_di__ && $__src_47_core_47_annotations_47_di__.__esModule && $__src_47_core_47_annotations_47_di__ || {default: $__src_47_core_47_annotations_47_di__});
var $__src_47_core_47_compiler_47_query_95_list__ = ($__src_47_core_47_compiler_47_query_95_list__ = require("./src/core/compiler/query_list"), $__src_47_core_47_compiler_47_query_95_list__ && $__src_47_core_47_compiler_47_query_95_list__.__esModule && $__src_47_core_47_compiler_47_query_95_list__ || {default: $__src_47_core_47_compiler_47_query_95_list__});
var $__src_47_core_47_compiler_47_compiler__ = ($__src_47_core_47_compiler_47_compiler__ = require("./src/core/compiler/compiler"), $__src_47_core_47_compiler_47_compiler__ && $__src_47_core_47_compiler_47_compiler__.__esModule && $__src_47_core_47_compiler_47_compiler__ || {default: $__src_47_core_47_compiler_47_compiler__});
var $__src_47_render_47_dom_47_compiler_47_template_95_loader__ = ($__src_47_render_47_dom_47_compiler_47_template_95_loader__ = require("./src/render/dom/compiler/template_loader"), $__src_47_render_47_dom_47_compiler_47_template_95_loader__ && $__src_47_render_47_dom_47_compiler_47_template_95_loader__.__esModule && $__src_47_render_47_dom_47_compiler_47_template_95_loader__ || {default: $__src_47_render_47_dom_47_compiler_47_template_95_loader__});
var $__src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__ = ($__src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__ = require("./src/render/dom/shadow_dom/shadow_dom_strategy"), $__src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__ && $__src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__.__esModule && $__src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__ || {default: $__src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__});
var $__src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__ = ($__src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__ = require("./src/render/dom/shadow_dom/native_shadow_dom_strategy"), $__src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__ && $__src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__.__esModule && $__src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__ || {default: $__src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__});
var $__src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__ = ($__src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__ = require("./src/render/dom/shadow_dom/emulated_scoped_shadow_dom_strategy"), $__src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__ && $__src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__.__esModule && $__src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__ || {default: $__src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__});
var $__src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__ = ($__src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__ = require("./src/render/dom/shadow_dom/emulated_unscoped_shadow_dom_strategy"), $__src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__ && $__src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__.__esModule && $__src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__ || {default: $__src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__});
var $__src_47_core_47_compiler_47_dynamic_95_component_95_loader__ = ($__src_47_core_47_compiler_47_dynamic_95_component_95_loader__ = require("./src/core/compiler/dynamic_component_loader"), $__src_47_core_47_compiler_47_dynamic_95_component_95_loader__ && $__src_47_core_47_compiler_47_dynamic_95_component_95_loader__.__esModule && $__src_47_core_47_compiler_47_dynamic_95_component_95_loader__ || {default: $__src_47_core_47_compiler_47_dynamic_95_component_95_loader__});
var $__src_47_core_47_compiler_47_view_95_ref__ = ($__src_47_core_47_compiler_47_view_95_ref__ = require("./src/core/compiler/view_ref"), $__src_47_core_47_compiler_47_view_95_ref__ && $__src_47_core_47_compiler_47_view_95_ref__.__esModule && $__src_47_core_47_compiler_47_view_95_ref__ || {default: $__src_47_core_47_compiler_47_view_95_ref__});
var $__src_47_core_47_compiler_47_view_95_container_95_ref__ = ($__src_47_core_47_compiler_47_view_95_container_95_ref__ = require("./src/core/compiler/view_container_ref"), $__src_47_core_47_compiler_47_view_95_container_95_ref__ && $__src_47_core_47_compiler_47_view_95_container_95_ref__.__esModule && $__src_47_core_47_compiler_47_view_95_container_95_ref__ || {default: $__src_47_core_47_compiler_47_view_95_container_95_ref__});
var $__src_47_core_47_compiler_47_element_95_ref__ = ($__src_47_core_47_compiler_47_element_95_ref__ = require("./src/core/compiler/element_ref"), $__src_47_core_47_compiler_47_element_95_ref__ && $__src_47_core_47_compiler_47_element_95_ref__.__esModule && $__src_47_core_47_compiler_47_element_95_ref__ || {default: $__src_47_core_47_compiler_47_element_95_ref__});
module.exports = $traceurRuntime.exportStar({
  get ViewRef() {
    return $__src_47_core_47_compiler_47_view_95_ref__.ViewRef;
  },
  get ProtoViewRef() {
    return $__src_47_core_47_compiler_47_view_95_ref__.ProtoViewRef;
  },
  get ViewContainerRef() {
    return $__src_47_core_47_compiler_47_view_95_container_95_ref__.ViewContainerRef;
  },
  get ElementRef() {
    return $__src_47_core_47_compiler_47_element_95_ref__.ElementRef;
  },
  __esModule: true
}, $__src_47_core_47_annotations_47_visibility__, $__src_47_core_47_compiler_47_interfaces__, $__src_47_core_47_annotations_47_view__, $__src_47_core_47_application__, $__src_47_core_47_application_95_tokens__, $__src_47_core_47_annotations_47_di__, $__src_47_core_47_compiler_47_query_95_list__, $__src_47_core_47_compiler_47_compiler__, $__src_47_render_47_dom_47_compiler_47_template_95_loader__, $__src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__, $__src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__, $__src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__, $__src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_unscoped_95_shadow_95_dom_95_strategy__, $__src_47_core_47_compiler_47_dynamic_95_component_95_loader__);
//# sourceMappingURL=core.js.map

//# sourceMappingURL=./core.map