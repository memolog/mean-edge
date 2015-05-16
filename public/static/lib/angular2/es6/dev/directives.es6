import {CONST_EXPR} from './src/facade/lang';
import {For} from './src/directives/for';
import {If} from './src/directives/if';
import {NonBindable} from './src/directives/non_bindable';
import {Switch,
  SwitchWhen,
  SwitchDefault} from './src/directives/switch';
export * from './src/directives/class';
export * from './src/directives/for';
export * from './src/directives/if';
export * from './src/directives/non_bindable';
export * from './src/directives/switch';
export const coreDirectives = CONST_EXPR([For, If, NonBindable, Switch, SwitchWhen, SwitchDefault]);
//# sourceMappingURL=directives.js.map

//# sourceMappingURL=./directives.map