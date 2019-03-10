describe('inner scope for modules', () => {
    const docSet = jasmine.getDocSetFromFile('test/fixtures/moduleinner.js');
    const fooIn = docSet.getByLongname('module:my/module~fooIn')[0];
    const fooOut = docSet.getByLongname('module:my/module~fooOut')[0];

    it('When a function appears in the topscope of a module, the symbol is documented as an inner member of that module.', () => {
        expect(typeof fooOut).toEqual('object');
        expect(fooOut.longname).toEqual('module:my/module~fooOut');

        expect(typeof fooIn).toEqual('object');
        expect(fooIn.longname).toEqual('module:my/module~fooIn');
    });
});
