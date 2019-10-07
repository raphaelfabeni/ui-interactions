module.exports = `
.ui-toggle-16 {
  padding: 15px 25px;
  color: #2980b9;
  cursor: pointer;
  border: solid 1px #2980b9;
  font-size: 16px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: color 0.3s ease;
  transform-origin: center top;
}
.ui-toggle-16:before {
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
.ui-toggle-16.is-active {
  color: #fff;
}
.ui-toggle-16:before {
  transform: translateY(-100%);
  transform-origin: center top;
}
.ui-toggle-16.is-active {
  animation: cartoon-container 500ms ease-out forwards;
}
.ui-toggle-16.is-active:before {
  animation: cartoon-before 450ms 390ms ease-out forwards;
}
@-moz-keyframes cartoon-container {
  0% {
    transform: scale(1, 1);
    color: #2980b9;
  }
  50% {
    transform: scale(1, 0.6);
  }
  80% {
    transform: scale(1, 1.4);
    color: #2980b9;
  }
  100% {
    transform: scale(1, 1);
    color: #fff;
  }
}
@-webkit-keyframes cartoon-container {
  0% {
    transform: scale(1, 1);
    color: #2980b9;
  }
  50% {
    transform: scale(1, 0.6);
  }
  80% {
    transform: scale(1, 1.4);
    color: #2980b9;
  }
  100% {
    transform: scale(1, 1);
    color: #fff;
  }
}
@-o-keyframes cartoon-container {
  0% {
    transform: scale(1, 1);
    color: #2980b9;
  }
  50% {
    transform: scale(1, 0.6);
  }
  80% {
    transform: scale(1, 1.4);
    color: #2980b9;
  }
  100% {
    transform: scale(1, 1);
    color: #fff;
  }
}
@keyframes cartoon-container {
  0% {
    transform: scale(1, 1);
    color: #2980b9;
  }
  50% {
    transform: scale(1, 0.6);
  }
  80% {
    transform: scale(1, 1.4);
    color: #2980b9;
  }
  100% {
    transform: scale(1, 1);
    color: #fff;
  }
}
@-moz-keyframes cartoon-before {
  0% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(30%);
  }
  80% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
}
@-webkit-keyframes cartoon-before {
  0% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(30%);
  }
  80% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
}
@-o-keyframes cartoon-before {
  0% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(30%);
  }
  80% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes cartoon-before {
  0% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(30%);
  }
  80% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
}

`
