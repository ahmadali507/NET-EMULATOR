import React from 'react';
import myContext from '../Context/conttext';
import { useContext } from 'react';
import './TestScores.css'; // Import the CSS file

const TestScores = () => {
    const { results } = useContext(myContext);
    console.log(results)
    let scores = results; 
    let totalScore = 0; 
    scores.forEach(element => {
        totalScore += element.score 
    });
    return (
        <div className="test-scores-container">
            <h2 style={{textAlign : 'center'}}>Test Scores</h2>
            <table className="test-scores-table">
                <thead>
                    <tr>
                        <th style={{paddingLeft : '20px'}}>Subject</th>
                        <th >Total</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {scores?.map((subject, index) => (
                        <tr key={index}>
                            <td style={{paddingLeft : '20px'}}>{subject.subject}</td>
                            <td style={{paddingLeft : '20px'}}>{subject.total}</td>
                            <td style={{paddingLeft : '20px'}}>{subject.score}</td>
                        </tr>
                    ))}
                    <tr>
                        <td style={{paddingLeft : '20px'}}>Total</td>
                        <td>200 Marks</td>
                        <td>{totalScore} Marks</td>
                    </tr>
                    <tr>
                        <td style={{paddingLeft : '20px', fontWeight : '600'}}>Total %</td>
                        <td style={{paddingLeft : '20px', fontWeight : '600'}}>100 %</td>
                        <td style={{paddingLeft : '20px', fontWeight : '600'}}>{(totalScore/200)*100} % </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TestScores;
