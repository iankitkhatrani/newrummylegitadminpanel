import "../assets/scss/AdminHeader.scss";
import userImage from "../assets/images/user.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  const [togle, setToggle] = useState(false);
  const [menu, setMenu] = useState();

  console.log(menu);
 

  return (
    <div id="admin-header">
      <div className="left">
        <i
          onClick={() => setToggle(true)}
          id="mobile-menu"
          className="bx bx-menu"
        ></i>

        <div className="controls">
          <div className="search">
            <i className="bx bx-search search-icon"></i>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>

      <div className="right">
        <div className="media-links">
          <div className="customize">
            <i className="bx bx-customize"></i>
          </div>

          <div className="sub-link">
            <div className="item">
              <div className="links">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAMAAACR41cYAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJ/UExURUdwTCEgIB8fHyAfHyAfHyAfHyAfHx8eHiAfHx8eHiAfHyAfHyAfHx8eHiAfH5jU5h8eHiAfHyAfHyAfHx8eHh8eHiAfHyAfIAQBAxgWFiEhISEgIAwCACAgIB0bGi40NhkVFCAfH5za8FBncENVXKTm95vZ8Jza8J7c8R0bGhMTEx0cHCAfHyEgH73//yEgIJ7c8QAAAIfF6TM7PwwJCh4cHHm45SAfHyAfH5za8CAfH5za8Jza8Jza8Jza8CAfH5za8G6VokRVWxIKCJza8JvY7pza8DtITTlFSZ3b8AMHCgAABJza8ElBPDA4PFVLRK3z/zEvLRcXGEVBPTA5PJza8AADB5vZ74XD6QIAAIrJ67T+/4HA6BAIByAfH4zK7IrI6zE4O7D5/yAfHwEAACIgIJza8BUWGAACBhoaGvXLsQ0PEZ/g957c8RATFf/oy1p4hfzRticqLIC+6Jrm///jxiMiIvDEq//Xu/bHq//fxG5eVRgXF////P/z0P/22lNHQv/gv//877H5/xcTEhUOC76cicyolCcjIf/avdivlpvY7mZaUQMHC1lNRfrNsPTJr//o0v/cwf3WuHtnXIshF4VuYvTEqfrcyM+oqOrW1PTm4v716zM7PqHf8v/t1SkpJsD//1RueGebxaPn/IXK/TVIV3OapbmXheK0mNuymv/GrdWZhu/Tx+u7pI54adymkf/658+dlMifn+S1mafq+7uhizYvLeLCufLs7/rk1mNVTf/NrtOskqeHd8aXlXFgVv/kwZU1LNW1neK9tJAuJsCMirJwa+nKv9zFx2CRtVuKronG6naszSUnKUZaZG+TmUFPU3agr3GkxIu8xSfH+3sAAABzdFJOUwD97RwqJTMat/4VL6DlCwmSOh2qV77yhGEIms8njIj9+xEk6wESA6CMcwRtUGQlwnjIs9iu9u3fsS5e3hvwhB66hguP9eJfotdT9nPf4o7mPNW62Kc/5MnTMeRzzcTG3/LkYv////////////////////54WQMpAAACTklEQVQYGXXABVMiYRgA4BdYdhkExa5TR8Xuvu7u7v5g2V06XFGxO7C72+vu7s74Qaczd87sIg/85yeUJMMCsUK+FFzIEEISvwSZxF8iSwpEczyBT4L4xMAXhniE4CIQ8QRgwCMWID458PgipEYag0ZD07TGYHCgOcuBI1GIWA3lqEcOrVbrUNdXUzSLfIHDB7EG7fXGi411tRdq6y7dedrl1KjTgGMNop3PSm+WGO35+fkNHSUlpT0U8geO4ABneUX7w9tXWxmGKXzU/7HyyX2tBLhCVT0vh/q7b7W3MW1Fb169H6p4TIXAP1IRQfiIMV/qRUXl8+4HHUwnY//w9l1lZ7kzHBP7EIRICpg3juMemLd2zGwcHOjrLbjB9PYNDI72sgYc88Bx3BsDQiSN9FQCpFDFxrKyVvO1KwXmwtGy0i4qBUDpGSkVEbDA73D5vYIGo/2y3Vhkfl28PQl4NoQABAdl79vV0lzc3LLnwP4dBPB4rbNkwbwM1byMRHAVk7qe3gIAyWpWIBCwKAgWFTS8dfdBQY5cIMsRsv6wuARLhIU+rUBhKCQgFNwIPrYkTR6uVqjD80LBvWxhIFKgsLxT4IYy9XyWJbo6ujo64tyJvbGwiM1H9OM/kalmosb0bXhct2m1F/DExpG6KZPqxy/Vd9XsrGriro5cEQVcUSSp05s+T0XU/HGM6T6Z9DqSjAcur7Vkk77KNjnzu+rrzKStSt9ErloGfOk7yRGr1Tb9ZdpmtY6QG+NWgivlofTMk2dyz+YeP5oZvy0GFvwFlSbPVswTomsAAAAASUVORK5CYII="
                  alt=""
                />
                <span>GitHub</span>
              </div>

              <div className="links">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAMAAACR41cYAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJ/UExURUdwTCEgIB8fHyAfHyAfHyAfHyAfHx8eHiAfHx8eHiAfHyAfHyAfHx8eHiAfH5jU5h8eHiAfHyAfHyAfHx8eHh8eHiAfHyAfIAQBAxgWFiEhISEgIAwCACAgIB0bGi40NhkVFCAfH5za8FBncENVXKTm95vZ8Jza8J7c8R0bGhMTEx0cHCAfHyEgH73//yEgIJ7c8QAAAIfF6TM7PwwJCh4cHHm45SAfHyAfH5za8CAfH5za8Jza8Jza8Jza8CAfH5za8G6VokRVWxIKCJza8JvY7pza8DtITTlFSZ3b8AMHCgAABJza8ElBPDA4PFVLRK3z/zEvLRcXGEVBPTA5PJza8AADB5vZ74XD6QIAAIrJ67T+/4HA6BAIByAfH4zK7IrI6zE4O7D5/yAfHwEAACIgIJza8BUWGAACBhoaGvXLsQ0PEZ/g957c8RATFf/oy1p4hfzRticqLIC+6Jrm///jxiMiIvDEq//Xu/bHq//fxG5eVRgXF////P/z0P/22lNHQv/gv//877H5/xcTEhUOC76cicyolCcjIf/avdivlpvY7mZaUQMHC1lNRfrNsPTJr//o0v/cwf3WuHtnXIshF4VuYvTEqfrcyM+oqOrW1PTm4v716zM7PqHf8v/t1SkpJsD//1RueGebxaPn/IXK/TVIV3OapbmXheK0mNuymv/GrdWZhu/Tx+u7pI54adymkf/658+dlMifn+S1mafq+7uhizYvLeLCufLs7/rk1mNVTf/NrtOskqeHd8aXlXFgVv/kwZU1LNW1neK9tJAuJsCMirJwa+nKv9zFx2CRtVuKronG6naszSUnKUZaZG+TmUFPU3agr3GkxIu8xSfH+3sAAABzdFJOUwD97RwqJTMat/4VL6DlCwmSOh2qV77yhGEIms8njIj9+xEk6wESA6CMcwRtUGQlwnjIs9iu9u3fsS5e3hvwhB66hguP9eJfotdT9nPf4o7mPNW62Kc/5MnTMeRzzcTG3/LkYv////////////////////54WQMpAAACTklEQVQYGXXABVMiYRgA4BdYdhkExa5TR8Xuvu7u7v5g2V06XFGxO7C72+vu7s74Qaczd87sIg/85yeUJMMCsUK+FFzIEEISvwSZxF8iSwpEczyBT4L4xMAXhniE4CIQ8QRgwCMWID458PgipEYag0ZD07TGYHCgOcuBI1GIWA3lqEcOrVbrUNdXUzSLfIHDB7EG7fXGi411tRdq6y7dedrl1KjTgGMNop3PSm+WGO35+fkNHSUlpT0U8geO4ABneUX7w9tXWxmGKXzU/7HyyX2tBLhCVT0vh/q7b7W3MW1Fb169H6p4TIXAP1IRQfiIMV/qRUXl8+4HHUwnY//w9l1lZ7kzHBP7EIRICpg3juMemLd2zGwcHOjrLbjB9PYNDI72sgYc88Bx3BsDQiSN9FQCpFDFxrKyVvO1KwXmwtGy0i4qBUDpGSkVEbDA73D5vYIGo/2y3Vhkfl28PQl4NoQABAdl79vV0lzc3LLnwP4dBPB4rbNkwbwM1byMRHAVk7qe3gIAyWpWIBCwKAgWFTS8dfdBQY5cIMsRsv6wuARLhIU+rUBhKCQgFNwIPrYkTR6uVqjD80LBvWxhIFKgsLxT4IYy9XyWJbo6ujo64tyJvbGwiM1H9OM/kalmosb0bXhct2m1F/DExpG6KZPqxy/Vd9XsrGriro5cEQVcUSSp05s+T0XU/HGM6T6Z9DqSjAcur7Vkk77KNjnzu+rrzKStSt9ErloGfOk7yRGr1Tb9ZdpmtY6QG+NWgivlofTMk2dyz+YeP5oZvy0GFvwFlSbPVswTomsAAAAASUVORK5CYII="
                  alt=""
                />
                <span>GitHub</span>
              </div>

              <div className="links">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAMAAACR41cYAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJ/UExURUdwTCEgIB8fHyAfHyAfHyAfHyAfHx8eHiAfHx8eHiAfHyAfHyAfHx8eHiAfH5jU5h8eHiAfHyAfHyAfHx8eHh8eHiAfHyAfIAQBAxgWFiEhISEgIAwCACAgIB0bGi40NhkVFCAfH5za8FBncENVXKTm95vZ8Jza8J7c8R0bGhMTEx0cHCAfHyEgH73//yEgIJ7c8QAAAIfF6TM7PwwJCh4cHHm45SAfHyAfH5za8CAfH5za8Jza8Jza8Jza8CAfH5za8G6VokRVWxIKCJza8JvY7pza8DtITTlFSZ3b8AMHCgAABJza8ElBPDA4PFVLRK3z/zEvLRcXGEVBPTA5PJza8AADB5vZ74XD6QIAAIrJ67T+/4HA6BAIByAfH4zK7IrI6zE4O7D5/yAfHwEAACIgIJza8BUWGAACBhoaGvXLsQ0PEZ/g957c8RATFf/oy1p4hfzRticqLIC+6Jrm///jxiMiIvDEq//Xu/bHq//fxG5eVRgXF////P/z0P/22lNHQv/gv//877H5/xcTEhUOC76cicyolCcjIf/avdivlpvY7mZaUQMHC1lNRfrNsPTJr//o0v/cwf3WuHtnXIshF4VuYvTEqfrcyM+oqOrW1PTm4v716zM7PqHf8v/t1SkpJsD//1RueGebxaPn/IXK/TVIV3OapbmXheK0mNuymv/GrdWZhu/Tx+u7pI54adymkf/658+dlMifn+S1mafq+7uhizYvLeLCufLs7/rk1mNVTf/NrtOskqeHd8aXlXFgVv/kwZU1LNW1neK9tJAuJsCMirJwa+nKv9zFx2CRtVuKronG6naszSUnKUZaZG+TmUFPU3agr3GkxIu8xSfH+3sAAABzdFJOUwD97RwqJTMat/4VL6DlCwmSOh2qV77yhGEIms8njIj9+xEk6wESA6CMcwRtUGQlwnjIs9iu9u3fsS5e3hvwhB66hguP9eJfotdT9nPf4o7mPNW62Kc/5MnTMeRzzcTG3/LkYv////////////////////54WQMpAAACTklEQVQYGXXABVMiYRgA4BdYdhkExa5TR8Xuvu7u7v5g2V06XFGxO7C72+vu7s74Qaczd87sIg/85yeUJMMCsUK+FFzIEEISvwSZxF8iSwpEczyBT4L4xMAXhniE4CIQ8QRgwCMWID458PgipEYag0ZD07TGYHCgOcuBI1GIWA3lqEcOrVbrUNdXUzSLfIHDB7EG7fXGi411tRdq6y7dedrl1KjTgGMNop3PSm+WGO35+fkNHSUlpT0U8geO4ABneUX7w9tXWxmGKXzU/7HyyX2tBLhCVT0vh/q7b7W3MW1Fb169H6p4TIXAP1IRQfiIMV/qRUXl8+4HHUwnY//w9l1lZ7kzHBP7EIRICpg3juMemLd2zGwcHOjrLbjB9PYNDI72sgYc88Bx3BsDQiSN9FQCpFDFxrKyVvO1KwXmwtGy0i4qBUDpGSkVEbDA73D5vYIGo/2y3Vhkfl28PQl4NoQABAdl79vV0lzc3LLnwP4dBPB4rbNkwbwM1byMRHAVk7qe3gIAyWpWIBCwKAgWFTS8dfdBQY5cIMsRsv6wuARLhIU+rUBhKCQgFNwIPrYkTR6uVqjD80LBvWxhIFKgsLxT4IYy9XyWJbo6ujo64tyJvbGwiM1H9OM/kalmosb0bXhct2m1F/DExpG6KZPqxy/Vd9XsrGriro5cEQVcUSSp05s+T0XU/HGM6T6Z9DqSjAcur7Vkk77KNjnzu+rrzKStSt9ErloGfOk7yRGr1Tb9ZdpmtY6QG+NWgivlofTMk2dyz+YeP5oZvy0GFvwFlSbPVswTomsAAAAASUVORK5CYII="
                  alt=""
                />
                <span>GitHub</span>
              </div>
              <div className="links">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAMAAACR41cYAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJ/UExURUdwTCEgIB8fHyAfHyAfHyAfHyAfHx8eHiAfHx8eHiAfHyAfHyAfHx8eHiAfH5jU5h8eHiAfHyAfHyAfHx8eHh8eHiAfHyAfIAQBAxgWFiEhISEgIAwCACAgIB0bGi40NhkVFCAfH5za8FBncENVXKTm95vZ8Jza8J7c8R0bGhMTEx0cHCAfHyEgH73//yEgIJ7c8QAAAIfF6TM7PwwJCh4cHHm45SAfHyAfH5za8CAfH5za8Jza8Jza8Jza8CAfH5za8G6VokRVWxIKCJza8JvY7pza8DtITTlFSZ3b8AMHCgAABJza8ElBPDA4PFVLRK3z/zEvLRcXGEVBPTA5PJza8AADB5vZ74XD6QIAAIrJ67T+/4HA6BAIByAfH4zK7IrI6zE4O7D5/yAfHwEAACIgIJza8BUWGAACBhoaGvXLsQ0PEZ/g957c8RATFf/oy1p4hfzRticqLIC+6Jrm///jxiMiIvDEq//Xu/bHq//fxG5eVRgXF////P/z0P/22lNHQv/gv//877H5/xcTEhUOC76cicyolCcjIf/avdivlpvY7mZaUQMHC1lNRfrNsPTJr//o0v/cwf3WuHtnXIshF4VuYvTEqfrcyM+oqOrW1PTm4v716zM7PqHf8v/t1SkpJsD//1RueGebxaPn/IXK/TVIV3OapbmXheK0mNuymv/GrdWZhu/Tx+u7pI54adymkf/658+dlMifn+S1mafq+7uhizYvLeLCufLs7/rk1mNVTf/NrtOskqeHd8aXlXFgVv/kwZU1LNW1neK9tJAuJsCMirJwa+nKv9zFx2CRtVuKronG6naszSUnKUZaZG+TmUFPU3agr3GkxIu8xSfH+3sAAABzdFJOUwD97RwqJTMat/4VL6DlCwmSOh2qV77yhGEIms8njIj9+xEk6wESA6CMcwRtUGQlwnjIs9iu9u3fsS5e3hvwhB66hguP9eJfotdT9nPf4o7mPNW62Kc/5MnTMeRzzcTG3/LkYv////////////////////54WQMpAAACTklEQVQYGXXABVMiYRgA4BdYdhkExa5TR8Xuvu7u7v5g2V06XFGxO7C72+vu7s74Qaczd87sIg/85yeUJMMCsUK+FFzIEEISvwSZxF8iSwpEczyBT4L4xMAXhniE4CIQ8QRgwCMWID458PgipEYag0ZD07TGYHCgOcuBI1GIWA3lqEcOrVbrUNdXUzSLfIHDB7EG7fXGi411tRdq6y7dedrl1KjTgGMNop3PSm+WGO35+fkNHSUlpT0U8geO4ABneUX7w9tXWxmGKXzU/7HyyX2tBLhCVT0vh/q7b7W3MW1Fb169H6p4TIXAP1IRQfiIMV/qRUXl8+4HHUwnY//w9l1lZ7kzHBP7EIRICpg3juMemLd2zGwcHOjrLbjB9PYNDI72sgYc88Bx3BsDQiSN9FQCpFDFxrKyVvO1KwXmwtGy0i4qBUDpGSkVEbDA73D5vYIGo/2y3Vhkfl28PQl4NoQABAdl79vV0lzc3LLnwP4dBPB4rbNkwbwM1byMRHAVk7qe3gIAyWpWIBCwKAgWFTS8dfdBQY5cIMsRsv6wuARLhIU+rUBhKCQgFNwIPrYkTR6uVqjD80LBvWxhIFKgsLxT4IYy9XyWJbo6ujo64tyJvbGwiM1H9OM/kalmosb0bXhct2m1F/DExpG6KZPqxy/Vd9XsrGriro5cEQVcUSSp05s+T0XU/HGM6T6Z9DqSjAcur7Vkk77KNjnzu+rrzKStSt9ErloGfOk7yRGr1Tb9ZdpmtY6QG+NWgivlofTMk2dyz+YeP5oZvy0GFvwFlSbPVswTomsAAAAASUVORK5CYII="
                  alt=""
                />
                <span>GitHub</span>
              </div>
              <div className="links">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAMAAACR41cYAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJ/UExURUdwTCEgIB8fHyAfHyAfHyAfHyAfHx8eHiAfHx8eHiAfHyAfHyAfHx8eHiAfH5jU5h8eHiAfHyAfHyAfHx8eHh8eHiAfHyAfIAQBAxgWFiEhISEgIAwCACAgIB0bGi40NhkVFCAfH5za8FBncENVXKTm95vZ8Jza8J7c8R0bGhMTEx0cHCAfHyEgH73//yEgIJ7c8QAAAIfF6TM7PwwJCh4cHHm45SAfHyAfH5za8CAfH5za8Jza8Jza8Jza8CAfH5za8G6VokRVWxIKCJza8JvY7pza8DtITTlFSZ3b8AMHCgAABJza8ElBPDA4PFVLRK3z/zEvLRcXGEVBPTA5PJza8AADB5vZ74XD6QIAAIrJ67T+/4HA6BAIByAfH4zK7IrI6zE4O7D5/yAfHwEAACIgIJza8BUWGAACBhoaGvXLsQ0PEZ/g957c8RATFf/oy1p4hfzRticqLIC+6Jrm///jxiMiIvDEq//Xu/bHq//fxG5eVRgXF////P/z0P/22lNHQv/gv//877H5/xcTEhUOC76cicyolCcjIf/avdivlpvY7mZaUQMHC1lNRfrNsPTJr//o0v/cwf3WuHtnXIshF4VuYvTEqfrcyM+oqOrW1PTm4v716zM7PqHf8v/t1SkpJsD//1RueGebxaPn/IXK/TVIV3OapbmXheK0mNuymv/GrdWZhu/Tx+u7pI54adymkf/658+dlMifn+S1mafq+7uhizYvLeLCufLs7/rk1mNVTf/NrtOskqeHd8aXlXFgVv/kwZU1LNW1neK9tJAuJsCMirJwa+nKv9zFx2CRtVuKronG6naszSUnKUZaZG+TmUFPU3agr3GkxIu8xSfH+3sAAABzdFJOUwD97RwqJTMat/4VL6DlCwmSOh2qV77yhGEIms8njIj9+xEk6wESA6CMcwRtUGQlwnjIs9iu9u3fsS5e3hvwhB66hguP9eJfotdT9nPf4o7mPNW62Kc/5MnTMeRzzcTG3/LkYv////////////////////54WQMpAAACTklEQVQYGXXABVMiYRgA4BdYdhkExa5TR8Xuvu7u7v5g2V06XFGxO7C72+vu7s74Qaczd87sIg/85yeUJMMCsUK+FFzIEEISvwSZxF8iSwpEczyBT4L4xMAXhniE4CIQ8QRgwCMWID458PgipEYag0ZD07TGYHCgOcuBI1GIWA3lqEcOrVbrUNdXUzSLfIHDB7EG7fXGi411tRdq6y7dedrl1KjTgGMNop3PSm+WGO35+fkNHSUlpT0U8geO4ABneUX7w9tXWxmGKXzU/7HyyX2tBLhCVT0vh/q7b7W3MW1Fb169H6p4TIXAP1IRQfiIMV/qRUXl8+4HHUwnY//w9l1lZ7kzHBP7EIRICpg3juMemLd2zGwcHOjrLbjB9PYNDI72sgYc88Bx3BsDQiSN9FQCpFDFxrKyVvO1KwXmwtGy0i4qBUDpGSkVEbDA73D5vYIGo/2y3Vhkfl28PQl4NoQABAdl79vV0lzc3LLnwP4dBPB4rbNkwbwM1byMRHAVk7qe3gIAyWpWIBCwKAgWFTS8dfdBQY5cIMsRsv6wuARLhIU+rUBhKCQgFNwIPrYkTR6uVqjD80LBvWxhIFKgsLxT4IYy9XyWJbo6ujo64tyJvbGwiM1H9OM/kalmosb0bXhct2m1F/DExpG6KZPqxy/Vd9XsrGriro5cEQVcUSSp05s+T0XU/HGM6T6Z9DqSjAcur7Vkk77KNjnzu+rrzKStSt9ErloGfOk7yRGr1Tb9ZdpmtY6QG+NWgivlofTMk2dyz+YeP5oZvy0GFvwFlSbPVswTomsAAAAASUVORK5CYII="
                  alt=""
                />
                <span>GitHub</span>
              </div>
              <div className="links">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAMAAACR41cYAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJ/UExURUdwTCEgIB8fHyAfHyAfHyAfHyAfHx8eHiAfHx8eHiAfHyAfHyAfHx8eHiAfH5jU5h8eHiAfHyAfHyAfHx8eHh8eHiAfHyAfIAQBAxgWFiEhISEgIAwCACAgIB0bGi40NhkVFCAfH5za8FBncENVXKTm95vZ8Jza8J7c8R0bGhMTEx0cHCAfHyEgH73//yEgIJ7c8QAAAIfF6TM7PwwJCh4cHHm45SAfHyAfH5za8CAfH5za8Jza8Jza8Jza8CAfH5za8G6VokRVWxIKCJza8JvY7pza8DtITTlFSZ3b8AMHCgAABJza8ElBPDA4PFVLRK3z/zEvLRcXGEVBPTA5PJza8AADB5vZ74XD6QIAAIrJ67T+/4HA6BAIByAfH4zK7IrI6zE4O7D5/yAfHwEAACIgIJza8BUWGAACBhoaGvXLsQ0PEZ/g957c8RATFf/oy1p4hfzRticqLIC+6Jrm///jxiMiIvDEq//Xu/bHq//fxG5eVRgXF////P/z0P/22lNHQv/gv//877H5/xcTEhUOC76cicyolCcjIf/avdivlpvY7mZaUQMHC1lNRfrNsPTJr//o0v/cwf3WuHtnXIshF4VuYvTEqfrcyM+oqOrW1PTm4v716zM7PqHf8v/t1SkpJsD//1RueGebxaPn/IXK/TVIV3OapbmXheK0mNuymv/GrdWZhu/Tx+u7pI54adymkf/658+dlMifn+S1mafq+7uhizYvLeLCufLs7/rk1mNVTf/NrtOskqeHd8aXlXFgVv/kwZU1LNW1neK9tJAuJsCMirJwa+nKv9zFx2CRtVuKronG6naszSUnKUZaZG+TmUFPU3agr3GkxIu8xSfH+3sAAABzdFJOUwD97RwqJTMat/4VL6DlCwmSOh2qV77yhGEIms8njIj9+xEk6wESA6CMcwRtUGQlwnjIs9iu9u3fsS5e3hvwhB66hguP9eJfotdT9nPf4o7mPNW62Kc/5MnTMeRzzcTG3/LkYv////////////////////54WQMpAAACTklEQVQYGXXABVMiYRgA4BdYdhkExa5TR8Xuvu7u7v5g2V06XFGxO7C72+vu7s74Qaczd87sIg/85yeUJMMCsUK+FFzIEEISvwSZxF8iSwpEczyBT4L4xMAXhniE4CIQ8QRgwCMWID458PgipEYag0ZD07TGYHCgOcuBI1GIWA3lqEcOrVbrUNdXUzSLfIHDB7EG7fXGi411tRdq6y7dedrl1KjTgGMNop3PSm+WGO35+fkNHSUlpT0U8geO4ABneUX7w9tXWxmGKXzU/7HyyX2tBLhCVT0vh/q7b7W3MW1Fb169H6p4TIXAP1IRQfiIMV/qRUXl8+4HHUwnY//w9l1lZ7kzHBP7EIRICpg3juMemLd2zGwcHOjrLbjB9PYNDI72sgYc88Bx3BsDQiSN9FQCpFDFxrKyVvO1KwXmwtGy0i4qBUDpGSkVEbDA73D5vYIGo/2y3Vhkfl28PQl4NoQABAdl79vV0lzc3LLnwP4dBPB4rbNkwbwM1byMRHAVk7qe3gIAyWpWIBCwKAgWFTS8dfdBQY5cIMsRsv6wuARLhIU+rUBhKCQgFNwIPrYkTR6uVqjD80LBvWxhIFKgsLxT4IYy9XyWJbo6ujo64tyJvbGwiM1H9OM/kalmosb0bXhct2m1F/DExpG6KZPqxy/Vd9XsrGriro5cEQVcUSSp05s+T0XU/HGM6T6Z9DqSjAcur7Vkk77KNjnzu+rrzKStSt9ErloGfOk7yRGr1Tb9ZdpmtY6QG+NWgivlofTMk2dyz+YeP5oZvy0GFvwFlSbPVswTomsAAAAASUVORK5CYII="
                  alt=""
                />
                <span>GitHub</span>
              </div>
            </div>
          </div>
        </div>

        <div className="notification">
          <i className="bx bx-bell bx-tada"></i>
          <span>3</span>

          <div className="sub-menu">
            <div className="items">
              <div className="head">
                <h5>Notification</h5>
                <p>View All</p>
              </div>

              <ul className="notification-list">
                <div className="lists">
                  <div className="left">
                    <img src={userImage} alt="" />
                  </div>

                  <div className="right">
                    <h5>New User Joined</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <small>
                      <i className="bx bx-time-five"></i> 1 hours ago
                    </small>
                  </div>
                </div>

                <div className="lists">
                  <div className="left">
                    <img src={userImage} alt="" />
                  </div>

                  <div className="right">
                    <h5>New User Joined</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <small>
                      <i className="bx bx-time-five"></i> 3 hours ago
                    </small>
                  </div>
                </div>

                <div className="lists">
                  <div className="left">
                    <img src={userImage} alt="" />
                  </div>

                  <div className="right">
                    <h5>New User Joined</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <small>
                      <i className="bx bx-time-five"></i> 1 hours ago
                    </small>
                  </div>
                </div>

                <div className="lists">
                  <div className="left">
                    <img src={userImage} alt="" />
                  </div>

                  <div className="right">
                    <h5>New User Joined</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <small>
                      <i className="bx bx-time-five"></i> 1 hours ago
                    </small>
                  </div>
                </div>
              </ul>

              <NavLink to="/notifications">
                <button className="view-more" type="button">
                  <i className="bx bx-right-arrow-alt"></i> View More
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="profile">
          <img src={userImage} alt="image" />
          <span className="user-admin-span">
            admin <i className="bx bx-chevron-down"></i>
          </span>

          <div className="sub-menu">
            <div className="item">
              <NavLink to="/userdetails">
                <div className="profile">
                  <i className="bx bx-user"></i>
                  <span>Profile</span>
                </div>
              </NavLink>
              <div className="profile">
                <i className="bx bx-power-off danger"></i>
                <span className="danger">Log Out</span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="setting">
          <i className="bx bx-cog bx-spin"></i>
        </div> */}
      </div>

      {/* ------------------------- MOBILE NAVIGATION ----------------------------- */}

      <div
        className={`${togle == true ? "toggle" : ""}`}
        id="mobile-adminnavigation"
      >
        <div className="nab-boyxy">
          <i
            onClick={() => setToggle(false)}
            id="mobile-cross"
            className="bx bx-x"
          ></i>

          <div className="admin-links">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              <div className="more-link">
                <div className="f-flex">
                  <i className="bx bx-home-circle"></i>
                  <span className="link-name">Dashboard</span>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="admin-links">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/usermanagement"
            >
              <div className="more-link">
                <div className="f-flex">
                  <i className="bx bxs-user-detail"></i>
                  <span className="link-name">User Management</span>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="admin-links">
            <div className="more-link" onClick={() => setMenu(1)}>
              <div className="f-flex">
                <i className="bx bx-notepad"></i>
                <span className="link-name">KYC Management</span>
              </div>

              <i className="bx bx-chevron-down"></i>
            </div>

            {menu == 1 && (
              <div className="sub-navlinks">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/pending"
                >
                  <div className="sub-link">Pending</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/approved"
                >
                  <div className="sub-link">Approved</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/rejected"
                >
                  <div className="sub-link">Reject</div>
                </NavLink>
              </div>
            )}
          </div>

          <div className="admin-links">
            <div className="more-link" onClick={() => setMenu(2)}>
              <div className="f-flex">
                <i className="bx bxs-user"></i>
                <span className="link-name">Players</span>
              </div>

              <i className="bx bx-chevron-down"></i>
            </div>

            {menu == 2 && (
              <div className="sub-navlinks">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/regesterdplayers"
                >
                  <div className="sub-link">Regesterd Players</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/avatars"
                >
                  <div className="sub-link">Avatars</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/promotionalmessage"
                >
                  <div className="sub-link">Promotional Messages</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/deposittransition"
                >
                  <div className="sub-link">Deposit Transactions</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/withdrawalrequests"
                >
                  <div className="sub-link">Withdrawal Request</div>
                </NavLink>
              </div>
            )}
          </div>

          <div className="admin-links">
            <div className="more-link" onClick={() => setMenu(3)}>
              <div className="f-flex">
                <i className="bx bx-credit-card"></i>
                <span className="link-name">Bank Management</span>
              </div>

              <i className="bx bx-chevron-down"></i>
            </div>

            {menu == 3 && (
              <div className="sub-navlinks">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/newaccount"
                >
                  <div className="sub-link">New Account</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/bankapproved"
                >
                  <div className="sub-link">Approved</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/bankrejected"
                >
                  <div className="sub-link">Rejected</div>
                </NavLink>
              </div>
            )}
          </div>

          <div className="admin-links">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/transtionmanagement"
            >
              <div className="more-link">
                <div className="f-flex">
                  <i className="bx bx-money-withdraw"></i>
                  <span className="link-name">Transaction Management</span>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="admin-links">
            <div className="more-link" onClick={() => setMenu(4)}>
              <div className="f-flex">
                <i className="bx bx-dice-6"></i>
                <span className="link-name">Game</span>
              </div>

              <i className="bx bx-chevron-down"></i>
            </div>

            {menu == 4 && (
              <div className="sub-navlinks">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/addgame"
                >
                  <div className="sub-link">Add Game</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/tournamentcategory"
                >
                  <div className="sub-link">Tournament Category</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/tournament"
                >
                  <div className="sub-link">Tournaments</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/gameplaydata"
                >
                  <div className="sub-link">Gameplay Data</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/gamehistory"
                >
                  <div className="sub-link">Game History</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/gamerecord"
                >
                  <div className="sub-link">Game Record</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/pointtable"
                >
                  <div className="sub-link">Point Table Entry</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/dealtable"
                >
                  <div className="sub-link">Deal Table Entry</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/pooltableentry"
                >
                  <div className="sub-link">Pool Table Entry</div>
                </NavLink>
              </div>
            )}
          </div>

          <div className="admin-links">
            <div className="more-link" onClick={() => setMenu(5)}>
              <div className="f-flex">
                <i className="bx bxs-notepad"></i>
                <span className="link-name">CMS Pages</span>
              </div>

              <i className="bx bx-chevron-down"></i>
            </div>
            {menu == 5 && (
              <div className="sub-navlinks">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/responsibleplay"
                >
                  <div className="sub-link">Responsible Play</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/aboutus"
                >
                  <div className="sub-link">About Us</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/refferail"
                >
                  <div className="sub-link">Referral</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/privicypolicy"
                >
                  <div className="sub-link">Privicy Policy</div>
                </NavLink>

                <NavLink to="/refundypolicy">
                  <div className="sub-link">Refund Policy</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/termsservice"
                >
                  <div className="sub-link">Terms Of Service</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/leagality"
                >
                  <div className="sub-link">Legality</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/faqcategory"
                >
                  <div className="sub-link">FAQ Categories</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/faqs"
                >
                  <div className="sub-link">FAQs</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/withdrawcharges"
                >
                  <div className="sub-link">Withdraw Charges</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/info"
                >
                  <div className="sub-link">Info</div>
                </NavLink>
              </div>
            )}
          </div>

          <div className="admin-links">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/paymentmanagement"
            >
              <div className="more-link">
                <div className="f-flex">
                  <i className="bx bx-money-withdraw"></i>
                  <span className="link-name">Paymet Management</span>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="admin-links">
            <div className="more-link" onClick={() => setMenu(6)}>
              <div className="f-flex">
                <i className="bx bx-notepad"></i>
                <span className="link-name">Payout Management</span>
              </div>

              <i className="bx bx-chevron-down"></i>
            </div>

            {menu == 6 && (
              <div className="sub-navlinks">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/withdrawrequest"
                >
                  <div className="sub-link">Withdraw Request</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/inprocess"
                >
                  <div className="sub-link">In Process</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/processrequest"
                >
                  <div className="sub-link">Processed Request</div>
                </NavLink>
              </div>
            )}
          </div>

          <div className="admin-links">
            <div className="more-link" onClick={() => setMenu(7)}>
              <div className="f-flex">
                <i className="bx bx-wallet"></i>
                <span className="link-name">Referral</span>
              </div>

              <i className="bx bx-chevron-down"></i>
            </div>

            {menu == 7 && (
              <div className="sub-navlinks">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/referralmanagement"
                >
                  <div className="sub-link">Referral Management</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/affalitemanagement"
                >
                  <div className="sub-link">Affilate Management</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/socialmanagement"
                >
                  <div className="sub-link">Social Management</div>
                </NavLink>
              </div>
            )}
          </div>

          <div className="admin-links">
            <div className="more-link" onClick={() => setMenu(8)}>
              <div className="f-flex">
                <i className="bx bx-user-circle"></i>
                <span className="link-name">Admin / Staff</span>
              </div>

              <i className="bx bx-chevron-down"></i>
            </div>
            {menu == 8 && (
              <div className="sub-navlinks">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/addadmin"
                >
                  <div className="sub-link">Admin</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/withdrawaladmin"
                >
                  <div className="sub-link">Withdrawal Admin</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/bannerpageslider"
                >
                  <div className="sub-link">Banner/ Page Slider</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/bonus"
                >
                  <div className="sub-link">Bonus System</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/chat"
                >
                  <div className="sub-link">Chat</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/testomonial"
                >
                  <div className="sub-link">Add Testomonial</div>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/clubtype"
                >
                  <div className="sub-link">Club Type</div>
                </NavLink>
              </div>
            )}
          </div>

          <div className="admin-links">
            <div className="more-link" onClick={() => setMenu(9)}>
              <div className="f-flex">
                <i className="bx bx-cog"></i>
                <span className="link-name">Setting</span>
              </div>

              <i className="bx bx-chevron-down"></i>
            </div>

            {menu == 9 && (
              <div className="sub-navlinks">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/appmaintenance"
                >
                  <div className="sub-link">App Maintenance</div>
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/botconfig"
                >
                  <div className="sub-link">Bot Configuration</div>
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/botmanagement"
                >
                  <div className="sub-link">Bot Management</div>
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/globalconfig"
                >
                  <div className="sub-link">Global Configuration</div>
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/testomonial"
                >
                  <div className="sub-link">State Management</div>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
