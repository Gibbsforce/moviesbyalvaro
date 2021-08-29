import React from 'react';
import PropTypes from 'prop-types';
//helpers
import { calcTime, convertMoney } from '../../helpers';
//styles
import { Wrapper, Content } from './MovieInfo.style';
const MovieInfoBar = ({ time, budget, revenue }) => (
    <Wrapper>
        <Content>
            <div className = 'column'>
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className = 'column'>
                <p>RBudget: {convertMoney(budget)}</p>
            </div>
            <div className = 'column'>
                <p>revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
);
MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}
export default MovieInfoBar;