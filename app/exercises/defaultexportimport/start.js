/**
 *                  **** Sorry for the length! It is shorter than it appears! *****
 *
 *
 * Exercise 3!
 * importing exporting default modules.
 *
 *
 * exercise 2 went over the import syntax but didn't describe what is being imported from a
 * ES2015 module.
 *
 * import <name> from <path>;
 *
 * <name> is assigned to the "default" export from a es2015 module. In order to understand
 * what this means, we have to talk about the export statement.
 *
 * export default syntax is described as the following:
 *
 *
 *    export default <expression>;
 *
 *
 * export: keyword used
 * default: keyword to indicate its the default item to import.
 * <expression>: This can be a variable, function, primitive, object, any legal expression in JS.
 *
 * Examples:
 *  //**** module exampleA.js ****
 *  //pretend getGroups, getUsers, getThreads are functions
 *
 *  export default {
 *    getGroups: getGroups,
 *    getUsers: getUsers,
 *    getThreads: getThreads
 *  };
 *
 *  //**** module exampleB.js importing A ****
 *  import moduleA from './exampleA';
 *
 *  moduleA.getGroups();
 *
 *
 * OR:
 *
 *  //module exampleA.js
 *  export default function lightboxStart() {
 *    //run code
 *  }
 *
 *  //module exampleB.js importing A
 *  import startLightBox from './exampleA';
 *
 *  startLightBox();
 *
 * The reasoning for a default export is because there are multiple ways to import items in ES2015.
 * If as a developer, we wanted an all encompassing way to export items (similar to AMD), then this
 * would be a perfect use.  With the next tutorial, we will get into import/export individual items.
 *
 *
 * Task:
 *  1) import fillInBox.js using default import syntax.
 *
 *  2) fix fillInBox so that it exports an expression using the default keyword.
 *   - Take liberty in however you want to solve this as long as you use the keyword 'default'.
 *
 *  3) ** This is a dumb optional challenge ** - There is a css class that will stripe the third color box,
 *     Create a module that contains a function called 'addStripes'. That function will accept an element,
 *     and add a className 'striped'. Add striped to the DOM element '.three'.
 *
 *     Ex:   import striped from './addStripesToThree';
 *           var $three = $('.three');
 *           striped.addStripes($three); // then the magic happens
 */