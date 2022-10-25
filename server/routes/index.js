/* File Name: index.js
Name: Husna Bakhshi
Id: 301194192
Date: 23 October 2022
*/
let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.displayHomepage);

/* GET home page. */
router.get("/home", indexController.displayHomepage);

/* GET About Us page. */
router.get("/about", indexController.displayaboutpage);

/* GET Products page. */
router.get("/projects", indexController.displayprojectspage);

/* GET Services page. */
router.get("/services", indexController.displayservicespage);

/* GET Contact Us page. */
router.get("/contact", indexController.displayContactpage);

/* POST contact us page and redirect to home page */
router.post("/contact", indexController.submitContactpage);
// router.post('/contact', (req, res) => {
//     console.log(req.body);      
//     res.render('index', { title: 'Home'});
//   });

/* GET Route for displaying the Login page */
router.get("/login", indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post("/login", indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get("/register", indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post("/register", indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get("/logout", indexController.performLogout);

module.exports = router;

