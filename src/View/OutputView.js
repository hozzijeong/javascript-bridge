/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require("@woowacourse/mission-utils");

const {
  DEFAULT,
  OUTPUT_VIEW_VALUE: {
    FIRST_EMPTY,
    FIRST_WRONG,
    FIRST_RIGHT,
    EMPTY,
    RIGHT,
    WRONG,
  },
} = require("../utils/constant.js");
const { isZero } = require("../utils/utilityFuncions.js");

const OutputView = {
  printInitialComment() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
  },

  printMap(inputHistory, bridge, bridgeOpposition) {
    Console.print(
      `[${inputHistory.reduce((acc, cur, idx) => {
        if (cur === bridgeOpposition)
          return (acc += isZero(idx) ? FIRST_EMPTY : EMPTY);
        if (cur !== bridge[idx])
          return (acc += isZero(idx) ? FIRST_WRONG : WRONG);
        return (acc += isZero(idx) ? FIRST_RIGHT : RIGHT);
      }, DEFAULT.EMPTY_STRING)}]`,
    );
  },

  printResult({ isSuccess, tryCount }) {
    Console.print(
      `\n게임 성공 여부: ${
        isSuccess ? "성공" : "실패"
      }\n총 시도한 횟수: ${tryCount}`,
    );

    Console.close();
  },

  printGameEnd() {
    Console.print("최종 게임 결과");
  },

  printUserInput(inputHistory, bridge) {
    OutputView.printMap(inputHistory, bridge, DEFAULT.DOWN);
    OutputView.printMap(inputHistory, bridge, DEFAULT.UP);
    Console.print(DEFAULT.EMPTY_STRING);
  },
};

module.exports = OutputView;
