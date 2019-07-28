module.exports = `
.ui-toggle-04 {
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
.ui-toggle-04:before {
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  transition: transform 0.35s ease;
  z-index: -1;
  background-color: #2980b9;
}
.ui-toggle-04.is-active {
  color: #fff;
}
.ui-toggle-04:before {
  transform: translateY(100%);
}
.ui-toggle-04.is-active:before {
  transform: translateY(0);
}

`
