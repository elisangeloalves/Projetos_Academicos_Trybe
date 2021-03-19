new Pikaday({
  field: document.getElementById('datepicker'),
  firstDay: 0,
  maxDate: new Date(),
  toString(date) {
    return moment(date).format('DD / MM / YYYY');
  },
});
