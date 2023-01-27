import PropTypes from "prop-types";
import 'react-notifications/lib/notifications.css';
import css from "../votes.module.css";
import Message from "../../../shared/components/Message/Message"

const VotesStatistics = ({ good, neutral, bad, total, positiveVoutes }) => {
    
    if (total === 0) {
        return(
            <Message message="There is no feedback" />
        )
        }
        return (
            
            <>
                <ul className={css.block}>
                    <li>
                        {/* <p className={css.text}>good</p> */}
                        <p className={css.box}>{good}</p>
                    </li>
                    <li>
                        {/* <p className={css.text}>neutral</p> */}
                        <p className={css.box}>{neutral}</p>
                    </li>
                    <li>
                        {/* <p className={css.text}>bad</p> */}
                        <p className={css.box}>{bad}</p>
                    </li>
                </ul>
                <div>
                    <h3 className={css.title}>Total voutes: {total}</h3>
                    <h3 className={css.title}>Pozitive feedback: {positiveVoutes} %</h3>
                </div>
            </>
        )
}

export default VotesStatistics;

VotesStatistics.propTypes = {
    total: PropTypes.number.isRequired,
    positiveVoutes: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
}