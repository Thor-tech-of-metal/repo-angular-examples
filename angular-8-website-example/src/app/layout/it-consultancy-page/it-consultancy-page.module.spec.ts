import {ItConsultancyPageModule} from "./it-consultancy-page.module";


describe('BsElementModule', () => {
    let bsElementModule: ItConsultancyPageModule;

    beforeEach(() => {
        bsElementModule = new ItConsultancyPageModule();
    });

    it('should create an instance', () => {
        expect(bsElementModule).toBeTruthy();
    });
});
