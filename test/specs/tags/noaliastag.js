describe('@noalias tag', () => {
    const env = require('../../../lib/jsdoc/env');
    const logger = require('../../../lib/jsdoc/util/logger');

    const allowUnknownTags = Boolean(env.conf.tags.allowUnknownTags);

    beforeEach(() => {
        env.conf.tags.allowUnknownTags = false;
        spyOn(logger, 'error');
    });

    afterEach(() => {
        jasmine.restoreTagDictionary();
        env.conf.tags.allowUnknownTags = allowUnknownTags;
    });

    describe('JSDoc tags', () => {
        beforeEach(() => {
            jasmine.replaceTagDictionary('jsdoc');
        });

        it('should not recognize the @noalias tag', () => {
            jasmine.getDocSetFromFile('test/fixtures/noaliastag.js');

            expect(logger.error).toHaveBeenCalled();
        });
    });

    describe('Closure Compiler tags', () => {
        beforeEach(() => {
            jasmine.replaceTagDictionary('closure');
        });

        it('should recognize the @noalias tag', () => {
            jasmine.getDocSetFromFile('test/fixtures/noaliastag.js');

            expect(logger.error).not.toHaveBeenCalled();
        });
    });
});
