module.exports = `
.ui-arrow-01 {
  position: relative;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
}
.ui-arrow-01:before,
.ui-arrow-01:after {
  content: '';
  background-color: #2980b9;
  position: absolute;
  top: 50%;
  width: 1px;
  height: calc(70% - 1px);
  margin-top: -35%;
}
.ui-arrow-01:before {
  left: 50%;
  margin-left: -25%;
  transform: rotate(-45deg);
}
.ui-arrow-01:after {
  right: 50%;
  margin-right: -25%;
  transform: rotate(45deg);
}
.ui-arrow-01:before,
.ui-arrow-01:after {
  transition: transform 0.34s ease;
}
.ui-arrow-01.is-active:before {
  transform: rotate(45deg);
}
.ui-arrow-01.is-active:after {
  transform: rotate(-45deg);
}

`
