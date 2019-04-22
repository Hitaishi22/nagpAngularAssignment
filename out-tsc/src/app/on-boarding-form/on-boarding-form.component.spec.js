import { async, TestBed } from '@angular/core/testing';
import { OnBoardingFormComponent } from './on-boarding-form.component';
describe('OnBoardingFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [OnBoardingFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(OnBoardingFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=on-boarding-form.component.spec.js.map