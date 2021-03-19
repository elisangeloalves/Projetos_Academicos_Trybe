import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Timer from './Timer';
import './Components.css';
import { stopTimer, nextQuestion } from '../actions/gameActions';
import { getPlayerScore } from '../actions/playerActions';

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array#6274398
function shuffle(correct, incorrect) {
  const array = [correct, ...incorrect];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function multiplier(difficulty) {
  let multiple = 0;
  if (difficulty === 'hard') multiple = 3;
  else if (difficulty === 'medium') multiple = 2;
  else multiple = 1;
  return multiple;
}

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      questions: [],
      shuffled: [],
      questionIndex: 0,
      rightAnswer: '',
      wrongAnswer: '',
      hidden: true,
    };
  }

  async componentDidMount() {
    await fetch('https://opentdb.com/api.php?amount=5')
      .then((response) => response.json())
      .then((obj) => obj.results)
      .then((data) => {
        this.setState({ questions: [...data] });
      });
    const { questions } = this.state;
    const shuffled = [...questions];
    for (let i = 0; i < shuffled.length; i += 1) {
      shuffled[i] = shuffle(shuffled[i].correct_answer, shuffled[i].incorrect_answers);
    }
    this.setShuffledState(shuffled);
  }

  setShuffledState(array) {
    this.setState({
      shuffled: array,
      loading: false,
    });
  }

  // https://stackoverflow.com/questions/41978408/changing-style-of-a-button-on-click
  highlightAnswers() {
    const { stopClock } = this.props;
    this.setState({
      rightAnswer: 'right-answer',
      wrongAnswer: 'wrong-anwser',
      hidden: false,
    });
    stopClock();
  }

  rightAnswerButton(correctAnswer, rightAnswer, difficulty) {
    const { addScore, remainingTime } = this.props;
    const playerScore = 10 + (remainingTime * multiplier(difficulty));
    return (
      <button
        data-testid="correct-answer" className={rightAnswer}
        disabled={remainingTime === 0}
        // https://stackoverflow.com/questions/26069238/call-multiple-functions-onclick-reactjs
        onClick={() => { this.highlightAnswers(); addScore(playerScore); }}
      >
        {correctAnswer}
      </button>
    );
  }

  wrongAnswerButton(wrongAnswer, answer, index) {
    const { remainingTime } = this.props;
    return (
      <button
        data-testid={`wrong-answer-${index}`} className={wrongAnswer}
        disabled={remainingTime === 0}
        onClick={() => this.highlightAnswers()}
      >
        {answer}
      </button>
    );
  }

  nextQuestion() {
    const { changeQuestion } = this.props;
    this.setState((prevState) => ({
      questionIndex: prevState.questionIndex + 1,
      rightAnswer: '',
      wrongAnswer: '',
      hidden: true,
    }));
    changeQuestion();
  }

  feedbackButton(hidden, remainingTime) {
    const { questionIndex } = this.state;
    return (questionIndex === 4) ? (
      <Link to="/feedback">
        <button
          data-testid="btn-next" hidden={hidden && remainingTime !== 0}
        >
          Ver resultado
        </button>
      </Link>
    ) : (
      <button
        data-testid="btn-next" hidden={hidden && remainingTime !== 0}
        onClick={() => this.nextQuestion()}
      >
        Próxima
      </button>
    );
  }

  triviaQuestionsAndAnswers() {
    const { questions, questionIndex, rightAnswer, wrongAnswer, shuffled, hidden } = this.state;
    const { remainingTime } = this.props;
    return (
      <div>
        {questions
          .filter((_, filter) => filter === questionIndex)
          .map((trivia) => {
            const { category, correct_answer: correctAnswer, question, difficulty } = trivia;
            return (
              <section>
                <p data-testid="question-category">{category}</p>
                <p data-testid="question-text">{question}</p>
                {shuffled[questionIndex].map((answer, index) =>
                  (answer === correctAnswer ? (
                    this.rightAnswerButton(correctAnswer, rightAnswer, difficulty)
                  ) : (
                    this.wrongAnswerButton(wrongAnswer, answer, index)
                  )),
                )}
                {this.feedbackButton(hidden, remainingTime)}
              </section>
            );
          })}
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return !loading ? (
      <div>
        <Timer />
        {this.triviaQuestionsAndAnswers()}
      </div>
    ) : (
      <h1>Loading...</h1>
    );
  }
}

const mapStateToProps = (state) => ({
  remainingTime: state.gameReducer.timer,
});

const mapDispatchToProps = {
  stopClock: stopTimer,
  changeQuestion: nextQuestion,
  addScore: getPlayerScore,
};

GameScreen.propTypes = {
  stopClock: PropTypes.func.isRequired,
  changeQuestion: PropTypes.func.isRequired,
  addScore: PropTypes.func.isRequired,
  remainingTime: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
