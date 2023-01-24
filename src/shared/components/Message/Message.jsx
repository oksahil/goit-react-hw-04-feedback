import PropTypes from "prop-types";
import css from "./message.module.css";

const MessageStatistics = ({ message }) => {
    return(
  <h3 className={css.title}>{message}</h3>
    )
}

export default MessageStatistics;

MessageStatistics.propTypes = {
    message: PropTypes.string.isRequired,
}