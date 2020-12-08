import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/skills.jpeg'
import pic02 from '../images/silicon_banner.png'
import pic03 from '../images/umass.jpg'


class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Hey there - thanks for clicking around!
          </p>
          <p>
            I'm what people call a software engineer. Basically, I drink coffee, eat snacks, and write code. 
          </p>
          <p>
            I'm familiar with C, C#, C++, Java, R, Javascript, HTML, and CSS.
          </p>
          <p>
            And I'm willing to learn whatever it takes to get things working.
          </p>
          <p>
            I love to chat about the newest tech, so feel free to reach out if you have any questions!
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            I'm currently an intern at Silicon Therapeutics.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
          Hi, my name is Henry Tao, and I'm a junior studying at University of Massachusetts Amherst. I major in computer science with a minor in economics. I've mainly worked with large data, but I also have experience in frontend and backend development. I love working on puzzles, and I'm always willing to learn from others.
          </p>
          <p>
            I've interned at Voya, Impact Chain Labs, and Astrazeneca, and I've learned so much from each one. 
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            Send me an email at henrytao99@gmail.com
          </p>
          <ul className="icons">
            <li>
              <a
                href="./Resume_HenryTao_2020.pdf"
                target = "_ " 
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/henrytao99/" target = "_ " className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ehrny"
                target = "_ " 
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/henrytao99/"
                target = "_ " 
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
