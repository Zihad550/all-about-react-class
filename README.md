# Lesson - 3

- this keyword: Normal function changes the this keyword in a callback function. But arrow function does not changes the this keyword. \

  - [this keyword in Bangla](https://www.youtube.com/watch?v=uZqyRJkTQog)
  - [About Arrow function and this keyword in arrow function](https://www.youtube.com/watch?v=UwrmEUCaAIY)
  - [JavaScript Prototype Inheritance & ES6 class](https://www.youtube.com/watch?v=93Styj1K9fY) \

- To solve this confusion on function:
  You can use arrow function because they don't update the this keyword. You can use bind after the function. Or simply store this into a function and call the function. \
  Examples:

  - ```
    // first step you can store the this key word in a variable
      const javascript = {
        name: "JavaScript",
        libraries: ["React", "Vue", "Angular"],
        printLibraries: function(){

          let self = this;
          this.libraries.forEach(function(library){
            console.log(`${self.name} loves ${library}`)
          })
        }
      }
    ```

  - ```
    // you can use the bind() method to solve this problem
      const javascript = {
        name: "JavaScript",
        libraries: ["React", "Vue", "Angular"],
        printLibraries: function(){

          this.libraries.forEach(function(library){
            console.log(`${self.name} loves ${library}`)
          }.bind(this))
        }
      }
    ```

  - ```
    // you can simply use the arrow function to solve this
      const javascript = {
        name: "JavaScript",
        libraries: ["React", "Vue", "Angular"],
        printLibraries: function(){

          this.libraries.forEach(library => {
            console.log(`${this.name} loves ${library}`)
          })
        }
      }
    ```
