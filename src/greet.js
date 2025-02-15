const date = new Date();
const hour = date.getHours();

function message_hour(){
    var txt;
    if (hour<12)
        txt= "Good morning";
    else if (hour<20)
        txt= "Good afternoon";
    else 
        txt= "Good night";
    return txt;
}

function greet_gender_age(gender,age){
    var pro_noun;
    if (age >= 30){
        if (gender === 'M')
            pro_noun= "gentlemen";
        else if (gender === 'F')
            pro_noun= "lady";
        else 
            pro_noun= "them";
    }
    else{
        if (gender === 'M')
            pro_noun= "boy";
        else if (gender === 'F')
            pro_noun= "girl";
        else 
            pro_noun= "them";
    }

    return pro_noun;
}

function greeting(name, gender,age){
    var message;
    start_message=message_hour(hour);
    pronoun=greet_gender_age(gender,age);
    message = start_message + " " + pronoun + " " + name;
    return message;
}
export default greeting;
