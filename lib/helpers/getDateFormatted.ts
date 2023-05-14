function getDateFormatted(date: string | number) {
  const newDate = new Date(date);
  const dateFormatted = newDate.toISOString().slice(0, 10);
  return dateFormatted;
}
export { getDateFormatted };
