import {colors} from '../variables.js'

export default `
  html, body {
    margin: 0px;
  }
  .gradientBackground {
    background-image: linear-gradient(0deg, #${colors.peach} 0%, #${colors.pink} 100%);
  }
  .pinkBackground {
    background-color: #${colors.pink};
  }
  .peachBackground {
    background-color: #${colors.peach};
  }
  .whiteBackground {
    background-color: #${colors.white};
  }
  .orangeBackground {
    background-color: #${colors.orange};
  }
  .blueBackground {
    background-color: #${colors.blue};
  }
  .greenBackground {
    background-color: #${colors.green};
  }
  .blackBackground {
    background-color: #${colors.black};
  }
  .blackDarkBackground {
    background-color: #${colors.blackDark};
  }
  .greyDarkBackground {
    background-color: #${colors.greyDark};
  }
  .greyBackground {
    background-color: #${colors.grey};
  }
  .greyLightBackground {
    background-color: #${colors.greyLight};
  }


  .pink {
    color: #${colors.pink};
  }
  .peach {
    color: #${colors.peach};
  }
  .white {
    color: #${colors.white};
  }
  .orange {
    color: #${colors.orange};
  }
  .blue {
    color: #${colors.blue};
  }
  .green {
    color: #${colors.green};
  }
  .black {
    color: #${colors.black};
  }
  .blackDark {
    color: #${colors.blackDark};
  }
  .greyDark {
    color: #${colors.greyDark};
  }
  .grey {
    color: #${colors.grey};
  }
  .greyLight {
    color: #${colors.greyLight};
  }
  a,
  a:hover,
  a:active {
    text-decoration: none;
    color: #${colors.blue};
  }
`
