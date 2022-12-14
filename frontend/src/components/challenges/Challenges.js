import Menu from "../menu/Menu";
import Hearder from "../header/Header";
import { ChallengesBox } from "./styleChallenges";
import Question from "../question/Question";
import Result from "../result/Result";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Challenges() {
  const [challenges, setChallenges] = useState([]);
  const [points, setPoints] = useState(0);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const URL = `${process.env.REACT_APP_API_BASE_URL}/disciplines`;
    const promise = axios.get(URL);

    promise.then((res) => setChallenges(res.data));
  }, []);

  return (
    <ChallengesBox>
      <Hearder />
      <Questions
        challenges={challenges}
        points={points}
        setPoints={setPoints}
        clicks={clicks}
        setClicks={setClicks}
      />
      <Result
        setDisplay={clicks === challenges.length}
        clicks={clicks}
        challenges={challenges}
        points={points}
      />
      <Menu />
    </ChallengesBox>
  );
}

function Questions({ challenges, points, setPoints, clicks, setClicks }) {
  return challenges.map((v, i) => {
    return (
      <Question
        clicks={clicks}
        setClicks={setClicks}
        title={v.name}
        points={points}
        setPoints={setPoints}
        questions={v.challenges}
        key={i}
      />
    );
  });
}

export default Challenges;
