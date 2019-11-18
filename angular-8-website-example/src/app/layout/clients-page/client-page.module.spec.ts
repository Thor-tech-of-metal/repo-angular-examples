import {ClientPageModule} from "./client-page.module";


describe('BsElementModule', () => {
    let bsElementModule: ClientPageModule;

    beforeEach(() => {
        bsElementModule = new ClientPageModule();
    });

    it('should create an instance', () => {
        expect(bsElementModule).toBeTruthy();
    });
});
