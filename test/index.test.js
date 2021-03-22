/*!
 * object-pass-through/test/index.test.js
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

'use strict';

const stream = require('stream');

const chai = require('chai');

describe('index.js', async () => {

    const { ObjectPassThrough } = require('../');

    it('coverage', async () => {

        const objectPassThrough = ObjectPassThrough(async (x) => { });
        objectPassThrough.ObjectPassThroughConstructorOptions();
        objectPassThrough._ObjectPassThrough();

        const input = new stream.Readable({
            objectMode: true,
            read: (size) => {
                input.push(1);
                input.push(null);
            }
        });

        const output = new stream.Writable({
            objectMode: true,
            write: (chunk, encoding, callback) => {
                callback();
            }
        });

        await new Promise((resolve, reject) => {
            stream.pipeline([
                input,
                objectPassThrough,
                output
            ], (error) => {
                if (error != null) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });

    });

});
