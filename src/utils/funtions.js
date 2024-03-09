export const FormatDate = (date) => {
	const event = new Date(date);
	const newDate = event.toLocaleString("es-ES", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});
	return newDate;
};

export const FormatDateWithoutYear = (date) => {
	const event = new Date(date);
	const newDate = event
		.toLocaleString("es-ES", {
			day: "2-digit",
			month: "short",
			year: "numeric",
		})
		.slice(0, -4);
	return newDate;
};
