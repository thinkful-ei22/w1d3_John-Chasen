const studentData = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology',
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics',
    },
    {
      name: 'Liz',
      status: 'On leave',
      course: 'Computer science',
    },
  ];
  
  function enrollInSummerSchool(students) {
    return students.map(student => {
      return {
        name: student.name,
        course: student.course,
        status: 'In Summer school'
      };
    });
      
  }
  console.log(enrollInSummerSchool(studentData));