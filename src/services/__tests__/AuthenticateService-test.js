import * as authService from '../AuthenticateService';

test('authenticate service', () => {
	authService.authenticate();
	expect(authService.authenticate()).toBeCalled();

});