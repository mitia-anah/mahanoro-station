export function myAccount(account) {
	console.log(account);
	return {
		type: 'USER_ACCOUNT',
		payload: account
	};
}
