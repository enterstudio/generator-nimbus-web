"use strict";

const chai = require('chai');
const {expect} = chai;
const {pathsWithOptions} = require('../../_nw/yo_utils');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

describe('unit -> yo_utils', () => {
    it('pathsWithOptions', function() {
        let _gen = {
            template: sinon.spy()
        }
        
        let _paths = [
            {
                in: 'a',
                out: 'b'
            },
            {
                in: 'c',
                out: 'd'
            },
            {
                in: 'e',
                out: 'f'
            }
        ]
       
        let _options = {
            appName: 'xyz123'
        }
        
        pathsWithOptions(_gen, _paths, _options);
        
        expect(_gen.template).to.have.been.called;
    })
})