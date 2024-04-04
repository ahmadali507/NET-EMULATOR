import React from 'react';
import myContext from '../Context/conttext';
import { useContext } from 'react';
import './TestScores.css'; // Import the CSS file

const TestScores = () => {
    const { results } = useContext(myContext);
    
    return (
        <div className="test-scores-container">
            <h2>Test Scores</h2>
            <table className="test-scores-table">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {results?.map((subject, index) => (
                        <tr key={index}>
                            <td>{subject.subject}</td>
                            <td>{subject.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TestScores;
