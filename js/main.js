const teamInfo =    [ 
                        {
                            'name':'Wayne Barnett',
                            'role':'Founder & CEO',
                            'pict':'wayne - barnett - founder - ceo.jpg'
                        },
                        {
                            'name':'Angela Caroll',
                            'role':'Chief Editor',
                            'pict':'angela - caroll - chief - editor.jpg'
                        },
                        {
                            'name':'Walter Gordon',
                            'role':'Office Manager',
                            'pict':'walter - gordon - office - manager.jpg'
                        },
                        {
                            'name':'Angela Lopez',
                            'role':'Social Media Manager',
                            'pict':'angela - lopez - social - media - manager.jpg'
                        },
                        {
                            'name':'Scott Estrada',
                            'role':'Developer',
                            'pict':'scott - estrada - developer.jpg'
                        },
                        {
                            'name':'Barbara Ramos',
                            'role':'Graphic Designer',
                            'pict':'barbara - ramos - graphic - designer.jpg'
                        }
                    ];

// Array oggetti
for (let i = 0; i < teamInfo.length; i++) {
    console.log(teamInfo[i]);
}
// Info team estese
for (let key in teamInfo) {
    console.log('Name:' + ' ' + teamInfo[key].name);
    console.log('Role:' + ' ' + teamInfo[key].role);
    console.log('Picture:' + ' ' + teamInfo[key].pict);
    console.log('-----------------------------------');
}
