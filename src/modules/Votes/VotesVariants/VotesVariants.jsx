import PropTypes from "prop-types";
import css from "../votes.module.css";
import Button from "../../../shared/components/Button/Button";
// import Votes from "../Votes";


const VotesVariants = ({addVotes}) => {
    return (
        <>
                <ul className={css.block}>
                    <li>
                        <Button onClick={() => addVotes("good")} type="button">Good</Button>
                    </li>
                    <li>
                        <Button onClick={() => addVotes("neutral")} type="button">Neutral</Button>
                    </li>
                    <li>
                        <Button onClick={() => addVotes("bad")} type="button">Bad</Button>
                    </li>
                </ul>
        </>
    )
}

export default VotesVariants;

VotesVariants.propTypes = {
    addVotes: PropTypes.func.isRequired,
}