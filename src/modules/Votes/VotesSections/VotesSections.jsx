import PropTypes from "prop-types";
import css from "./votesSections.module.css";

const VotesSections = ({ children, title }) => {
    return(
    <div className={css.wrapper}>
        <h3 className={css.title}>{title }</h3>
        {children}
        </div>
    )
}

export default VotesSections;

VotesSections.prototypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}