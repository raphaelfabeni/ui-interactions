module.exports = `
@-moz-keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
@-webkit-keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
@-o-keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
@keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
.ui-loading-03 {
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
.ui-loading-03:before {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  content: '';
  background-color: #2980b9;
  transform: translateX(-100%);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.1s 0.3s;
}
.ui-loading-03:after {
  content: '';
  border: solid 2px #fff;
  border-left-color: transparent;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  margin-top: -8px;
  margin-left: -8px;
  opacity: 0;
  transition: opacity 0.2s 0.1s ease;
}
.ui-loading-03.is-active:before {
  transition: opacity 0.3s ease;
  transform: translateX(0);
  opacity: 1;
}
.ui-loading-03.is-active:after {
  animation: rotation 0.5s infinite linear;
  opacity: 1;
}

`
