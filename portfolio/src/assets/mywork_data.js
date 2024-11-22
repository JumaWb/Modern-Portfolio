import spacefy_img from '../assets/spacefy.jpeg';
import blogify_img from '../assets/blogify.jpeg';
import aquafix_img from '../assets/aquafix.jpeg';
import pygame_img from '../assets/pygame.jpeg';
import login_auth_img from '../assets/login.jpeg';
import django_level2_img from '../assets/authentication.jpeg';
import cabacc_wheels_img from '../assets/cabacc.jpeg';

const mywork_data = [
  {
    w_no: 1,
    w_name: "Spacefy",
    w_img: spacefy_img, // Directly referencing the imported variable
    w_desc: "Spacefy is a website for allowing users to find and book spaces for various needs, as well as for space owners to list their properties for rent..."
  },
  {
    w_no: 2,
    w_name: "Blogify",
    w_img: blogify_img,
    w_desc: "Blogify is a platform for creating and sharing blogs, allowing users to post, edit, and engage with various content in a user-friendly interface..."
  },
  {
    w_no: 3,
    w_name: "AquaFix",
    w_img: aquafix_img,
    w_desc: "AquaFix connects users with plumbers in their location, providing a streamlined platform for scheduling services and verifying professional credibility..."
  },
  {
    w_no: 4,
    w_name: "PyGame",
    w_img: pygame_img,
    w_desc: "PyGame is an interactive web application featuring random Python programming questions for users to test their coding skills and knowledge..."
  },
  {
    w_no: 5,
    w_name: "Login Authentication System",
    w_img: login_auth_img,
    w_desc: "A secure login authentication system built for web applications, featuring user registration, password encryption, and multi-factor authentication..."
  },
  {
    w_no: 6,
    w_name: "Django Level 2",
    w_img: django_level2_img,
    w_desc: "A project showcasing advanced Django features, including dynamic forms, authentication systems, and database integration for web applications..."
  },
  {
    w_no: 7,
    w_name: "CABACC Wheels",
    w_img: cabacc_wheels_img,
    w_desc: "CABACC Wheels is an e-commerce website for selling cars, providing a platform for users to browse, compare, and purchase vehicles with ease..."
  }
];

export default mywork_data;
