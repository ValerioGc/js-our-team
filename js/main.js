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

// Aggiunta oggetti al DOM
let domP = document.getElementById('message');
let list = document.createElement('p');

for (let i = 0; i < teamInfo.length; i++) {
// for (let key in teamInfo) {
    list.innerHTML += 'Name:' + ' ' + teamInfo[i]/*[key]*/.name;
    list.innerHTML += '<br>';
    list.innerHTML += 'Role:' + ' ' + teamInfo[i]/*[key]*/.role;
    list.innerHTML += '<br>';
    list.innerHTML += 'Picture:' + ' ' + teamInfo[i]/*[key]*/.pict;
    list.innerHTML += '<br>';
    list.innerHTML += '---------------------------------------------- <br>';
}
domP.append(list);
///////////  Array oggetti ///////////////
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