import { Pipe, WrappedValue, PipeFactory } from './pipe';
export declare var __esModule: boolean;
/**
 * @exportedAs angular2/pipes
 */
export declare class NullPipeFactory extends PipeFactory {
    constructor();
    supports(obj: any): boolean;
    create(cdRef: any): Pipe;
}
/**
 * @exportedAs angular2/pipes
 */
export declare class NullPipe extends Pipe {
    called: boolean;
    constructor();
    static supportsObj(obj: any): boolean;
    supports(obj: any): boolean;
    transform(value: any): WrappedValue;
}
