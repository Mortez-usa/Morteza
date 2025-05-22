export const formatFullDate = (date: Date) => {
	return date.toLocaleDateString('en-US', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	});
};
