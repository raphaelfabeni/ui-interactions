module.exports = `
.ui-hamburger-05 {
  width: 30px;
  height: 26px;
  border: none;
  position: relative;
  background: linear-gradient(to bottom, #2980b9, #2980b9);
  background-size: 100% 20%;
  background-repeat: no-repeat;
  background-position: center center;
  transition: background-size 0.2s 0.25s ease;
  cursor: pointer;
  transition: background-size 0.3s 0.2s ease;
}
.ui-hamburger-05:before,
.ui-hamburger-05:after {
  height: 20%;
  width: 100%;
  position: absolute;
  left: 0;
  background-color: #2980b9;
  content: '';
  transition: transform 0.3s ease;
}
.ui-hamburger-05:before {
  top: 0;
}
.ui-hamburger-05:after {
  bottom: 0;
}
.ui-hamburger-05:before,
.ui-hamburger-05:after {
  transition: 0.3s ease;
}
.ui-hamburger-05.is-active {
  background-size: 0 0;
}
.ui-hamburger-05.is-active:before,
.ui-hamburger-05.is-active:after {
  transition-delay: 0.3s;
}
.ui-hamburger-05.is-active:before {
  transform: translateY(200%) rotate(45deg);
}
.ui-hamburger-05.is-active:after {
  transform: translateY(-200%) rotate(-45deg);
}

`
