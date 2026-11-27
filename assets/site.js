
document.getElementById('year').textContent=new Date().getFullYear();
function cardSearch(){let v=document.getElementById('cardNo').value.trim();document.getElementById('cardOut').textContent=!v?'Enter a sample number.':v.endsWith('2')?'Fictional demo match: Active':'No fictional demo record found.'}
function posAssign(){let v=document.getElementById('merchant').value.trim();document.getElementById('posOut').textContent=v?'Fictional terminal assigned to '+v+'.':'Enter a merchant name.'}
function patientAdd(){let v=document.getElementById('patient').value.trim();document.getElementById('patientOut').textContent=v?'Fictional patient record added: '+v+'.':'Enter a sample name.'}
function courseEnroll(){document.getElementById('courseOut').textContent='Demo enrollment: '+document.getElementById('course').value+'.'}
