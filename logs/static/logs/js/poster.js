submit = document.getElementById("poster")


function add(form){
    let name=form.name.value;
    let phone_number=form.phone_number.value;

    if (name== null || name=='' || phone_number==null ||phone_number==''){
        alert("Fill in the details!");
        return false;
    };

    const data={
        'name':name,
        'phone_number': phone_number
    };

    const options={
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },

        body: JSON.stringify(data)

    }
    fetch('http://localhost:8000/logs/add/call',options)

    form.name.value="";
    form.phone_number.value="";
    return false;
}