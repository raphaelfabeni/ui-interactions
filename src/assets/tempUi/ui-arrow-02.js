module.exports = `
.ui-arrow-02 {
  position: relative;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  transition: transform 0.3s ease;
}
.ui-arrow-02:before,
.ui-arrow-02:after {
  content: '';
  background-color: #2980b9;
  position: absolute;
  top: 50%;
  width: 1px;
  height: calc(70% - 1px);
  margin-top: -35%;
}
.ui-arrow-02:before {
  left: 50%;
  margin-left: -25%;
  transform: rotate(-45deg);
}
.ui-arrow-02:after {
  right: 50%;
  margin-right: -25%;
  transform: rotate(45deg);
}
.ui-arrow-02.is-active {
  transform: rotate(-180deg);
}

`
