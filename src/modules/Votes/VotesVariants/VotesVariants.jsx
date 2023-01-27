import PropTypes from "prop-types";

import Button from "../../../shared/components/Button/Button";

import css from "../votes.module.css";

const VotesVariants = ({ options, addVotes }) => {
    const buttonsElements = options.map(name => <p key={name} >
        <Button onClick={() => addVotes(name)} type="button">{name}</Button>
                                       </p>)
    return (
        <>
                <div className={css.block}>
                    
                       {buttonsElements}
                
                </div>
        </>
    )
}

export default VotesVariants;



VotesVariants.propTypes = {
    addVotes: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

