import { useState } from "react";

import VotesVariants from "./VotesVariants/VotesVariants";
import VotesStatistics from "./VotesStatistics/VotesStatistics";
import VotesSections from "./VotesSections/VotesSections";
import Message from "../../shared/components/Message/Message";

import css from "./votes.module.css";

const Votes = () => {
    const [voting, setVoting] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    })

const addVotes = (name) => {
    setVoting(prevState => {
        return { ...prevState, [name]: prevState[name] + 1 };
        })
    }

    const total = voting.good + voting.neutral + voting.bad;
   
    const countPositiveFeedbackPercentage = (propName) => {
        if (!total) {
            return 0;
        }
        const value = voting[propName];
        const positiveVoutes = ((value / total) * 100).toFixed(0);
        return Number(positiveVoutes);
            
    }

    const positiveVoutes = countPositiveFeedbackPercentage("good");
        
    return (
        <>
            <h2 className={css.titlePage}>Feedback of caffe Expresso</h2>
            <VotesSections title="Please leave feedback">
                <VotesVariants options={Object.keys(voting)} addVotes={addVotes} />
            </VotesSections>
            <VotesSections title="Statictics">
                {
                    total > 0 ?
                    (<VotesStatistics good={voting.good} neutral={voting.neutral} bad={voting.bad} total={total} positiveVoutes={positiveVoutes} />) :
                    (<Message message="There is no feedback" />)
                }
            </VotesSections>
        </>
        )
    }

 

export default Votes;