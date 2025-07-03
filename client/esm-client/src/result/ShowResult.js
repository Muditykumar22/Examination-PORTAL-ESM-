import React, { useState } from 'react';
import { Row, Col, Divider, Progress } from "antd";
import { connect } from "react-redux";
import "./ShowResult.css";
import Chart from "react-google-charts";
import axios from 'axios';

function ShowResult(props) {
  const { testName, date } = props.selectedTest;
  const testInfo = props.selectedTest[0];
  let marks,
    name,
    rightAnswers,
    submitMinutes,
    totalMarks,
    wrongAnswers,
    totalAttempt;

  if (testInfo) {
    marks = testInfo.correct;
    // name = testInfo.name;
    rightAnswers = testInfo.correct;
    submitMinutes = testInfo.submitMinutes;
    totalMarks = testInfo.totalMarks;
    wrongAnswers = testInfo.wrong;
    totalAttempt = rightAnswers - -wrongAnswers;
  }
  const submitDate = new Date(date);
  const [evaluation, setEvaluation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Replace these with actual question/answer extraction logic as needed
  const question = props.question || '';
  const answer = props.answer || '';

  const handleEvaluate = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post('/api/evaluate', { question, answer });
      setEvaluation(res.data.evaluation);
    } catch (err) {
      setError('Evaluation failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container dashboard">
        <Row gutter={[48, 10]} justify="center">
          <Col className="gutter-row" xs={24} sm={24} md={14} xl={14}>
            <div className="result__wrapper">
              <div className="result__wrapper__header">
                {/* <div className="result__heading">
                  <div className="result__test__name">Name: </div>
                  <div className="result__test__name__field">{name}</div>
                </div> */}
                <div className="result__heading">
                  <div className="result__test__name">Test Name: </div>
                  <div className="result__test__name__field">{testName}</div>
                </div>
                <div className="result__heading">
                  <div className="result__test__name">Time Taken: </div>
                  <div className="result__test__name__field">
                    {submitMinutes ? submitMinutes : "XX"} minutes
                  </div>
                </div>
                <div className="result__heading">
                  <div className="result__test__name">
                    Test Submitted Date:{" "}
                  </div>
                  <div className="result__test__name__field">
                    {submitDate.toLocaleDateString("en-US")}
                  </div>
                </div>
              </div>
              <Divider />
              <div className="result__wrapper__body">
                <div className="percentage">
                  <div className="percentage__heading">Your Score</div>
                  <Progress
                    percent={Math.floor((marks / totalMarks) * 100)}
                    status="active"
                  />
                </div>
                <div className="marks__info">
                  <div className="marks__chart">
                    <Chart
                      width={"100%"}
                      height={"100%"}
                      chartType="PieChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ["Task", "Hours per Day"],
                        ["Correct", marks / 10],
                        ["Wrong", totalMarks / 10 - marks / 10],
                      ]}
                      options={{
                        title: "Marks Distribution",
                        // Just add this option
                        pieHole: 0.45,
                      }}
                      rootProps={{ "data-testid": "3" }}
                    />
                  </div>
                  <div className="marks">
                    <h2 className="inlarge">Marks</h2>
                    <div className="marksBox">
                      <div className="obtained__marks">
                        {marks} | {totalMarks}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="attempted">
                  <div className="total__attempted">
                    <div className="percentage">
                      <div className="percentage__heading">
                        Attempted: {totalAttempt}{" "}
                      </div>
                      <Progress
                        percent={Math.floor((totalAttempt / totalMarks) * 100)}
                        status="active"
                      />
                    </div>
                  </div>
                  <div className="correct__attempted">
                    <div className="percentage">
                      <div className="percentage__heading">
                        Correct Answers: {rightAnswers}
                      </div>
                      <Progress
                        percent={Math.floor((rightAnswers / totalMarks) * 100)}
                        status="active"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <button onClick={handleEvaluate} disabled={loading} style={{ margin: '10px 0' }}>
        {loading ? 'Evaluating...' : 'Evaluate with GenAI'}
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {evaluation && (
        <div style={{ marginTop: '10px', background: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
          <h3>GenAI Evaluation:</h3>
          <p>{evaluation}</p>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedTest: state.selectedTest.selectedTestResultData,
  };
};

export default connect(mapStateToProps, null)(ShowResult);
