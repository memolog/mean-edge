import {ComponentAnnotation,
  DirectiveAnnotation} from './annotations';
import {ViewAnnotation} from './view';
import {AncestorAnnotation,
  ParentAnnotation} from './visibility';
import {AttributeAnnotation,
  QueryAnnotation} from './di';
import {makeDecorator,
  makeParamDecorator} from '../../util/decorators';
export var Component = makeDecorator(ComponentAnnotation);
export var Directive = makeDecorator(DirectiveAnnotation);
export var View = makeDecorator(ViewAnnotation);
export var Ancestor = makeParamDecorator(AncestorAnnotation);
export var Parent = makeParamDecorator(ParentAnnotation);
export var Attribute = makeParamDecorator(AttributeAnnotation);
export var Query = makeParamDecorator(QueryAnnotation);
//# sourceMappingURL=decorators.es6.map

//# sourceMappingURL=./decorators.map