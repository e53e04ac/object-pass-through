/*!
 * object-pass-through/src/index.jss
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

'use strict';

const stream = require('stream');

const { ObjectPassThrough } = (() => {

    /** @typedef ObjectPassThroughConstructorOptions @type {import('../types').ObjectPassThroughConstructorOptions} */
    /** @typedef _ObjectPassThrough @type {import('../types')._ObjectPassThrough} */
    /** @typedef ObjectPassThrough @type {import('../types').ObjectPassThrough} */
    /** @typedef ObjectPassThroughConstructor @type {import('../types').ObjectPassThroughConstructor} */

    /** @type {ObjectPassThroughConstructor}  */
    const ObjectPassThrough = (block, options) => {

        /** @type {ObjectPassThroughConstructorOptions}  */
        const _options = {};
        _options.allowHalfOpen = options?.allowHalfOpen;
        _options.readableHighWaterMark = options?.readableHighWaterMark;
        _options.writableHighWaterMark = options?.writableHighWaterMark;
        _options.writableCorked = options?.writableCorked;

        /** @type {_ObjectPassThrough}  */
        const _it = {};

        /** @type {ObjectPassThrough}  */
        // @ts-ignore
        const it = new stream.Transform({
            allowHalfOpen: _options.allowHalfOpen,
            writableObjectMode: true,
            readableObjectMode: true,
            readableHighWaterMark: _options.readableHighWaterMark,
            writableHighWaterMark: _options.writableHighWaterMark,
            writableCorked: _options.writableCorked,
            transform: async (chunk, encoding, callback) => {
                await block(chunk);
                it.push(chunk);
                callback();
            }
        });
        it.ObjectPassThroughConstructorOptions = () => {
            return _options;
        };
        it._ObjectPassThrough = () => {
            return _it;
        };
        return it;

    };
    return { ObjectPassThrough };

})();

module.exports = { ObjectPassThrough };
