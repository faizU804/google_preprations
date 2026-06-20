age = Number(age)
if(isNan(age)){
votable = "Enter your proper number"
} 
else 
    {
        votable = (age < 18) ? "Too young not eligable" : "old enough"
    }