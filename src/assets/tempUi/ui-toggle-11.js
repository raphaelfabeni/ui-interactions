module.exports = `
.ui-toggle-11 {
  padding: 15px 25px;
  color: #2980b9;
  cursor: pointer;
  border: solid 1px #2980b9;
  font-size: 16px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: color 0.3s ease;
}
.ui-toggle-11:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  transition: transform 0.35s ease;
  z-index: -1;
  background-color: #2980b9;
  right: -1px;
  top: 0;
  transform-origin: top right;
  transform: rotate(-90deg);
}
.ui-toggle-11.is-active {
  color: #fff;
}
.ui-toggle-11.is-active:before {
  transform: rotate(0);
}

`
