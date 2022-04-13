function getUserRole(name,role){
    switch (role) {
        case "admin":
            return `${name} is admin with full access .`;
        case "subadmin":
            return `${name} is subadmin and has access to add and delete courses` ;  
        case "testprep":
            return `${name} is testprep and has access to add and delete tests` ;  
        case "user":
             return `${name} is user and has access to consume courses` ;  
                           
    
        default:
            return `${name} is a trial user .` ;  
    }
}

console.log(getUserRole("Ansh","admin"));