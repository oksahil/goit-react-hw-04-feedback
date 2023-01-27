import PropTypes from "prop-types";

import Button from "../../../shared/components/Button/Button";

import css from "../votes.module.css";

const VotesVariants = ({ options, addVotes  }) => {
    return (
        <div className={css.block}>
            {options.map(option => {
                return (
                <Button type="button" onClick={() => addVotes (option)}
                    key={option}
                    className={css.btn}>
                    {option}
                </Button>
            );
            })}
        </div>
            
    );
};

export default VotesVariants;



VotesVariants.propTypes = {
    addVotes: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

