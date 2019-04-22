
export class Init {
    load() {
      if(localStorage.getItem('students') === null || localStorage.getItem('students') == undefined) {
        console.log('No students Found... Creating...');
        let students = [
          {
            id:1,
            name: 'Student1',
            category: 'Domestic',
            dob: new Date(),
            fatherName: 'Ram',
            motherName: 'Leela',
            score: 99
          }, 
          {
            id:2,
            name: 'Student 2',
            category: 'Domestic',
            dob: new Date(),
            fatherName: 'Ram',
            motherName: 'Sita',
            score: 99
          }, 
          {
            id:3,
            name: 'Student3',
            category: 'Domestic',
            dob: new Date(),
            fatherName: 'Lakman',
            motherName: 'Reeta',
            score: 99
          },
          {
            id:4,
            name: 'Student4',
            category: 'International',
            dob: new Date(),
            fatherName: 'Lakman',
            motherName: 'Reeta',
            score: 99
          }
        ];
  
        localStorage.setItem('students', JSON.stringify(students));
        return 
      } else {
        console.log('Found Students...');
      }
    }
  }