function makeStudentsReport(data) {
  return data.map(student => `${student.name}: ${student.grade}`);
}