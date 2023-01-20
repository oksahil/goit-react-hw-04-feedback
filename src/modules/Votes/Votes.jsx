import { Component } from "react";
import css from "./votes.module.css";

class Votes extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
    }
    
    countPositiveFeedbackPercentage(propName) {

        const total = this.countTotalFeedback();
                if (!total) {
            return 0;
        }
        const value = this.state[propName];
        const positiveVoutes = ((value / total)*100).toFixed(2);
        return Number(positiveVoutes);
    }

    addGoodVotes = () => {
        this.setState(prevState => {
            return { good: prevState.good + 1 };
        })
    }
    addNeutralVotes = () => {
        this.setState(prevState => {
            return { neutral: prevState.neutral + 1 };
        })
    }
        addBadVotes = () => {
        this.setState(prevState => {
            return { bad: prevState.bad + 1 };
        })
    }
    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positiveVoutes = this.countPositiveFeedbackPercentage("good");
        
    return (
        <div>
            <h3 className={css.title}>Please leave feedback</h3>
            <div className={css.wrapper}>
                <ul className={css.block}>
                    <li>
                        <button className={css.btn} onClick={this.addGoodVotes}>good</button>
                        <p className={css.box}>{good}</p>
                        
                    </li>
                    <li>
                        <button className={css.btn} onClick={this.addNeutralVotes}>neutral</button>
                        <p className={css.box}>{neutral}</p>
                        
                    </li>
                    <li>
                        <button className={css.btn} onClick={this.addBadVotes}>bad</button>
                        <p className={css.box}>{bad}</p>
                        
                    </li>
                </ul>
            </div>
            <h3 className={css.title}>Total voutes: {total}</h3>
            <h3 className={css.title}>Pozitive feedback: {positiveVoutes} %</h3>
        </div>
        )
    }
}

export default Votes;