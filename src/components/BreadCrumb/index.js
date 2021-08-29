import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//styles
import { Wrapper, Content } from './BreadCrumb.style';
const BreadCrumb = ({ movieTitle }) => (
    <Wrapper>
        <Content>
            <Link to='/' >
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
);
BreadCrumb.protoTypes = {
    movieTitle: PropTypes.string,
}
export default BreadCrumb;