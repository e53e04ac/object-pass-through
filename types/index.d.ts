/*!
 * object-pass-through/types/index.d.ts
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

import stream from 'stream';

type ObjectPassThroughConstructorOptions = {
    allowHalfOpen?: boolean
    readableHighWaterMark?: number;
    writableHighWaterMark?: number;
    writableCorked?: number;
};

type _ObjectPassThrough = {

};

type ObjectPassThrough = stream.Transform & {
    ObjectPassThroughConstructorOptions: {
        (): ObjectPassThroughConstructorOptions;
    };
    _ObjectPassThrough: {
        (): _ObjectPassThrough;
    };
};

type ObjectPassThroughBlock = {
    (input: any): Promise<void>;
};

type ObjectPassThroughConstructor = {
    (block: ObjectPassThroughBlock, options?: ObjectPassThroughConstructorOptions): ObjectPassThrough;
};

export const ObjectPassThrough: ObjectPassThroughConstructor;
