module.exports = `
.ui-hamburger-06 {
  width: 30px;
  height: 26px;
  border: none;
  position: relative;
  cursor: pointer;
}
.ui-hamburger-06:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, #2980b9 50%, transparent 50%);
  background-size: 100% 40%;
  background-repeat-x: no-repeat;
  background-position: 0 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.ui-hamburger-06:after {
  width: 80%;
  height: 90%;
  top: 5%;
  left: 10%;
  content: '';
  position: absolute;
  background: linear-gradient(to right, transparent 40%, #2980b9 40%, #2980b9 60%, transparent 60%), linear-gradient(to bottom, transparent 40%, #2980b9 40%, #2980b9 60%, transparent 60%);
  transform: rotate(45deg) scale(0);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.ui-hamburger-06.is-active:before {
  opacity: 0;
  transform: scale(0);
}
.ui-hamburger-06.is-active:after {
  transform: rotate(45deg) scale(1);
  opacity: 1;
  transition-delay: 0.3s ease;
}

`
