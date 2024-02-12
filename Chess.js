document.addEventListener("DOMContentLoaded", function () {
  function img() {
    document.querySelectorAll(".box").forEach((image) => {
      if (image.innerText.length !== 0) {
        if (image.innerText == "Wpawn" || image.innerText == "Bpawn") {
          image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="${image.innerText}.png" alt="">`;
          image.style.cursor = "pointer";
        } else {
          image.innerHTML = `${image.innerText} <img class='allimg' src="${image.innerText}.png" alt="">`;
          image.style.cursor = "pointer";
        }
      }
    });
  }
  img();

  function coloring() {
    const color = document.querySelectorAll(".box");

    color.forEach((color) => {
      getId = color.id;
      arr = Array.from(getId);
      arr.shift();
      aside = eval(arr.pop());
      aup = eval(arr.shift());
      a = aside + aup;

      if (a % 2 == 0) {
        color.style.backgroundColor = "#eeeed2";
      }
      if (a % 2 !== 0) {
        color.style.backgroundColor = "#769656";
      }
      // if (a % 2 == 0) {
      //     color.style.backgroundColor = 'seagreen'
      // }
      // if (a % 2 !== 0) {
      //     color.style.backgroundColor = 'lime'
      // }
    });
  }
  coloring();

  function notRemove() {
    document.querySelectorAll(".box").forEach((i1) => {
      if (i1.style.backgroundColor == "yellow") {
        document.querySelectorAll(".box").forEach((i2) => {
          if (
            i2.style.backgroundColor == "green" &&
            i2.innerText.length !== 0
          ) {
            gtext = i2.innerText;

            ytext = i1.innerText;

            ycolor = Array.from(ytext).shift().toString();
            gcolor = Array.from(gtext).shift().toString();

            getId = i2.id;
            arr = Array.from(getId);
            arr.shift();
            aside = eval(arr.pop());
            aup = eval(arr.shift());
            a = aside + aup;

            if (a % 2 == 0 && ycolor == gcolor) {
              i2.style.backgroundColor = "rgb(222, 182, 22)";
            }
            if (a % 2 !== 0 && ycolor == gcolor) {
              i2.style.backgroundColor = "rgb(222, 182, 22)";
            }

            // if (ycolor == gcolor) {
            //     i2.style.backgroundColor = 'rgb(253, 60, 60)'
            // }
          }
        });
      }
    });
  }

  let tog = 1;
  whiteCastleChance = true;
  blackCastleChance = true;

  document.querySelectorAll(".box").forEach((item) => {
    item.addEventListener("click", function () {
      if (item.style.backgroundColor == "green" && item.innerText.length == 0) {
        tog = tog + 1;
      } else if (
        item.style.backgroundColor == "red" &&
        item.innerText.length == 0
      ) {
        tog = tog + 1;
      } else if (
        item.style.backgroundColor == "green" &&
        item.innerText.length !== 0
      ) {
        document.querySelectorAll(".box").forEach((i) => {
          if (i.style.backgroundColor == "yellow") {
            yId = i.id;
            ytext = i.innerText;

            document.getElementById(yId).innerText = "";
            item.innerText = ytext;
            coloring();
            img();
            tog = tog + 1;
          }
        });
      }

      getId = item.id;
      arr = Array.from(getId);
      arr.shift();
      aside = eval(arr.pop());
      arr.push("0");
      aup = eval(arr.join(""));
      a = aside + aup;

      function whosTurn(toggle) {
        if (item.innerText == `${toggle}pawn`) {
          item.style.backgroundColor = "yellow";

          if (tog % 2 !== 0 && aup < 800) {
            if (
              aup == 200 &&
              document.getElementById(`b${a + 100}`).innerText.length == 0
            ) {
              document.getElementById(`b${a + 100}`).style.backgroundColor =
                "green";
              if (
                aup == 200 &&
                document.getElementById(`b${a + 200}`).innerText.length == 0
              ) {
                document.getElementById(`b${a + 200}`).style.backgroundColor =
                  "green";
              }
            }

            if (
              aup !== 200 &&
              document.getElementById(`b${a + 100}`).innerText.length == 0
            ) {
              document.getElementById(`b${a + 100}`).style.backgroundColor =
                "green";
            }

            if (
              aside < 8 &&
              document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0
            ) {
              document.getElementById(`b${a + 100 + 1}`).style.backgroundColor =
                "green";
            }

            if (
              aside > 1 &&
              document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0
            ) {
              document.getElementById(`b${a + 100 - 1}`).style.backgroundColor =
                "green";
            }
            // if (aup == 800) {
            //     document.getElementById(`b${a}`).innerText = 'Wqueen'
            //     coloring()
            //     img()
            // }
            // if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length == 0 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
            //     document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
            // }

            // if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length == 0 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
            //     document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'

            // }
          }

          if (tog % 2 == 0 && aup > 100) {
            if (
              aup == 700 &&
              document.getElementById(`b${a - 100}`).innerText.length == 0
            ) {
              document.getElementById(`b${a - 100}`).style.backgroundColor =
                "green";
              if (
                aup == 700 &&
                document.getElementById(`b${a - 200}`).innerText.length == 0
              ) {
                document.getElementById(`b${a - 200}`).style.backgroundColor =
                  "green";
              }
            }

            if (
              aup !== 700 &&
              document.getElementById(`b${a - 100}`).innerText.length == 0
            ) {
              document.getElementById(`b${a - 100}`).style.backgroundColor =
                "green";
            }
            if (
              aside < 8 &&
              document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0
            ) {
              document.getElementById(`b${a - 100 + 1}`).style.backgroundColor =
                "green";
            }
            if (
              aside > 1 &&
              document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0
            ) {
              document.getElementById(`b${a - 100 - 1}`).style.backgroundColor =
                "green";
            }
          }
        }

        if (item.innerText == `${toggle}king`) {
          if (aside < 8) {
            document.getElementById(`b${a + 1}`).style.backgroundColor =
              "green";
          }
          if (aside > 1) {
            document.getElementById(`b${a - 1}`).style.backgroundColor =
              "green";
          }
          if (aup < 800) {
            document.getElementById(`b${a + 100}`).style.backgroundColor =
              "green";
          }
          if (aup > 100) {
            document.getElementById(`b${a - 100}`).style.backgroundColor =
              "green";
          }

          if (aup > 100 && aside < 8) {
            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor =
              "green";
          }
          if (aup > 100 && aside > 1) {
            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor =
              "green";
          }
          if (aup < 800 && aside < 8) {
            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor =
              "green";
          }
          if (aup < 800 && aside > 1) {
            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor =
              "green";
          }

          if (
            whiteCastleChance == true &&
            a == 105 &&
            document.getElementById("b106").innerText == "" &&
            document.getElementById("b107").innerText == "" &&
            document.getElementById("b108").innerText == "Wrook"
          ) {
            document.getElementById(`b107`).style.backgroundColor = "red";
          }
          if (
            whiteCastleChance == true &&
            a == 105 &&
            document.getElementById("b104").innerText == "" &&
            document.getElementById("b103").innerText == "" &&
            document.getElementById("b102").innerText == "" &&
            document.getElementById("b101").innerText == "Wrook"
          ) {
            document.getElementById(`b103`).style.backgroundColor = "red";
          }
          if (
            blackCastleChance == true &&
            a == 805 &&
            document.getElementById("b806").innerText == "" &&
            document.getElementById("b807").innerText == "" &&
            document.getElementById("b808").innerText == "Brook"
          ) {
            document.getElementById(`b807`).style.backgroundColor = "red";
          }
          if (
            blackCastleChance == true &&
            a == 805 &&
            document.getElementById("b804").innerText == "" &&
            document.getElementById("b803").innerText == "" &&
            document.getElementById("b802").innerText == "" &&
            document.getElementById("b801").innerText == "Brook"
          ) {
            document.getElementById(`b803`).style.backgroundColor = "red";
          }

          item.style.backgroundColor = "yellow";
        }

        if (item.innerText == `${toggle}rook`) {
          for (let i = 1; i < 9; i++) {
            if (
              a + i * 100 < 900 &&
              document.getElementById(`b${a + i * 100}`).innerText == 0
            ) {
              document.getElementById(`b${a + i * 100}`).style.backgroundColor =
                "green";
            } else if (
              a + i * 100 < 900 &&
              document.getElementById(`b${a + i * 100}`).innerText !== 0
            ) {
              document.getElementById(`b${a + i * 100}`).style.backgroundColor =
                "green";
              break;
            }
          }

          for (let i = 1; i < 9; i++) {
            if (
              a - i * 100 > 100 &&
              document.getElementById(`b${a - i * 100}`).innerText == 0
            ) {
              document.getElementById(`b${a - i * 100}`).style.backgroundColor =
                "green";
            } else if (
              a - i * 100 > 100 &&
              document.getElementById(`b${a - i * 100}`).innerText !== 0
            ) {
              document.getElementById(`b${a - i * 100}`).style.backgroundColor =
                "green";
              break;
            }
          }

          for (let i = 1; i < 9; i++) {
            if (
              a + i < aup + 9 &&
              document.getElementById(`b${a + i}`).innerText == 0
            ) {
              document.getElementById(`b${a + i}`).style.backgroundColor =
                "green";
            } else if (
              a + i < aup + 9 &&
              document.getElementById(`b${a + i}`).innerText !== 0
            ) {
              document.getElementById(`b${a + i}`).style.backgroundColor =
                "green";
              break;
            }
          }

          for (let i = 1; i < 9; i++) {
            if (
              a - i > aup &&
              document.getElementById(`b${a - i}`).innerText == 0
            ) {
              document.getElementById(`b${a - i}`).style.backgroundColor =
                "green";
            } else if (
              a - i > aup &&
              document.getElementById(`b${a - i}`).innerText !== 0
            ) {
              document.getElementById(`b${a - i}`).style.backgroundColor =
                "green";
              break;
            }
          }

          item.style.backgroundColor = "yellow";
        }
        if (item.innerText == `${toggle}bishop`) {
          for (let i = 1; i < 9; i++) {
            if (
              i < (900 - aup) / 100 &&
              i < 9 - aside &&
              document.getElementById(`b${a + i * 100 + i}`).innerText.length ==
                0
            ) {
              document.getElementById(
                `b${a + i * 100 + i}`
              ).style.backgroundColor = "green";
            } else if (
              i < (900 - aup) / 100 &&
              i < 9 - aside &&
              document.getElementById(`b${a + i * 100 + i}`).innerText
                .length !== 0
            ) {
              document.getElementById(
                `b${a + i * 100 + i}`
              ).style.backgroundColor = "green";
              break;
            }
          }

          for (let i = 1; i < 9; i++) {
            if (
              i < aup / 100 &&
              i < 9 - aside &&
              document.getElementById(`b${a - i * 100 + i}`).innerText.length ==
                0
            ) {
              document.getElementById(
                `b${a - i * 100 + i}`
              ).style.backgroundColor = "green";
            } else if (
              i < aup / 100 &&
              i < 9 - aside &&
              document.getElementById(`b${a - i * 100 + i}`).innerText
                .length !== 0
            ) {
              document.getElementById(
                `b${a - i * 100 + i}`
              ).style.backgroundColor = "green";
              break;
            }
          }

          for (let i = 1; i < 9; i++) {
            if (
              i < (900 - aup) / 100 &&
              i < aside &&
              document.getElementById(`b${a + i * 100 - i}`).innerText.length ==
                0
            ) {
              document.getElementById(
                `b${a + i * 100 - i}`
              ).style.backgroundColor = "green";
            } else if (
              i < (900 - aup) / 100 &&
              i < aside &&
              document.getElementById(`b${a + i * 100 - i}`).innerText
                .length !== 0
            ) {
              document.getElementById(
                `b${a + i * 100 - i}`
              ).style.backgroundColor = "green";
              break;
            }
          }

          for (let i = 1; i < 9; i++) {
            if (
              i < aup / 100 &&
              i < aside &&
              document.getElementById(`b${a - i * 100 - i}`).innerText.length ==
                0
            ) {
              document.getElementById(
                `b${a - i * 100 - i}`
              ).style.backgroundColor = "green";
            } else if (
              i < aup / 100 &&
              i < aside &&
              document.getElementById(`b${a - i * 100 - i}`).innerText
                .length !== 0
            ) {
              document.getElementById(
                `b${a - i * 100 - i}`
              ).style.backgroundColor = "green";
              break;
            }
          }

          item.style.backgroundColor = "yellow";
        }

        if (item.innerText == `${toggle}queen`) {
          for (let i = 1; i < 9; i++) {
            if (
              a + i * 100 < 900 &&
              document.getElementById(`b${a + i * 100}`).innerText == 0
            ) {
              document.getElementById(`b${a + i * 100}`).style.backgroundColor =
                "green";
            } else if (
              a + i * 100 < 900 &&
              document.getElementById(`b${a + i * 100}`).innerText !== 0
            ) {
              document.getElementById(`b${a + i * 100}`).style.backgroundColor =
                "green";
              break;
            }
          }

          for (let i = 1; i < 9; i++) {
            if (
              a - i * 100 > 100 &&
              document.getElementById(`b${a - i * 100}`).innerText == 0
            ) {
              document.getElementById(`b${a - i * 100}`).style.backgroundColor =
                "green";
            } else if (
              a - i * 100 > 100 &&
              document.getElementById(`b${a - i * 100}`).innerText !== 0
            ) {
              document.getElementById(`b${a - i * 100}`).style.backgroundColor =
                "green";
              break;
            }
          }

          for (let i = 1; i < 9; i++) {
            if (
              a + i < aup + 9 &&
              document.getElementById(`b${a + i}`).innerText == 0
            ) {
              document.getElementById(`b${a + i}`).style.backgroundColor =
                "green";
            } else if (
              a + i < aup + 9 &&
              document.getElementById(`b${a + i}`).innerText !== 0
            ) {
              document.getElementById(`b${a + i}`).style.backgroundColor =
                "green";
              break;
            }
          }

          for (let i = 1; i < 9; i++) {
            if (
              a - i > aup &&
              document.getElementById(`b${a - i}`).innerText == 0
            ) {
              document.getElementById(`b${a - i}`).style.backgroundColor =
                "green";
            } else if (
              a - i > aup &&
              document.getElementById(`b${a - i}`).innerText !== 0
            ) {
              document.getElementById(`b${a - i}`).style.backgroundColor =
                "green";
              break;
            }
          }

          for (let i = 1; i < 9; i++) {
            if (
              i < (900 - aup) / 100 &&
              i < 9 - aside &&
              document.getElementById(`b${a + i * 100 + i}`).innerText.length ==
                0
            ) {
              document.getElementById(
                `b${a + i * 100 + i}`
              ).style.backgroundColor = "green";
            } else if (
              i < (900 - aup) / 100 &&
              i < 9 - aside &&
              document.getElementById(`b${a + i * 100 + i}`).innerText
                .length !== 0
            ) {
              document.getElementById(
                `b${a + i * 100 + i}`
              ).style.backgroundColor = "green";
              break;
            }
          }

          for (let i = 1; i < 9; i++) {
            if (
              i < aup / 100 &&
              i < 9 - aside &&
              document.getElementById(`b${a - i * 100 + i}`).innerText.length ==
                0
            ) {
              document.getElementById(
                `b${a - i * 100 + i}`
              ).style.backgroundColor = "green";
            } else if (
              i < aup / 100 &&
              i < 9 - aside &&
              document.getElementById(`b${a - i * 100 + i}`).innerText
                .length !== 0
            ) {
              document.getElementById(
                `b${a - i * 100 + i}`
              ).style.backgroundColor = "green";
              break;
            }
          }

          for (let i = 1; i < 9; i++) {
            if (
              i < (900 - aup) / 100 &&
              i < aside &&
              document.getElementById(`b${a + i * 100 - i}`).innerText.length ==
                0
            ) {
              document.getElementById(
                `b${a + i * 100 - i}`
              ).style.backgroundColor = "green";
            } else if (
              i < (900 - aup) / 100 &&
              i < aside &&
              document.getElementById(`b${a + i * 100 - i}`).innerText
                .length !== 0
            ) {
              document.getElementById(
                `b${a + i * 100 - i}`
              ).style.backgroundColor = "green";
              break;
            }
          }

          for (let i = 1; i < 9; i++) {
            if (
              i < aup / 100 &&
              i < aside &&
              document.getElementById(`b${a - i * 100 - i}`).innerText.length ==
                0
            ) {
              document.getElementById(
                `b${a - i * 100 - i}`
              ).style.backgroundColor = "green";
            } else if (
              i < aup / 100 &&
              i < aside &&
              document.getElementById(`b${a - i * 100 - i}`).innerText
                .length !== 0
            ) {
              document.getElementById(
                `b${a - i * 100 - i}`
              ).style.backgroundColor = "green";
              break;
            }
          }

          item.style.backgroundColor = "yellow";
        }

        if (item.innerText == `${toggle}knight`) {
          if (aside < 7 && aup < 800) {
            document.getElementById(`b${a + 100 + 2}`).style.backgroundColor =
              "green";
          }
          if (aside < 7 && aup > 200) {
            document.getElementById(`b${a - 100 + 2}`).style.backgroundColor =
              "green";
          }
          if (aside < 8 && aup < 700) {
            document.getElementById(`b${a + 200 + 1}`).style.backgroundColor =
              "green";
          }
          if (aside > 1 && aup < 700) {
            document.getElementById(`b${a + 200 - 1}`).style.backgroundColor =
              "green";
          }
          if (aside > 2 && aup < 800) {
            document.getElementById(`b${a - 2 + 100}`).style.backgroundColor =
              "green";
          }
          if (aside > 2 && aup > 100) {
            document.getElementById(`b${a - 2 - 100}`).style.backgroundColor =
              "green";
          }
          if (aside < 8 && aup > 200) {
            document.getElementById(`b${a - 200 + 1}`).style.backgroundColor =
              "green";
          }
          if (aside > 1 && aup > 200) {
            document.getElementById(`b${a - 200 - 1}`).style.backgroundColor =
              "green";
          }

          item.style.backgroundColor = "yellow";
        }
      }

      if (tog % 2 !== 0) {
        document.getElementById("tog").innerText = "White's Turn";
        whosTurn("W");
      }
      if (tog % 2 == 0) {
        document.getElementById("tog").innerText = "black's Turn";
        whosTurn("B");
      }

      notRemove();

      numOfKings = 0;

      document.querySelectorAll(".box").forEach((win) => {
        if (win.innerText == "Wking" || win.innerText == "Bking") {
          numOfKings += 1;
        }
      });

      if (numOfKings == 1) {
        setTimeout(() => {
          // console.log(`${toggle}`)
          if (tog % 2 == 0) {
            alert("White Wins !!");
            location.reload();
          } else if (tog % 2 !== 0) {
            alert("green Wins !!");
            location.reload();
          }
        }, 100);
      }
    });
  });

  document.querySelectorAll(".box").forEach((item) => {
    item.addEventListener("click", function () {
      if (item.style.backgroundColor == "yellow") {
        yId = item.id;
        ytext = item.innerText;

        document.querySelectorAll(".box").forEach((item2) => {
          item2.addEventListener("click", function () {
            getId = item2.id;
            arr = Array.from(getId);
            arr.shift();
            aside = eval(arr.pop());
            arr.push("0");
            aup = eval(arr.join(""));
            a = aside + aup;

            if (
              item2.style.backgroundColor == "green" &&
              item2.innerText.length == 0
            ) {
              if (ytext == `Wpawn` && aup == 800) {
                document.getElementById(`b${a}`).innerText = "Wqueen";
                document.getElementById(yId).innerText = "";
                coloring();
                img();
              } else if (ytext == `Bpawn` && aup == 100) {
                document.getElementById(`b${a}`).innerText = "Bqueen";
                document.getElementById(yId).innerText = "";
                coloring();
                img();
              } else {
                document.getElementById(yId).innerText = "";
                item2.innerText = ytext;
                coloring();
                img();
              }
            } else if (item2.style.backgroundColor == "red") {
              if (item2.id == "b103") {
                document.getElementById("b101").innerText = "";
                document.getElementById("b102").innerText = "";
                document.getElementById("b103").innerText = "Wking";
                document.getElementById("b104").innerText = "Wrook";
                document.getElementById("b105").innerText = "";
                document.getElementById(yId).innerText = "";
                whiteCastleChance = false;
                coloring();
                img();
              } else if (item2.id == "b107") {
                document.getElementById("b105").innerText = "";
                document.getElementById("b106").innerText = "Wrook";
                document.getElementById("b107").innerText = "Wking";
                document.getElementById("b108").innerText = "";
                document.getElementById(yId).innerText = "";
                whiteCastleChance = false;
                coloring();
                img();
              } else if (item2.id == "b803") {
                document.getElementById("b801").innerText = "";
                document.getElementById("b802").innerText = "";
                document.getElementById("b803").innerText = "Bking";
                document.getElementById("b804").innerText = "Brook";
                document.getElementById("b805").innerText = "";
                document.getElementById(yId).innerText = "";
                blackCastleChance = false;
                coloring();
                img();
              } else if (item2.id == "b807") {
                document.getElementById("b805").innerText = "";
                document.getElementById("b806").innerText = "Brook";
                document.getElementById("b807").innerText = "Bking";
                document.getElementById("b808").innerText = "";
                document.getElementById(yId).innerText = "";
                blackCastleChance = false;
                coloring();
                img();
              }
            }
          });
        });
      }
    });
  });

  z = 0;
  document.querySelectorAll(".box").forEach((ee) => {
    ee.addEventListener("click", function () {
      z = z + 1;
      if (
        z % 2 == 0 &&
        ee.style.backgroundColor !== "green" &&
        ee.style.backgroundColor !== "red"
      ) {
        coloring();
      }
    });
  });
});
