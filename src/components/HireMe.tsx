import "./HireMe.css";
import Pic from "./assets/Profile_Pic.jpg";

const HireMe = () => {
  return (
    <div className="HireMe">
      <h1>About the Developer</h1>
      <img src={Pic} alt="Big Steve" className="profile-pic" />
      <div className="grid-box">
        <div className="hire-me-story">
          <h2>
            Hi, my name is Steve Anderson and I'm a mortgage junkie making his
            way into tech!
          </h2>
          <p>
            Thank you for visiting my site. My name is Steve Anderson and I'm a
            recent grad of the JavaScript Full Stack Bootcamp at Grand Circus.
          </p>
          <p>
            I'm the guy that always said "I should get into coding, I think I
            would really like it!" but then never did. As of April I'm finally
            making the leap.
          </p>
          <p>
            Prior to attending Grand Circus I wore many hats. I was a high
            school history teacher, football coach, I slung mortgages, taught
            and trained others how to sling mortgages, analyzed how well those
            mortgages were being sold, and managed a workforce of mortgage
            professionals.
          </p>
          <p>
            While wearing all of those hats I was exposed to the endless sides
            of Tech. I was fortunate enough to learn a little about a lot of
            things including but none of it was enough to start a career.
          </p>
          <p>
            Then in the summer of 2018 I was placed with a Dev team tasked with
            building a new Workforce Management tool for my team to use. It was
            amazing what they could do with my ridiculous wishlist. I would
            provide my feedback during daily stand-ups and six hours later they
            would have something for me to test. That's when I decided that this
            is what I want to be when I finally grow up.
          </p>
          <p>
            I am good at solving problems and now I'm going to build the
            solutions. My dream career lets me look back and reflect on the
            challenges I've solved and the things I built to overcome them.
          </p>
          <p>
            If you're looking for a developer with a passion to learn that comes
            with a decade of experience working with all types of people, please
            reach out to me below!
          </p>
          <nav className="hire-me-nav">
            <ul>LinkedIn</ul>
            <ul>Email</ul>
          </nav>
        </div>
        <div className="mini-resume">
          <h2>Education</h2>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
