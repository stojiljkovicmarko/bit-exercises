// Write a function that creates an object that represents a project. 
// Each project is described by: description,  programming language, 
// git repository, boolean status that says if the project is in development 
// or not. Add a method that prints out the project's repository,  
// a method that checks if the project is written in JavaScript 
// as well as a method that checks if the project is in development or not.

(function () {
    // var project = {
    //     description: "This is the description of a project",
    //     programingLanguage: "JavaScript",
    //     gitRepo: "http://github.com/programer/first-project",
    //     status: true,

    // }

    function createProject(description, programingLanguage, gitRepo, status) {
        var obj = {
            description: description,
            programingLanguage: programingLanguage,
            gitRepo: gitRepo,
            devStatus: status,
            printRepo: function () {
                return object.gitRepo;
            }
        };

        return obj;
    }

    var project1 = createProject("This is something", "JavaScript", "http://github.com/programer/first-project", true);
    var project2 = createProject("New project", "Java", "", false);
    console.log(project1);
    console.log(project2);
})();